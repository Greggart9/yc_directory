"use client"; // <-- important if you are using Next.js 13/14 app router

import * as React from "react";

export function Button({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition"
      {...props}
    >
      {children}
    </button>
  );
}
