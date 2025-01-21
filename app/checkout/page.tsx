"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  price: string;
  image: {
    asset: {
      url: string;
    };
  };
  quantity: number;
}

export default function CheckoutPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    phone: "",
    email: "",
    country: "",
    streetAddress: "",
    townCity: "",
    province: "",
    zipCode: "",
    paymentMethod: "",
  });
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [orderTracking, setOrderTracking] = useState({
    status: "Pending",
    estimatedDeliveryDate: "",
  });

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]").map(
      (product: Product) => ({
        ...product,
        quantity: product.quantity || 1,
      })
    );
    setCart(savedCart);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePlaceOrder = () => {
    setIsOrderPlaced(true);
    setOrderTracking({
      status: "Shipped",
      estimatedDeliveryDate: "2025-02-05", // Example date, you can calculate dynamically
    });

    localStorage.setItem("cart", JSON.stringify([]));
    setCart([]);
  };

  return (
    <section className="flex flex-col min-h-screen justify-between items-center w-full overflow-hidden">
      <Header />
      <div
        className="w-full h-[316px] bg-cover bg-center"
        style={{ backgroundImage: "url('/Rectangle 1.png')" }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center p-6">
            <Image
              src="/Meubel House_Logos-05.png"
              alt="Logo"
              width={77}
              height={77}
              className="ml-20"
            />
            <h1 className="font-poppins font-medium text-[48px] leading-[72px] text-[#000000] md:mb-4">
              Check Out
            </h1>
            <div className="flex justify-center items-center">
              <p className="font-poppins font-medium text-[16px] leading-6 text-[#000000]">
                Home ...{" "}
              </p>
              <p className="font-poppins font-light text-[16px] leading-6 text-[#000000] pl-2">
                Check Out
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex justify-center items-center md:mt-20">
        <div className="w-full max-w-[1440px]">
          <h1 className="text-center font-poppins font-bold text-[36px] leading-[54px] text-[#000000]">
            Get In Touch With Us
          </h1>
          <p className="text-center font-poppins font-normal text-[16px] leading-6 text-[#9f9f9f] mt-4 mb-8 px-6 md:px-0">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us <br /> An Email. Our Staff Always Be There To Help You
            Out. Do Not Hesitate!
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-20 w-full md:h-full">
            {/* User Information Form */}
            <div className="w-full mt-10 order-1 px-10 md:px-0">
              <form>
                <div className="mb-4 flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="firstName"
                      className="block font-poppins font-medium text-[16px] leading-6 text-[#000000] pb-4"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      value={userDetails.firstName}
                      onChange={handleInputChange}
                      className="w-full p-3 border-[1px] border-[#9f9f9f] rounded-[10px] text-[#9f9f9f] font-poppins font-medium text-[16px] leading-6"
                      required
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="lastName"
                      className="block font-poppins font-medium text-[16px] leading-6 text-[#000000] pb-4"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      value={userDetails.lastName}
                      onChange={handleInputChange}
                      className="w-full p-3 border-[1px] border-[#9f9f9f] rounded-[10px] text-[#9f9f9f] font-poppins font-medium text-[16px] leading-6"
                      required
                    />
                  </div>
                </div>

                {/* Other Input Fields */}
                <div className="mb-4">
                  <label
                    htmlFor="companyName"
                    className="block font-poppins font-medium text-[16px] leading-6 text-[#000000] pb-4"
                  >
                    Company Name (Optional)
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    name="companyName"
                    value={userDetails.companyName}
                    onChange={handleInputChange}
                    className="w-full p-3 border-[1px] border-[#9f9f9f] rounded-[10px] text-[#9f9f9f] font-poppins font-medium text-[16px] leading-6"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block font-poppins font-medium text-[16px] leading-6 text-[#000000] pb-4"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    value={userDetails.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border-[1px] border-[#9f9f9f] rounded-[10px] text-[#9f9f9f] font-poppins font-medium text-[16px] leading-6"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block font-poppins font-medium text-[16px] leading-6 text-[#000000] pb-4"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={userDetails.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border-[1px] border-[#9f9f9f] rounded-[10px] text-[#9f9f9f] font-poppins font-medium text-[16px] leading-6"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="streetAddress"
                    className="block font-poppins font-medium text-[16px] leading-6 text-[#000000] pb-4"
                  >
                    Street Address
                  </label>
                  <input
                    id="streetAddress"
                    type="text"
                    name="streetAddress"
                    value={userDetails.streetAddress}
                    onChange={handleInputChange}
                    className="w-full p-3 border-[1px] border-[#9f9f9f] rounded-[10px] text-[#9f9f9f] font-poppins font-medium text-[16px] leading-6"
                    required
                  />
                </div>

                <div className="mb-4 flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="townCity"
                      className="block font-poppins font-medium text-[16px] leading-6 text-[#000000] pb-4"
                    >
                      Town/City
                    </label>
                    <input
                      id="townCity"
                      type="text"
                      name="townCity"
                      value={userDetails.townCity}
                      onChange={handleInputChange}
                      className="w-full p-3 border-[1px] border-[#9f9f9f] rounded-[10px] text-[#9f9f9f] font-poppins font-medium text-[16px] leading-6"
                      required
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="province"
                      className="block font-poppins font-medium text-[16px] leading-6 text-[#000000] pb-4"
                    >
                      Province
                    </label>
                    <input
                      id="province"
                      type="text"
                      name="province"
                      value={userDetails.province}
                      onChange={handleInputChange}
                      className="w-full p-3 border-[1px] border-[#9f9f9f] rounded-[10px] text-[#9f9f9f] font-poppins font-medium text-[16px] leading-6"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="zipCode"
                    className="block font-poppins font-medium text-[16px] leading-6 text-[#000000] pb-4"
                  >
                    Zip Code
                  </label>
                  <input
                    id="zipCode"
                    type="text"
                    name="zipCode"
                    value={userDetails.zipCode}
                    onChange={handleInputChange}
                    className="w-full p-3 border-[1px] border-[#9f9f9f] rounded-[10px] text-[#9f9f9f] font-poppins font-medium text-[16px] leading-6"
                    required
                  />
                </div>

                {/* Payment Method */}
                <div className="mb-4">
                  <label
                    htmlFor="paymentMethod"
                    className="block font-poppins font-medium text-[16px] leading-6 text-[#000000] pb-4"
                  >
                    Payment Method
                  </label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    value={userDetails.paymentMethod}
                    onChange={handleInputChange}
                    className="w-full p-3 border-[1px] border-[#9f9f9f] rounded-[10px] text-[#9f9f9f] font-poppins font-medium text-[16px] leading-6"
                    required
                  >
                    <option value="">Select Payment Method</option>
                    <option value="creditCard">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bankTransfer">Bank Transfer</option>
                  </select>
                </div>

                <div className="mb-4 text-center">
                  <button
                    type="button"
                    className="w-full bg-[#a57159] text-white py-2 rounded-md shadow-lg"
                    onClick={handlePlaceOrder}
                  >
                    Place Order
                  </button>
                </div>
              </form>
            </div>

            {/* Cart Section */}
            <div className="w-full p-6 mb-5 pt-8">
              <h2 className="text-center font-poppins font-bold text-[24px] mb-6">
                Your Cart
              </h2>

              {/* Empty Cart Message */}
              {cart.length === 0 ? (
                <div className="flex flex-col justify-center items-center text-center">
                  <Image
                    src="/empty-cart-icon.png"
                    alt="Empty Cart"
                    width={120}
                    height={120}
                  />
                  <p className="font-poppins text-[20px] font-bold text-[#9f9f9f] mt-4">
                    Your cart is empty
                  </p>
                  <p className="font-poppins text-[16px] text-[#9f9f9f] mt-2">
                    It looks like you have not added anything to your cart yet.
                  </p>
                  <Link href="/shop">
                  <button className="mt-4 bg-[#a57159] text-white py-2 px-6 rounded-md">
                    Start Shopping
                  </button>
                  </Link>
                </div>
              ) : (
                <div>
                  {cart.map((product) => (
                    <div
                      key={product.id}
                      className="flex justify-between items-center mb-6 p-4 border border-[#e0e0e0] rounded-lg shadow-md"
                    >
                      <div className="flex items-center gap-4">
                        <Image
                          src={product.image.asset.url}
                          alt={product.name}
                          width={80}
                          height={80}
                          className="object-cover"
                        />
                        <div>
                          <p className="font-poppins text-[16px] font-semibold text-[#000000]">{product.name}</p>
                          <p className="font-poppins text-[14px] text-[#9f9f9f]">Qty: {product.quantity}</p>
                        </div>
                      </div>
                      <p className="font-poppins text-[16px] font-semibold text-[#000000]">{product.price}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Order Tracking */}
            {isOrderPlaced && (
              <div className="mt-10 text-center">
                <h3 className="font-poppins font-bold text-[20px]">
                  Order Status: {orderTracking.status}
                </h3>
                <p className="font-poppins font-normal text-[16px] text-[#9f9f9f]">
                  Estimated Delivery: {orderTracking.estimatedDeliveryDate}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
