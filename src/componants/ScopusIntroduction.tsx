// components/ScopusIntroduction.tsx
import Image from "next/image";
import React from "react";

const ScopusIntroduction: React.FC = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Introduction à Scopus
      </h2>
      <p className="mb-4 text-xl italic">
        Scopus est une base de données bibliographique contenant des résumés et
        des citations pour des articles de revues académiques. Il couvre une
        large gamme de disciplines et est l&apos;une des principales sources
        pour les recherches académiques.
      </p>
      <p className="mb-4 italic">
        Scopus offre divers outils pour suivre, analyser et visualiser la
        recherche académique. Il est largement utilisé par les chercheurs, les
        universitaires et les professionnels pour accéder à des informations
        précieuses sur la littérature scientifique.
      </p>
      <h3 className="text-2xl font-semibold mb-2 text-center">
        Fonctionnalités principales :
      </h3>
      <ul className="list-disc list-inside mb-4 italic">
        <li>Couverture multidisciplinaire</li>
        <li>Outils de citation et de suivi</li>
        <li>Analyse et visualisation des tendances de la recherche</li>
      </ul>
      <h3 className="text-2xl font-semibold mb-2 text-center">
        Avantages de l&apos;utilisation de Scopus :
      </h3>
      <p className="mb-4 italic">
        L&apos;un des principaux avantages de l&apos;utilisation de Scopus est
        sa couverture étendue de la littérature scientifique, y compris des
        millions d&apos;articles et de conférences. Les outils analytiques
        fournis par Scopus permettent aux chercheurs de suivre les tendances de
        la recherche et d&apos;identifier les revues et articles les plus
        influents dans leur domaine.
      </p>
      <Image
        src="/images/scopus2.png"
        alt="Scopus Database"
        className="w-full h-auto mb-4"
        width={500}
        height={300}
      />
      <p className="mb-4 italic">
        Scopus facilite également la collaboration entre chercheurs en
        fournissant des informations détaillées sur les citations et les
        auteurs. Les utilisateurs peuvent facilement trouver des chercheurs
        ayant des intérêts similaires et explorer les réseaux de citation pour
        découvrir de nouvelles perspectives et opportunités de collaboration.
      </p>
      <Image
        src="/images/scopus1.jpg"
        alt="Research Analysis"
        className="w-full h-auto mb-4"
        width={500}
        height={300}
      />
    </div>
  );
};

export default ScopusIntroduction;
