"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string | { asset: { url: string } }; // Handle both string and object types for image
  quantity: number;
}

function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const [subtotal, setSubtotal] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    // Get cart from localStorage on component mount
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCart(parsedCart);
      updateTotals(parsedCart); // Update totals after setting the cart
    }
  }, []);

  // Function to update subtotal and total
  const updateTotals = (cart: Product[]) => {
    const newSubtotal = cart.reduce(
      (total, product) =>
        total + parseFloat(product.price.replace("Rs.", "").replace(",", "")) * product.quantity,
      0
    );
    setSubtotal(newSubtotal);
    setTotal(newSubtotal); // Assuming no taxes or discounts for simplicity
  };

  // Function to remove a product from the cart
  const removeFromCart = (id: string) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    updateTotals(updatedCart);
  };

  // Get image URL from product object or string
  const getImageUrl = (image: string | { asset: { url: string } }) => {
    if (typeof image === "object" && image?.asset?.url) {
      return image.asset.url;
    }
    return image as string;
  };

  return (
    <section className="flex flex-col min-h-screen justify-between items-center w-full overflow-hidden">
      <Header />
      <div className="flex flex-col md:flex-row justify-between my-10">
        {/* Cart Items (Cards) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cart.map((product) => (
            <div
              key={product.id}
              className="w-full bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
            >
              <div className="w-full h-[200px] relative mb-4">
                <Image
                  src={getImageUrl(product.image)}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="font-poppins font-bold text-[18px] text-black">{product.name}</h3>
              <p className="font-poppins text-[16px] text-black mt-2">{product.price}</p>
              <p className="font-poppins text-[14px] text-black mt-2">Quantity: {product.quantity}</p>
              <p className="font-poppins text-[14px] text-[#333] mt-2">
                Subtotal: Rs.{" "}
                {(
                  parseFloat(product.price.replace("Rs.", "").replace(",", "")) * product.quantity
                ).toLocaleString()}
              </p>
              <button
                onClick={() => removeFromCart(product.id)}
                className="mt-4 px-4 py-2 bg-[#6e4b3b] text-white rounded-md flex items-center gap-2"
              >
                <FaTrash />
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Cart Totals */}
        <div className="w-full md:w-[300px] bg-[#fff9e5] p-6 mt-10">
          <h1 className="text-center text-xl font-semibold">Cart Total</h1>
          <div className="flex justify-between items-center mb-4">
            <span>Subtotal:</span>
            <span>Rs. {subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span>Total:</span>
            <span>Rs. {total.toLocaleString()}</span>
          </div>
          <button className="w-full sm:w-[200px] py-3 border-[1px] border-[#000000]">
            <Link href="/checkout">Check Out</Link>
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default CartPage;
