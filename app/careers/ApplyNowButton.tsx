// app/components/ApplyNowButton.tsx
"use client";

import React from "react";

type Props = {
  jobTitle: string;
};

const ApplyNowButton: React.FC<Props> = ({ jobTitle }) => {
  const handleClick = () => {
    console.log(`Apply Now clicked for ${jobTitle}`);
    // Example: redirect or open modal here
    alert(`Thanks for your interest in ${jobTitle}!`);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition hover:cursor-pointer"
    >
      Apply Now
    </button>
  );
};

export default ApplyNowButton;
