import Comments from "@/components/Comments";
import FormComments from "@/components/FormComments";
import React from "react";

const BlogDetailPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold">Post One</h1>
      <p>Written By: John Doe</p>
      <div className="mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt excepturi
        praesentium dignissimos consectetur pariatur repellat quae error, sequi
        sit accusantium sed. Soluta quibusdam quae accusamus sunt veniam ducimus
        magnam esse.
      </div>

      <Comments />
      <FormComments />
    </div>
  );
};

export default BlogDetailPage;
