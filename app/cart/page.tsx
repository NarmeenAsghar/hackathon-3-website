"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  price: string;
  image: {
    asset: {
      url: string;
    } | null; // Allow asset to be null
  };
  quantity: number;
}

export default function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]").map(
      (product: Product) => ({
        ...product,
        quantity: product.quantity || 1,
      })
    );
    setCart(savedCart);
  }, []);

  const handleRemove = (productToRemove: Product) => {
    const updatedCart = cart.filter(
      (product) => product.name !== productToRemove.name
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQuantity = (productToUpdate: Product) => {
    const updatedCart = cart.map((product) =>
      product.name === productToUpdate.name
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (productToUpdate: Product) => {
    const updatedCart = cart.map((product) =>
      product.name === productToUpdate.name && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cart
      .reduce((acc, product) => {
        const price = parseFloat(product.price.replace(/,/g, "")) || 0;
        return acc + price * (product.quantity || 0);
      }, 0)
      .toLocaleString();
  };

  return (
    <div>
      <Header />
      <div
        className="w-full h-[316px] bg-cover bg-center"
        style={{ backgroundImage: "url('/Rectangle 1.png')" }}
      >
        {/* top div */}
        <div className="flex items-center justify-center h-full">
          <div className="text-center p-6">
            <Image
              src="/Meubel House_Logos-05.png"
              alt="Image"
              width={77}
              height={77}
              className="ml-2"
            />
            <h1 className="font-poppins font-medium text-[48px] leading-[72px] text-[#000000] md:mb-4">
              Cart
            </h1>
            <div className="flex justify-center items-center">
              <p className="font-poppins font-medium text-[16px] leading-6 text-[#000000]">
                Home ...
              </p>
              <p className="font-poppins font-light text-[16px] leading-6 text-[#000000] pl-2">
                Cart
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Items Section */}
      <div className="min-h-screen bg-gray-50 flex justify-center items-start relative top-[-90px] py-10 mt-20">
        <div className="w-11/12 max-w-6xl bg-white rounded-lg shadow-lg p-8 flex flex-col lg:flex-row gap-10">
          {/* Cart Items List */}
          <div className="flex-1 overflow-x-auto">
            {cart.length === 0 ? (
              <p className="text-center text-xl font-semibold">
                Your cart is empty.
              </p>
            ) : (
              <div className="space-y-6">
                {cart.map((product, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row items-center justify-between p-4"
                  >
                    {/* Null check for image */}
                    {product.image?.asset?.url ? (
                      <Image
                        src={product.image.asset.url}
                        alt={product.name}
                        className="w-20 h-20 object-cover rounded-md"
                        width={80}
                        height={80}
                      />
                    ) : (
                      <div className="w-20 h-20 bg-gray-200 rounded-md flex items-center justify-center">
                        <span>No Image</span>
                      </div>
                    )}
                    <div className="flex-1 ml-4">
                      <h2 className="text-xl font-semibold">{product.name}</h2>
                      <p className="text-gray-600">
                        Price: Rs. {product.price}
                      </p>
                      <p className="text-gray-500">
                        Quantity: {product.quantity}
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:ml-4">
                      <button
                        onClick={() => decreaseQuantity(product)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        -
                      </button>
                      <button
                        onClick={() => increaseQuantity(product)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        +
                      </button>
                      <button
                        onClick={() => handleRemove(product)}
                        className="text-red-900"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Totals Section */}
          <div className="bg-gray-100 p-6 rounded-lg w-full lg:w-1/3 mt-6 sm:mt-0">
            <h2 className="text-xl font-bold mb-4 text-center">Cart Totals</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>Rs. {calculateTotal()}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Total</span>
              <span className="font-bold text-lg">Rs. {calculateTotal()}</span>
            </div>
            <Link
              href={{
                pathname: "/checkout",
                query: { totalAmount: calculateTotal() },
              }}
            >
              <button className="w-full bg-[#a57159] text-white py-2 rounded-md shadow-lg">
                Check Out
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
