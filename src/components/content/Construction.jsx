import React from "react";

const Construction = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md p-6 shadow-xl rounded-2xl">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Bob_the_builder.jpg/220px-Bob_the_builder.jpg"
          alt="Bob the Builder"
          className="w-48 mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold">Page Under Construction</h1>
        <p className="text-base-content mt-2">
          We're working on it! Check back soon.
        </p>
      </div>
    </div>
  );
};

export default Construction;
