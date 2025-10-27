// Example Home Page Using Components

import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-yellow-700 mb-6">
        Welcome to Mutito Beez 🐝
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        <Card
          title="Honey Products"
          content="Pure organic honey straight from Mutito farms."
          image="/images/honey.jpg"
        >
          <Button label="Shop Now" variant="primary" />
        </Card>

        <Card
          title="Beekeeping Tools"
          content="Top quality equipment for every beekeeper."
          image="/images/tools.jpg"
        >
          <Button label="Explore" variant="secondary" />
        </Card>
      </div>
    </div>
  );
};

export default Home;
