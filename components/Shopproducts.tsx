import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

{/*  products detail section like id, name, price, image */}
const products = [
  { id: 1, name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', image: '/Mask group.png'},
  { id: 2, name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', image: '/Granite dining table with dining chair 1.png' },
  { id: 3, name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', image: '/Outdoor bar table and stool 1.png' },
  { id: 4, name: 'Plain console with teak mirror', price: 'Rs. 25,000.00', image: '/Plain console with teak mirror 1.png' },
  { id: 5, name: 'Grain coffee table', price: 'Rs. 15,000.00', image: '/Grain coffee table 1.png' },
  { id: 6, name: 'Kent coffee table', price: 'Rs. 225,000.00', image: '/Kent coffee table 1.png' },
  { id: 7, name: 'Round coffee table_color 2', price: 'Rs. 251,000.00', image: '/Round coffee table_color 2 1.png' },
  { id: 8, name: 'Reclaimed teak coffee table', price: 'Rs. 25,200.00', image: '/Reclaimed teak coffee table 1.png' },
  { id: 9, name: 'Plain console_', price: 'Rs. 258,200.00', image: '/Plain console_ 1.png' },
  { id: 10, name: 'Reclaimed teak Sideboardr', price: 'Rs. 20,000.00', image: '/Reclaimed teak Sideboard 1.png' },
  { id: 11, name: 'SJP_0825', price: 'Rs. 200,000.00', image: '/SJP_0825  1.png' },
  { id: 12, name: 'Bella chair and table', price: 'Rs. 100,000.00', image: '/Bella chair and table 1.png' },
  { id: 13, name: 'Granite square side table', price: 'Rs. 258,800.00', image: '/Granite square side table 1.png' },
  { id: 14, name: 'Asgaard sofa', price: 'Rs. 250,000.00', image: '/Asgaard sofa 1 (1).png' },
  { id: 15, name: 'Maya sofa three seater', price: 'Rs. 115,000.00', image: '/Maya sofa three seater 1.png' },
  { id: 16, name: 'Outdoor sofa set', price: 'Rs. 244,000.00', image: '/Outdoor sofa set 1.png' },
]

{/* margins for different products */}
const margins      = ['mt-4', 'mt-14', 'mt-0', 'mt-6','mt-14','mt-14','mt-0','mt-12','mt-28', 'mt-12','mt-16','mt-14','mt-12','mt-14', 'mt-20', 'mt-10']
const marginsH3    = ['mt-2', 'mt-2', 'mt-2', 'mt-6', 'mt-4', 'mt-6', 'mt-2', 'mt-4', 'mt-8', 'mt-0', 'mt-1', 'mt-3', 'mt-0', 'mt-0', 'mt-10', 'mt-4'];
const marginsPrice = ['mt-6', 'mt-0', 'mt-6', 'mt-6', 'mt-4', 'mt-3', 'mt-3', 'mt-4', 'mt-4', 'mt-4', 'mt-4', 'mt-4', 'mt-4', 'mt-4', 'mt-4', 'mt-4'];


const Shopproducts = () => {
  return (
    <div className="w-full grid md:grid-cols-4 grid-cols-1 md:grid-row-1 md:mt-40 md:pl-24 justify-center items-center overflow-y-auto md:overflow-y-visible md:max-h-full max-h-[300px]">
      {/* mapping for products */}
      {products.map((product, index) => (
        <div key={product.id} className={`w-full md:w-[224px] h-auto flex flex-col items-center md:items-start ${margins[index % margins.length]}`}>
          <Link href={`/shop/${product.id}`}>
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="object-contain"
            />
            <h3 className={`font-poppins font-normal text-[16px] leading-6 text-[#000000] ${marginsH3[index % marginsH3.length]}`}>{product.name}</h3>
            <p className={`font-poppins font-medium text-[20px] leading-9 text-[#000000] ${marginsPrice[index % marginsPrice.length]}`}>{product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};


export default Shopproducts;
