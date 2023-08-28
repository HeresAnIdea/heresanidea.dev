import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ideas, setIdeas] = useState<
    Array<{
      id: number;
      title: string;
      description: string;
      authorEmail: string;
    }>
  >([]);
  const [message, setMessage] = useState("");

  async function createIdea() {
    try {
      const response = await axios.post<{
        result: {
          id: number;
          title: string;
          description: string;
          authorEmail: string;
        };
      }>("/api/ideas/mine", {
        title,
        description,
        authorEmail: session?.user?.email,
      });

      if (response.status === 200) {
        setIdeas([...ideas, response.data.result]);
        setTitle("");
        setDescription("");
        setMessage("Idea created successfully!");
      }
    } catch (error) {
      setMessage("Failed to create idea.");
    }
  }

  // Fetch the user's ideas when the component mounts (this is a simple way; consider SWR or React Query for more robust fetching)
  useEffect(() => {
    async function fetchIdeas() {
      try {
        const response = await axios.get("/api/ideas/mine");
        if (response.status === 200) {
          setIdeas(response.data.result);
        }
      } catch (error) {
        setMessage("Failed to fetch ideas.");
      }
    }

    fetchIdeas();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        {/* User Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold">My Profile</h2>
          {/* This is just a placeholder; adapt as needed */}
          <p>Hello, [UserName]! Welcome to your profile.</p>
        </section>

        {/* Idea Creation Form */}
        <section className="mb-8">
          <h3 className="text-xl font-bold">Create a New Idea</h3>
          <div className="mt-4">
            <label className="block text-gray-600">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded mt-2"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-600">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full p-2 border rounded mt-2"
            ></textarea>
          </div>
          <button
            onClick={createIdea}
            className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Create
          </button>
          {message && <p className="mt-2">{message}</p>}
        </section>

        {/* List of Ideas */}
        <section>
          <h3 className="text-xl font-bold">My Ideas</h3>
          <ul className="mt-4 space-y-4">
            {ideas.map((idea) => (
              <li key={idea.id} className="border p-4 rounded">
                <h4 className="font-semibold text-lg">{idea.title}</h4>
                <p className="text-gray-600">{idea.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Profile;
