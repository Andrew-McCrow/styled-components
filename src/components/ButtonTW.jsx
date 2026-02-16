// Demo of using Tailwind CSS utility classes to style a simple Button component.
import React from "react";

function ButtonTW({ label, primary }) {
  return (
    <button
      className={`py-2 px-4 rounded text-white font-bold ${
        primary
          ? "bg-red-500 hover:bg-red-700"
          : "bg-gray-500 hover:bg-gray-700"
      }`}
    >
      {label}
    </button>
  );
}

export default ButtonTW;
