// src/pages/volumes.tsx
import React, { useState } from "react";
import Layout from "@components/layout";

export default function Volumes() {
  const [isWalletOpen, setIsWalletOpen] = useState(false);

  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-6 text-white">Volumes</h2>
      <div className="mb-6">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Name, 0"
            className="w-full bg-transparent text-gray-100 border border-gray-600 rounded-lg py-2 px-4 pr-28 focus:outline-none focus:ring-2 focus:ring-custom-purple placeholder-gray-400"
          />
          <button
            className="absolute right-2 flex items-center px-3 py-2 text-gray-500 bg-transparent"
            onClick={() => setIsWalletOpen(!isWalletOpen)}
          >
            100 Wallet
            <svg
              className="ml-2 h-5 w-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isWalletOpen && (
            <div className="absolute right-2 mt-2 w-48 bg-gray-800 border border-gray-400 rounded-lg shadow-lg">
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => setIsWalletOpen(false)}
              >
                50 Wallet
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => setIsWalletOpen(false)}
              >
                100 Wallet
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => setIsWalletOpen(false)}
              >
                200 Wallet
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-1">
        <div className="block bg-transparent border border-gray-600 rounded-2xl px-5 py-4">
          <div className="block md:flex justify-between w-full">
            <h3 className="text-lg mt-3 mx-5 font-semibold text-gray-100">
              TX Amount ($)
            </h3>
            <div>
              <input
                type="number"
                placeholder="min"
                className="w-full md:w-auto my-2 md:m-2 text-gray-100 border-none rounded-lg py-2 px-4 focus:outline-none bg-[#262626] placeholder-grey-100"
              />
              <input
                type="number"
                placeholder="max"
                className="w-full md:w-auto my-2 md:m-2 text-gray-100 border-none rounded-lg py-2 px-4 focus:outline-none bg-[#262626] placeholder-grey-100"
              />
            </div>
          </div>
          <div className="block md:flex justify-between w-full">
            <h3 className="text-lg mt-3 mx-5 font-semibold text-gray-100">
              TX delay (Sec)
            </h3>
            <div>
              <input
                type="number"
                placeholder="min"
                className="w-full md:w-auto my-2 md:m-2 text-gray-100 border-none rounded-lg py-2 px-4 focus:outline-none bg-[#262626] placeholder-grey-100"
              />
              <input
                type="number"
                placeholder="max"
                className="w-full md:w-auto my-2 md:m-2 text-gray-100 border-none rounded-lg py-2 px-4 focus:outline-none bg-[#262626] placeholder-grey-100"
              />
            </div>
          </div>
          <div className="block md:flex justify-between w-full">
            <h3 className="text-lg mt-3 mx-5 font-semibold text-gray-100">
              Priority Fee (SOL)
            </h3>
            <div>
              <input
                type="number"
                placeholder="min"
                className="w-full md:w-auto my-2 md:m-2 text-gray-100 border-none rounded-lg py-2 px-4 focus:outline-none bg-[#262626] placeholder-grey-100"
              />
              <input
                type="number"
                placeholder="max"
                className="w-full md:w-auto my-2 md:m-2 text-gray-100 border-none rounded-lg py-2 px-4 focus:outline-none bg-[#262626] placeholder-grey-100"
              />
            </div>
          </div>
        </div>
      </div>
      <button className="mt-4 bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 absolute bottom-4 right-4 flex items-center justify-center">
        <svg
          className="w-4 h-4 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3l14 9-14 9V3z"
          />
        </svg>
      </button>
    </Layout>
  );
}
