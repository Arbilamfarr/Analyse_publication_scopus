import React from "react";

interface IPublicationDoi {
  dataByDoi: {
    doi: string;
    publicationName: string;
    title: string;
    citations: string;
    author: string;
    affiliations: {
      "affiliation-city": string;
      affilname: string;
      "affiliation-country": string;
    };
  };
}

const PublicationDoi: React.FC<IPublicationDoi> = (props:IPublicationDoi) => {
  const { doi, publicationName, title, citations, author, affiliations } =props.dataByDoi;
    return (
      <div className="p-4 bg-white shadow-lg rounded-lg mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600 mb-2 mt-4">
          <span className="font-bold text-gray-800">Auteur : </span>
          {author}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-bold text-gray-800">Publication : </span>
          {publicationName}
        </p>
        <p className="text-gray-600 mb-4">
          {" "}
          <span className="font-bold text-gray-800">Doi : </span>
          {doi}
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-bold text-gray-800">
            Nombre des Citations :{" "}
          </span>
          {citations}
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-bold text-gray-800">Affiliation : </span>
          {affiliations.affilname}
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-bold text-gray-800">
            Ville d'affiliation :{" "}
          </span>
          {affiliations["affiliation-city"]}
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-bold text-gray-800">pays d'affiliation : </span>
          {affiliations['affiliation-country']}
        </p>
      </div>
    );
};

export default PublicationDoi;
