// Demo of using Tailwind CSS utility classes to style a simple Card component.

import React from "react";

function CardTW({ title, text }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-bold text-red-800 mb-2">{title}</h2>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}

export default CardTW;
