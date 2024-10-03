// app/components/PageViewCounter.jsx
"use client"; // Indicate that this is a client component

import { useEffect, useState } from "react";

export default function PageViewCounter({ page }) {
  const [views, setViews] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to increment and fetch view count
    const fetchViewCount = async () => {
      try {
        // Increment the view count
        const incrementRes = await fetch("/api/views", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ page }),
        });

        if (!incrementRes.ok) {
          throw new Error(`Error incrementing view count: ${incrementRes.statusText}`);
        }

        const incrementData = await incrementRes.json();

        setViews(incrementData.count);
      } catch (err) {
        console.error(err);
        setError("Failed to load view count.");
      }
    };

    fetchViewCount();
  }, [page]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (views === null) {
    return <p>Loading views...</p>;
  }

  return (
    <p className="text-sm text-gray-500">
      This page has been viewed <span className="font-semibold">{views}</span> times.
    </p>
  );
}
