import React, { useState } from "react";
import { assets } from "../assets/assets";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_2);
  const [isImageLoaded, setImageLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");

  const onSubmitHandler = async (e) => {

  }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col min-h-[90vh] justify-center items-center">
      <div>
        <div className="relative">
          <img src={image} alt="" className="max-w-sm rounded" />
          <span
            className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${
              isLoading ? "w-full transition-all duration-[10s]" : "w-0"
            }`}
          />
        </div>
        <p className={!isLoading ? "hidden" : ""}>Loading...</p>
      </div>

      {/* generate button with conditional render */}

      {!isImageLoaded && (
        <div className="flex w-full max-w-xl bg-neutral-700 text-white text-sm p-0.5 mt-10 rounded-full placeholder-color">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe what you want to generate"
            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20"
          />
          <button
            type="submit"
            className="bg-blue-700 hover:scale-[0.99] hover:bg-blue-800 ease-in-out transition-all duration-200 px-10 sm:px-16 py-3 rounded-full"
          >
            Generate
          </button>
        </div>
      )}

      {/* download button with conditional render*/}

      {isImageLoaded && (
        <div className="flex flex-wrap gap-2 justify-center text-white text-sm p-0.5 mt-10 rounded-full">
          <p
            onClick={() => setImageLoaded(false)}
            className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer"
          >
            Generate Another
          </p>
          <a
            href={image}
            download
            className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
          >
            Download
          </a>
        </div>
      )}
    </form>
  );
};

export default Result;
