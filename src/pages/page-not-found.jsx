import React from "react";

export function PageNotFound() {
  return (
    <div className="h-screen flex items-center justify-center p-4 gap-12 flex-col md:flex-row">
      <div className="flex flex-col gap-6">
        <h1 className="text-6xl font-semibold text-sky-600">Circle</h1>
        <h3>
          <strong>404.</strong> That's an Error
        </h3>
        <p>
          <strong>The Requested URL was not found on this server.</strong>{" "}
          That's all we know.
        </p>
      </div>

      <div className="max-w-[35rem]">
        <img
          className="h-auto w-full object-cover"
          src="/assets/page_not_found.svg"
          alt="error-hero"
        />
      </div>
    </div>
  );
}
