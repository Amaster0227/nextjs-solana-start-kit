// src/components/Layout.tsx
import React, { ReactNode, useState, useEffect } from "react";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDaskOpen, setIsDaskOpen] = useState(false);
  const [isActiveOpen, setIsActiveOpen] = useState(false);

  useEffect(() => {
    // Ensure Tailwind CSS transitions work properly
    const style = document.createElement("style");
    style.textContent = `
      .transition-all {
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
      }
    `;
    document.head.appendChild(style);

    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.querySelector(".sidebar");
      if (sidebar && !sidebar.contains(event.target as Node)) {
        setIsSidebarOpen(false); // Close sidebar on mobile when clicking outside
        setIsDaskOpen(false);
        setIsActiveOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Mobile Toggle Button (Hamburger Menu) - Hidden when sidebar is open */}
      {!isSidebarOpen && (
        <button
          className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-custom-purple"
          onClick={() => setIsSidebarOpen(true)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed h-screen p-5 transition-all duration-300 z-50
          ${
            isSidebarOpen
              ? "left-0 bg-[#0E0E0E]"
              : "-left-64 md:static md:left-0 md:w-64"
          }
          md:bg-[rgba(255,255,255,0.05)] md:rounded-r-[24px]
          md:flex md:flex-col md:h-screen md:w-80
        `}
      >
        <nav className="flex flex-col space-y-1 flex-grow">
          <Link
            href="/tokens"
            className="text-gray-300 hover:text-white py-3 px-4 rounded-r-lg"
            onClick={() => {
              setIsSidebarOpen(false);
              setIsDaskOpen(false); // Close dropdowns when navigating
              setIsActiveOpen(false);
            }}
          >
            Tokens
          </Link>
          <Link
            href="/wallets"
            className="text-gray-300 hover:text-white py-3 px-4 rounded-r-lg"
            onClick={() => {
              setIsSidebarOpen(false);
              setIsDaskOpen(false);
              setIsActiveOpen(false);
            }}
          >
            Wallets
          </Link>
          <Link
            href="/frontrun"
            className="text-gray-300 hover:text-white py-3 px-4 rounded-r-lg"
            onClick={() => {
              setIsSidebarOpen(false);
              setIsDaskOpen(false);
              setIsActiveOpen(false);
            }}
          >
            Frontrun
          </Link>
          {/* $DASK Dropdown */}
          <div className="relative py-1">
            <button
              className="justify-between text-gray-300 hover:text-white py-3 px-4 flex items-center w-full border border-gray-500 border-solid rounded-xl"
              onClick={() => {
                setIsDaskOpen(!isDaskOpen);
                if (isSidebarOpen) setIsSidebarOpen(true); // Keep sidebar open on mobile
              }}
            >
              $DASK
              <svg
                className="ml-2 h-5 w-5 text-gray-300"
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
            {isDaskOpen && (
              <div className="w-64">
                <div className="flex justify-between items-center">
                  <span className="ml-4 text-gray-500 py-4">Preparation</span>
                  {/* Horizontal line */}
                  <div className="flex-1 ml-4 border-t border-gray-300/30 group-hover:border-white/50 transition-colors"></div>
                </div>
                <Link
                  href="/dask/send-funds"
                  className="block pl-8 text-gray-400 hover:text-white hover:bg-[#0E0E0E]/20 md:hover:bg-[rgba(255,255,255,0.05)]/20 py-2 px-4"
                  onClick={() => {
                    setIsDaskOpen(false);
                    setIsSidebarOpen(false);
                  }}
                >
                  Send Funds
                </Link>
                <Link
                  href="/dask/collect-funds"
                  className="block pl-8 text-gray-400 hover:text-white hover:bg-[#0E0E0E]/20 md:hover:bg-[rgba(255,255,255,0.05)]/20 py-2 px-4"
                  onClick={() => {
                    setIsDaskOpen(false);
                    setIsSidebarOpen(false);
                  }}
                >
                  Collect Funds
                </Link>
                <Link
                  href="/dask/initialization"
                  className="block pl-8 text-gray-400 hover:text-white hover:bg-[#0E0E0E]/20 md:hover:bg-[rgba(255,255,255,0.05)]/20 py-2 px-4"
                  onClick={() => {
                    setIsDaskOpen(false);
                    setIsSidebarOpen(false);
                  }}
                >
                  Initialization
                </Link>
                <Link
                  href="/dask/bundle"
                  className="block pl-8 text-gray-400 hover:text-white hover:bg-[#0E0E0E]/20 md:hover:bg-[rgba(255,255,255,0.05)]/20 py-2 px-4"
                  onClick={() => {
                    setIsDaskOpen(false);
                    setIsSidebarOpen(false);
                  }}
                >
                  Bundle
                </Link>
                <Link
                  href="/dask/liquidity"
                  className="block pl-8 text-gray-400 hover:text-white hover:bg-[#0E0E0E]/20 md:hover:bg-[rgba(255,255,255,0.05)]/20 py-2 px-4"
                  onClick={() => {
                    setIsDaskOpen(false);
                    setIsSidebarOpen(false);
                  }}
                >
                  Liquidity
                </Link>
                <div className="flex justify-between items-center">
                  <span className="ml-4 text-gray-500 py-4">Active</span>
                  {/* Horizontal line */}
                  <div className="flex-1 ml-4 border-t border-gray-300/30 group-hover:border-white/50 transition-colors"></div>
                </div>
                <Link
                  href="/trade"
                  className="block pl-8 text-gray-300 hover:text-white hover:bg-[#0E0E0E]/20 md:hover:bg-[rgba(255,255,255,0.05)]/20 py-2 px-4"
                  onClick={() => {
                    setIsActiveOpen(false);
                    setIsSidebarOpen(false);
                  }}
                >
                  Trade
                </Link>
                <Link
                  href="/volumes"
                  className="block pl-8 text-gray-300 hover:text-white hover:bg-[#0E0E0E]/20 md:hover:bg-[rgba(255,255,255,0.05)]/20 py-2 px-4"
                  onClick={() => {
                    setIsActiveOpen(false);
                    setIsSidebarOpen(false);
                  }}
                >
                  Volumes
                </Link>
                <Link
                  href="/transactions"
                  className="block pl-8 text-gray-300 hover:text-white hover:bg-[#0E0E0E]/20 md:hover:bg-[rgba(255,255,255,0.05)]/20 py-2 px-4"
                  onClick={() => {
                    setIsActiveOpen(false);
                    setIsSidebarOpen(false);
                  }}
                >
                  Transactions
                </Link>
                <Link
                  href="/holders-makers"
                  className="block pl-8 text-gray-300 hover:text-white hover:bg-[#0E0E0E]/20 md:hover:bg-[rgba(255,255,255,0.05)]/20 py-2 px-4"
                  onClick={() => {
                    setIsActiveOpen(false);
                    setIsSidebarOpen(false);
                  }}
                >
                  Holders and Makers
                </Link>
                <Link
                  href="/manual-purchases"
                  className="block pl-8 text-gray-300 hover:text-white hover:bg-[#0E0E0E]/20 md:hover:bg-[rgba(255,255,255,0.05)]/20 py-2 px-4"
                  onClick={() => {
                    setIsActiveOpen(false);
                    setIsSidebarOpen(false);
                  }}
                >
                  Manual Purchases
                </Link>
                <Link
                  href="/balance-other"
                  className="block pl-8 text-gray-300 hover:text-white hover:bg-[#0E0E0E]/20 md:hover:bg-[rgba(255,255,255,0.05)]/20 py-2 px-4"
                  onClick={() => {
                    setIsActiveOpen(false);
                    setIsSidebarOpen(false);
                  }}
                >
                  Balance of Other People&apos;s Money
                </Link>
              </div>
            )}
          </div>
        </nav>
        <div className="mt-auto flex items-center justify-between p-3">
          <button className="bg-[#0E0E0E] text-gray-300 md:bg-[rgba(255,255,255,0.05)] md:text-white md:rounded-r-[24px] w-10 h-10 flex items-center justify-center">
            Exit
          </button>
          <span className="text-gray-500 md:text-white ms-2">EN</span>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex flex-col mx-auto bg-dark-blue text-gray-100 p-[16px] md:p-[64px] w-full md:w-auto">
        <div className="container mx-auto">{children}</div>
      </main>

      <style jsx global>{`
        .sidebar {
          z-index: 50;
        }
        /* Hide scrollbar on mobile and desktop */
        .sidebar::-webkit-scrollbar {
          display: none;
        }
        .sidebar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
}
