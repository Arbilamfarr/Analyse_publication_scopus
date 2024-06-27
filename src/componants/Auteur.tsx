import Image from 'next/image';
import React from 'react'

const Auteur = (props:any) => {
    const {data}=props
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-center">Résultats :</h2>
      <div className="mb-4">
        <p>
          <strong>ID de l&apos;Auteur:</strong> {data.Author_id}
        </p>
        <p>
          <strong>Nombre total de publications:</strong>{" "}
          {data.Nombre_total_publication}
        </p>
        <p>
          <strong>Nombre total de citations:</strong>{" "}
          {data.Nombre_total_citation}
        </p>
        <p>
          <strong>Citations moyennes:</strong> {data.Average_citations}
        </p>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-center">Top Publications:</h3>
      <div className="space-y-4">
        {data.Top_publications.map((publication: any, index: number) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
            <p>
              <strong>Titre:</strong> {publication["dc:title"]}
            </p>
            <p>
              <strong>Nom de la publication:</strong>{" "}
              {publication["prism:publicationName"]}
            </p>
            <p>
              <strong>DOI:</strong> {publication["prism:doi"]}
            </p>
            <p>
              <strong>Nombre de citations:</strong>{" "}
              {publication["citedby-count"]}
            </p>
          </div>
        ))}
        <h2 className="text-xl font-bold mb-4 text-center">Citations par publication :</h2>
        <Image
          src={`data:image/png;base64,${data.Distribution_citations}`}
          alt="Base64 Image"
          width={800}
          height={800}
        />
      </div>
    </div>
  );
}

export default Auteur
