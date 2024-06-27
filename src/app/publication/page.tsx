"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Levels } from "react-activity";

const Publication = () => {
  const [trendData, setTrendData] = useState<{ graph: string } | null>(null);
  const [query, setQuery] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchData = async () => {
    setTrendData(null);
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `http://localhost:8000/publications/trend?query=${encodeURIComponent(
          query
        )}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setTrendData(result);
    } catch (err) {
      setError("Erreur lors de la récupération des données");
    } finally {
      setLoading(false);
    }
  };

 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="mt-10 space-x-4 m-4">
      <div className="flex flex-col justify-center items-center pt-10">
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Entrez votre recherche..."
            className="px-4 mx-4 w-64 py-2  bg-gray-100 text-gray-800 rounded-md focus:outline-none focus:bg-white focus:text-gray-900 focus:border-blue-600 placeholder-gray-500 border border-gray-300 shadow-md mb-2"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Rechercher
          </button>
        </form>
      </div>

      <div className="w-[90%]  p-6 mx-auto flex justify-center items-center">
        {loading && (
          <Levels color="#0068ab" className="pt-32" size={60} speed={0.7} animating={true} />
        )}
        {error && <p className="text-red-500">{error}</p>}
        {trendData && (
          <Image
            src={`data:image/png;base64,${trendData.graph}`}
            alt="Graphique"
            width={900}
            height={900}
          />
        )}
      </div>
    </div>
  );
};

export default Publication;
