// Path: src/app/homePage/InteractiveSearch.tsx
"use client";
import { useState } from "react";

export default function InteractiveSearch() {
  const [mode, setMode] = useState<"Buy" | "Rent" | "Sell">("Buy");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    if (!location) {
      alert("Please enter a location.");
      return;
    }
    alert(`Searching for ${mode} in ${location}`);
  };

  return (
    <section className="max-w-2xl mx-auto w-full p-6 bg-gray-300 shadow rounded">
      <div className="flex gap-6 mb-3">
        {["Buy", "Rent", "Sell"].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setMode(item as any)}
            className={`
              pb-1 border-b-2 text-gray-700
              ${
                mode === item
                  ? "border-yellow-400 font-bold"
                  : "border-transparent"
              }
            `}
          >
            {item}
          </button>
        ))}
      </div>
      <input
        type="text"
        placeholder="Find Location..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border w-full p-2 rounded mb-3 text-gray-700"
      />
      <button
        type="button"
        onClick={handleSearch}
        className="bg-yellow-400 px-4 py-2 w-full rounded text-white font-semibold"
      >
        Find
      </button>
    </section>
  );
}
