"use client";
import React, { ChangeEvent, useState } from "react";

const FormComments = () => {
  const [comment, setComment] = useState<string>("");

  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = (e) => {
    console.log(comment);
  };

  return (
    <div>
      <div className="mt-4">
        <label
          htmlFor="comment"
          className="block text-gray-400 text-sm font-bold"
        >
          Add Comments
        </label>
        <input
          type="text"
          className="w-[500px] py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
          name="comment"
          value={comment}
          onChange={handleCommentChange}
        />
        <button
          className="bg-blue-500 p-2 rounded-lg my-5 mx-3"
          onClick={handleSubmitComment}
        >
          Submit Comment
        </button>
      </div>
    </div>
  );
};

export default FormComments;
