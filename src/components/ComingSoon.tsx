"use client";

import { useState } from "react";
import { sql } from "@vercel/postgres";
import axios from "axios";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // To give feedback after submission.

  const handleSubscribe = async () => {
    try {
      // Post the email to your backend or mailing list manager.
      await axios.post(`/api/mailing-list?email=${email}`);

      // Set a success message.
      setMessage(
        "Thanks for subscribing! You'll be the first to know when we launch."
      );
    } catch (error) {
      setMessage("Oops, something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 h-screen p-4">
      <h1 className="text-2xl font-bold text-center">
        Welcome to HeresAnIdea.DEV
      </h1>
      <p className="w-3/4 text-center">
        HeresAnIdea.dev is a novel platform for indie developers to pitch,
        discuss, and refine ideas in a collaborative environment. As we&apos;re
        working hard to prepare our launch, we invite you to join our early
        access mailing list and be among the first to experience and shape this
        unique community.
      </p>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-3/4 max-w-lg">
        <input
          type="email"
          placeholder=" Your email address"
          className="p-2 border rounded w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleSubscribe}
          className="bg-blue-500 text-white px-6 rounded hover:bg-blue-600 w-full sm:w-auto"
        >
          Join
        </button>
      </div>
      {message && <p className="text-center">{message}</p>}
    </div>
  );
};

export default ComingSoon;
