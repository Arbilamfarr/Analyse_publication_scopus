// pages/index.tsx
import Head from "next/head";
import ScopusIntroduction from "./ScopusIntroduction";
import ScopusStatisticsBar from "./ScopusStatisticsBar";


const Home: React.FC = () => {
  const statisticsData = [
    { label: "Sciences Sociales", percentage: 40 },
    { label: "Sciences Naturelles", percentage: 30 },
    { label: "Ingénierie", percentage: 20 },
    { label: "Médecine", percentage: 10 },
  ];

  return (
    <div className=" bg-gray-50 p-6">
      <Head>
        <title>Introduction à Scopus</title>
        <meta
          name="description"
          content="Introduction et statistiques de Scopus"
        />
      </Head>
      <main className="max-w-6xl  mx-auto">
        <ScopusIntroduction />
        <ScopusStatisticsBar data={statisticsData} />
      </main>
    </div>
  );
};

export default Home;
