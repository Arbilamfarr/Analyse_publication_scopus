"use client";
import Auteur from "@/componants/Auteur";
import PublicationDoi from "@/componants/PublicationDoi";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Sentry } from "react-activity";

type TopPublication = {
  "dc:title": string;
  "prism:publicationName": string;
  "prism:doi": string;
  "citedby-count": number;
};

type AuthorData = {
  Author_id: string;
  Nombre_total_publication: number;
  Nombre_total_citation: number;
  Average_citations: number;
  Top_publications: TopPublication[];
  Distribution_citations: string;
};

type  TdataByDoi={
    doi: string;
    publicationName: string;
    title: string;
    citations: string;
    author: string;
    affiliations: {
      "affiliation-city": string;
      affilname: string;
      "affiliation-country": string;
    }[];
  };

const AuteurPublication: React.FC = () => {
  const [subject, setSubject] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [data, setData] = useState<AuthorData | null>(null);
  const [dataByDoi, setDataByDoi] = useState<TdataByDoi | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  const fetchData = async (url: string) => {
    setData(null);
    setDataByDoi(null);
    setLoading(true);
    setError("");
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result: AuthorData = await response.json();
      setData(result);
      console.log(result);
    } catch (err) {
      setError("Erreur lors de la récupération des données 1");
    } finally {
      setLoading(false);
    }
  };

  const handleSearchAuthor = () => {
    fetchData(`http://localhost:8000/author?author_id=${author}`);
  };

  const handleSearchDoi = async () => {
     setData(null);
     setLoading(true);
     setError("");
     try {
       const response = await fetch(
         `http://localhost:8000/citations/${subject}`
       );
       if (!response.ok) {
         throw new Error("Failed to fetch ddataByDoiata");
       }
       const result: TdataByDoi = await response.json();
       setDataByDoi(result);
     } catch (err) {
       setError("Erreur lors de la récupération des données 2");
     } finally {
       setLoading(false);
     }
  };


  return (
    <div>
      <div>
        <h2 className="text-4xl font-bold pt-10 text-center">
          Chercher une publication
        </h2>
      </div>
      <div className="flex justify-center h-screen mt-10 space-x-4 m-4 ">
        <div className="w-1/2 h-[70%] p-6">
          <div className="max-w-md ml-10 mb-2 p-6 bg-white border-t-2 rounded-xl shadow-md  md:max-w-2xl">
            <div className="p-4">
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-gray-700 text-md font-bold mb-2"
                >
                  DOI :
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={handleSubjectChange}
                  className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Saisir le Doi..."
                />
              </div>
              <button
                onClick={handleSearchDoi}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Rechercher
              </button>
            </div>
          </div>
          <div className="max-w-md ml-10 p-6 bg-white border-t-2 rounded-xl shadow-md  md:max-w-2xl">
            <div className="p-4">
              <div>
                <label
                  htmlFor="author"
                  className="block text-gray-700 text-md font-bold mb-2"
                >
                  ID Auteur :
                </label>
                <input
                  type="text"
                  id="author"
                  value={author}
                  onChange={handleAuthorChange}
                  className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Saisir ID d'auteur..."
                />
              </div>
              <button
                onClick={handleSearchAuthor}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Rechercher
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-1/2 h-[70%] bg-white border-t-2 rounded-lg shadow-md p-6 overflow-auto">
          {loading && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Sentry color="#0068ab" size={60} speed={0.7} animating={true} />
            </div>
          )}
          {error && <p className="text-red-500">{error}</p>}
          {data && <Auteur data={data} />}
          {dataByDoi && <PublicationDoi dataByDoi={dataByDoi} />}
        </div>
      </div>
    </div>
  );
};

export default AuteurPublication;
