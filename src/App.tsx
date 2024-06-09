import React from "react";
import Layout from "./layout/Layout";
import PhotoCollage from "./components/Sections/PhotoCollage/PhotoCollage";
import TripInfoCardBlock from "./components/Sections/TripInfoCardBlock/TripInfoCardBlock";
import CommentCard from "./components/Sections/Informations/Highlights";
import FlightSection from "./components/Sections/FlightSection/FlightSection";
import { regions } from "./components/RegionsData/RegionsData";
import InformationRegionContainer from "./components/InformationAboutRegion/InformationRegionContainer";

const App: React.FC = () => {
  return (
    <Layout>
      <PhotoCollage />
      <TripInfoCardBlock />
      <div className="pt-8">
        <CommentCard />
      </div>
      <div className="pt-8">
        <FlightSection />
      </div>
      {regions.map((region) => (
        <div key={region.name} className="pt-2">
          <InformationRegionContainer region={region} />
        </div>
      ))}
    </Layout>
  );
};

export default App;
