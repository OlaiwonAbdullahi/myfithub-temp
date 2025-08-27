import React from "react";
import RelatedSessionsCard from "./relatedSessionsCard";

const RelatedSessions = () => {
  return (
    <div className="">
      <RelatedSessionsCard
        imageUrl="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=300&fit=crop&crop=center"
        name="Beginner's Pilates"
        location="Pilates Studio"
        amenities={[
          "Pilates Mat",
          "Resistance Bands",
          "Pilates Ball",
          "Magic Circle",
        ]}
      />
    </div>
  );
};

export default RelatedSessions;
