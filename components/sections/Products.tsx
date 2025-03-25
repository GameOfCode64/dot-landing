"use client";
import { Store, Briefcase, Users } from "lucide-react";
import React from "react";

const products = [
  {
    id: 1,
    name: "Quickie ",
    icon: <Store className="text-purple-600 w-10 h-10" />,
    bgColor: "bg-purple-100",
    href: "https://dot-opal.vercel.app/shop",
  },
  {
    id: 2,
    name: "QuickGig",
    icon: <Briefcase className="text-blue-600 w-10 h-10" />,
    bgColor: "bg-blue-100",
    href: "https://dot-opal.vercel.app/shop",
  },
  {
    id: 3,
    name: "QuantMania",
    icon: <Users className="text-green-600 w-10 h-10" />,
    bgColor: "bg-green-100",
    href: "https://dot-opal.vercel.app/shop",
  },
];

const Products = () => {
  return (
    <div className="mt-24 md:px-12 px-4 flex flex-col my-8">
      {/* Heading */}
      <h1 className="text-4xl font-semibold text-center mb-8">Our Products</h1>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => {
              window.location.href = product.href;
            }}
            className="flex flex-col items-center border border-gray-200 bg-white shadow-md py-6 px-8 rounded-lg transition hover:shadow-lg"
          >
            {/* Icon Container */}
            <div className={`p-4 ${product.bgColor} rounded-lg shadow-sm`}>
              {product.icon}
            </div>

            {/* Product Name */}
            <p className="text-lg font-medium mt-4 text-black">
              {product.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
