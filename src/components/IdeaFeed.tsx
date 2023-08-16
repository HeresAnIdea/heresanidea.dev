import IdeaCard from "./IdeaCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { Idea } from "../../types";

const IdeaFeed = () => {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    // Fetch ideas from the backend.
    axios.get("/api/ideas").then((response) => {
      setIdeas(response.data);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {ideas.map((idea: Idea) => (
        <IdeaCard key={idea.id} idea={idea} />
      ))}
    </div>
  );
};

export default IdeaFeed;
