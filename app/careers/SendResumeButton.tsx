"use client";

const SendResumeButton = () => {
  const handleClick = () => {
    window.location.href = "mailto:careers@vajranda.com";
  };

  return (
    <button
      onClick={handleClick}
      className="bg-black text-white px-6 py-2 rounded hover:bg-gray-700 transition hover:cursor-pointer"
    >
      Send Resume
    </button>
  );
};

export default SendResumeButton;
