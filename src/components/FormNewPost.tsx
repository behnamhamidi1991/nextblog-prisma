"use client";
import { useState } from "react";
import React from "react";
import { FormData } from "@/types/blog";
const inputClass =
  "w-[500px] py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300";

const FormNewPost = () => {
  const [formData, setFormData] = useState<FormData>();
  return (
    <form className="max-w-4xl mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          className={inputClass}
          placeholder="Enter the title"
          name="title"
        />
      </div>
      <div className="mb-4">
        <textarea className="w-[500px] h-[200px] text-black" />
      </div>

      <button type="submit" className="bg-blue-500 p-2 rounded-lg">
        Submit
      </button>
    </form>
  );
};

export default FormNewPost;
