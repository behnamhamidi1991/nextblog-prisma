"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import React from "react";
import { FormData } from "@/types/blog";
const inputClass =
  "w-[500px] py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black";

const FormNewPost = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    content: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="max-w-4xl mx-auto p-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          type="text"
          className={inputClass}
          placeholder="Enter the title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <textarea
          className="w-[500px] h-[200px] text-black p-3"
          value={formData.content}
          name="content"
          placeholder="Write what is in your mind"
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="bg-blue-500 p-2 rounded-lg">
        Submit
      </button>
    </form>
  );
};

export default FormNewPost;
