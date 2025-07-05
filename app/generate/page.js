"use client";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'next/navigation';

const Generate = () => {
  const searchParams = useSearchParams();
  const [links, setlinks] = useState([{ link: "", linktext: "" }]);
  const [handle, sethandle] = useState(searchParams.get('handle'));
  const [pic, setpic] = useState("");
  const [desc, setdesc] = useState("");

  const handleChange = (index, link, linktext) => {
    setlinks((initialLinks) =>
      initialLinks.map((item, i) =>
        i === index ? { link, linktext } : item
      )
    );
  };

  const addLink = () => {
    setlinks([...links, { link: "", linktext: "" }]);
  };

  const sumbitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ links, handle, pic, desc });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const r = await fetch("http://localhost:3000/api/add", requestOptions);
    const result = await r.json();

    if (result.success) {
      toast.success(result.message);
      setlinks([{ link: "", linktext: "" }]);
      setpic("");
      sethandle("");
      setdesc("");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="bg-[#E9C0E9]  min-h-screen grid grid-cols-1 md:grid-cols-2 items-center transition-all duration-300">
      {/* Left Side */}
      <div className="flex justify-center items-center flex-col text-gray-900 pt-[110px] md:pt-0">
        <div className="flex flex-col gap-6 my-8 w-full max-w-xl px-6">
          <h1 className="font-bold text-4xl text-center mt-24 -ml-24 bg-gradient-to-r from-purple-700 to-fuchsia-500 text-transparent bg-clip-text">
            Create your Bittree
          </h1>

          {/* Step 1: Handle */}
          <div className="item">
            <h2 className="font-semibold text-2xl animate-pulse text-purple-800">Step 1: Claim your Handle</h2>
            <div className="mt-2">
              <input
                type="text"
                value={handle || ""}
                onChange={(e) => sethandle(e.target.value)}
                placeholder="Choose a handle"
                className="w-full border bg-white px-4 py-3 mt-2 focus:outline-pink-600 rounded-full shadow-md focus:ring-2 focus:ring-purple-300 transition-all"
              />
            </div>
          </div>

          {/* Step 2: Links */}
          <div className="item">
            <h2 className="font-semibold text-2xl animate-pulse text-purple-800">Step 2: Add your Links</h2>
            {links.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-2 mt-2">
                <input
                  value={item.linktext || ""}
                  onChange={(e) => handleChange(index, item.link, e.target.value)}
                  className="flex-1 px-4 py-2 border bg-white focus:outline-pink-500 rounded-full shadow-sm"
                  type="text"
                  placeholder="Enter link text"
                />
                <input
                  value={item.link || ""}
                  onChange={(e) => handleChange(index, e.target.value, item.linktext)}
                  className="flex-1 px-4 py-2 border bg-white focus:outline-pink-500 rounded-full shadow-sm"
                  type="text"
                  placeholder="Enter link"
                />
              </div>
            ))}
            <button
              onClick={addLink}
              className="mt-3 px-6 py-2 bg-purple-800 hover:bg-purple-700 text-white font-bold rounded-3xl border border-black shadow-md transition-all"
            >
              + Add Link
            </button>
          </div>

          {/* Step 3: Pic & Desc */}
          <div className="item">
            <h2 className="font-semibold text-2xl animate-pulse text-purple-800">Step 3: Add a profile picture and finalise</h2>
            <div className="flex flex-col gap-3 mt-2">
              <input
                type="text"
                value={pic || ""}
                onChange={(e) => setpic(e.target.value)}
                placeholder="Enter link to your picture"
                className="border bg-white px-4 py-3 focus:outline-pink-600 rounded-full shadow-sm"
              />
              <input
                type="text"
                value={desc || ""}
                onChange={(e) => setdesc(e.target.value)}
                placeholder="Enter description"
                className="border bg-white px-4 py-3 focus:outline-pink-600 rounded-full shadow-sm"
              />
              <button
                disabled={!pic || !handle || !links[0].linktext}
                onClick={sumbitLinks}
                className="disabled:bg-gray-400 bg-fuchsia-700 hover:bg-fuchsia-800 text-white px-6 py-3 rounded-3xl font-bold mt-3 w-full border border-black shadow-lg transition-all"
              >
                Create Your BitTree
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="w-full h-full flex justify-center items-center p-6">
        <img
          className="max-h-[80vh] w-[300px] mt-24 object-contain rounded-xl shadow-lg transition-transform hover:scale-105 duration-300"
          src="/generate.png"
          alt="Generate Your Links"
        />
      </div>

      <ToastContainer />
    </div>
  );
};

export default Generate;
