const IdeaCard = ({ idea }) => {
  return (
    <div className="border p-4 rounded-lg">
      <h2 className="font-semibold text-lg">{idea.title}</h2>
      <p className="text-gray-600">{idea.description}</p>
    </div>
  );
};

export default IdeaCard;
