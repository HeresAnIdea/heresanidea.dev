"use client";

import { useState } from "react";
import axios from "axios"; // assuming you will use axios to make API calls.

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // To give feedback after submission.

  const handleSubscribe = async () => {
    try {
      // Post the email to your backend or mailing list manager.
      await axios.post("/api/subscribe", { email });

      // Set a success message.
      setMessage(
        "Thanks for subscribing! You'll be the first to know when we launch."
      );
    } catch (error) {
      setMessage("Oops, something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8 p-4">
      <h1 className="text-2xl font-bold text-center">
        Welcome to HeresAnIdea.DEV
      </h1>
      <p className="w-3/4 text-center text-gray-600">
        HeresAnIdea.dev is a novel platform for indie developers to pitch,
        discuss, and refine ideas in a collaborative environment. As we&apos;re
        working hard to prepare our launch, we invite you to join our early
        access mailing list and be among the first to experience and shape this
        unique community.
      </p>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-3/4 max-w-lg">
        <input
          type="email"
          placeholder="Your email address"
          className="p-2 border rounded w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleSubscribe}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-full sm:w-auto"
        >
          Join the List
        </button>
      </div>
      {message && <p className="text-center">{message}</p>}
    </div>
  );
};

export default ComingSoon;
