"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation"; 
import dynamic from "next/dynamic"; 
import { client } from "@/sanity/lib/client";

const Header = dynamic(() => import("@/components/Header"));
const Footer = dynamic(() => import("@/components/Footer"));

interface Product {
  _id: string;
  name: string;
  price: string;
  image: {
    asset: {
      url: string;
    };
  };
  discountPercentage?: number;
  category?: string;
  description?: string;
  dimensions?: string;
  material?: string;
  sizes?: string[];
}

const fetchProductById = async (productId: string): Promise<Product | null> => {
  const query = `*[_type == "product" && _id == $id][0] {
    _id,
    name,
    price,
    image {
      asset -> {
        _id,
        url
      }
    },
    discountPercentage,
    category,
    description
  }`;

  try {
    const product = await client.fetch(query, { id: productId });
    return product || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

const ProductDetail = () => {
  const params = useParams(); 
  const productId = params?.id as string; 

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedDimension, setSelectedDimension] = useState<string | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  useEffect(() => {
    if (productId) {
      const getProduct = async () => {
        const fetchedProduct = await fetchProductById(productId);
        setProduct(fetchedProduct);
      };

      getProduct();
    } else {
      console.error("Product ID not found in the URL");
    }
  }, [productId]);

  const productDetails = {
    dimensions: ["40 x 20 x 30 inches", "45 x 22 x 32 inches", "50 x 25 x 35 inches"],
    material: ["Wood", "Metal", "Fabric", "Plastic"],
    sizes: ["Small", "Medium", "Large"]
  };

  const handleDimensionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDimension(event.target.value);
  };

  const handleMaterialChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMaterial(event.target.value);
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(event.target.value);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="bg-gray-50">
      <Header />
      <div
        className="w-full h-[316px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/Rectangle 1.png')",
          backgroundColor: "#f4f0e1",
        }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center p-6">
            <Image
              src="/Meubel House_Logos-05.png"
              alt="Logo"
              width={77}
              height={77}
              className="ml-4"
            />
            <h1 className="font-poppins font-medium text-[48px] leading-[72px] text-[#3e3e3e] md:mb-4">
              Shop
            </h1>
            <div className="flex justify-center items-center">
              <p className="font-poppins font-medium text-[16px] leading-6 text-[#3e3e3e]">
                Home ...{" "}
              </p>
              <p className="font-poppins font-light text-[16px] leading-6 text-[#3e3e3e] pl-2">
                Shop
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-40">
        <div className="w-full md:w-[60%] flex flex-col md:flex-row items-center md:items-start">
          <img
            src={product.image.asset.url}
            alt={product.name}
            className="object-contain rounded-[10px]"
            width={300}
            height={300}
          />
          <div className="md:ml-20 text-center md:text-left">
            <h2 className="font-poppins font-semibold text-[30px] leading-9 text-black">
              {product.name}
            </h2>
            <p className="font-poppins font-normal text-[16px] leading-6 text-[#555555] mt-6">
              {product.description}
            </p>
            <p className="font-poppins font-medium text-[20px] text-[#412d23] mt-4">
              Rs. {product.price}
            </p>

            {/* Dropdown for Dimensions */}
            <div className="mt-4">
              <label className="font-poppins font-medium text-[16px] text-[#6e4b3b]">
                Select Dimensions:
              </label>
              <select
                className="ml-2 p-2 border border-gray-300 rounded"
                value={selectedDimension || ""}
                onChange={handleDimensionChange}
              >
                <option value="">Choose Dimension</option>
                {productDetails.dimensions.map((dimension, index) => (
                  <option key={index} value={dimension}>
                    {dimension}
                  </option>
                ))}
              </select>
            </div>

            {/* Dropdown for Material */}
            <div className="mt-4">
              <label className="font-poppins font-medium text-[16px] text-[#6e4b3b]">
                Select Material:
              </label>
              <select
                className="ml-2 p-2 border border-gray-300 rounded"
                value={selectedMaterial || ""}
                onChange={handleMaterialChange}
              >
                <option value="">Choose Material</option>
                {productDetails.material.map((material, index) => (
                  <option key={index} value={material}>
                    {material}
                  </option>
                ))}
              </select>
            </div>

            {/* Dropdown for Size */}
            <div className="mt-4">
              <label className="font-poppins font-medium text-[16px] text-[#6e4b3b]">
                Select Size:
              </label>
              <select
                className="ml-2 p-2 border border-gray-300 rounded"
                value={selectedSize || ""}
                onChange={handleSizeChange}
              >
                <option value="">Choose Size</option>
                {productDetails.sizes.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-[237px] py-3 mt-4 bg-[#6e4b3b] text-white border-[1px] border-[#6e4b3b] rounded-[15px] font-poppins font-normal text-[16px] leading-[24px] hover:bg-[#8b5d42]"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default ProductDetail;
