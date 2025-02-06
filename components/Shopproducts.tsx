"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { FaStar } from "react-icons/fa";

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
  rating?: string;
  description?: string;
}

const fetchProducts = async (): Promise<Product[]> => {
  const query = `*[_type == "product"] {
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
    rating,
    description
  }`;

  try {
    const products = await client.fetch(query);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

const Shopproducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };

    getProducts();
  }, []);

  const margins = [
    "mt-4",
    "mt-0",
    "mt-0",
    "mt-0",
    "mt-15",
    "mt-15",
    "mt-2",
    "mt-2",
    "mt-20",
    "mt-20",
    "mt-20",
    "mt-20",
    "mt-14",
    "mt-14",
  ];

  return (
    <div className="w-full grid md:grid-cols-4 grid-cols-1 md:grid-row-1 md:mt-10 md:pl-24 justify-center items-center gap-6 md:gap-8 overflow-y-auto md:overflow-y-visible md:max-h-full max-h-[300px]">
      {products.map((product, index) => (
        <div
          key={product._id}
          className={`w-full md:w-[224px] h-auto flex flex-col items-center md:items-start ${margins[index % margins.length]}`}
        >
          <Link
            href={`/shop/${product._id}`}
            className="flex flex-col items-center md:items-start"
          >
            <div className="relative w-[200px] h-[200px] mb-4">
              {/* Product Image */}
              <Image
                src={product.image.asset.url}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="font-poppins font-bold text-[18px] leading-6 text-[#000000] px-4 md:px-0">
              {product.name}
            </h3>

            <p className="font-poppins font-medium text-[16px] text-[#000000]">
              {`Rs. ${product.price}`}
            </p>

            <p className="font-poppins text-[14px] text-[#FF5733]">
              Discount: {product.discountPercentage}%
            </p>
            <p className="font-poppins text-[14px] text-[#8b5d42] inline-flex items-center">
              Rating: {product.rating}{" "}
              <FaStar color="#FFD700" size={14} className="ml-1" />
              `s
            </p>
            <p className="font-poppins text-[14px] text-[#888] mt-2 text-center md:text-left px-4 md:px-0">
              {product.description}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Shopproducts;
