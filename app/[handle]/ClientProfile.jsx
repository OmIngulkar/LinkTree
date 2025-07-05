"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ClientProfile({ item }) {
  const [data, setData] = useState(item);

  useEffect(() => {
    if (item) {
      localStorage.setItem(`bittree-${item.handle}`, JSON.stringify(item));
    }
  }, [item]);

  useEffect(() => {
    if (!data) {
      const saved = localStorage.getItem(`bittree-${item.handle}`);
      if (saved) {
        setData(JSON.parse(saved));
      }
    }
  }, []);

  if (!data) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-pink-200 to-yellow-100 flex justify-center items-start py-10 px-4">
      <div className="w-full max-w-md bg-white/90 rounded-3xl shadow-xl p-6 flex flex-col items-center gap-5 backdrop-blur-md">
        <img
          src={data.pic}
          alt="Profile"
          className="object-cover"
        />
        <h1 className="text-2xl font-bold text-purple-900">@{data.handle}</h1>

        {data.desc && (
          <p className="text-center text-gray-700 text-base px-4">
            {data.desc}
          </p>
        )}

        <div className="w-full mt-4 flex flex-col gap-3">
          {data.links.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              target="_blank"
              className="block w-full text-center py-3 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-200"
            >
              {link.linktext}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
