import React from "react";

const Announcements = () => {
  const announcements = [
    "Welcome to the PyTorch course!",
    "Next week's session will cover neural networks.",
    "Remember to complete the exercises before the deadline.",
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Announcements</h2>
      <ul>
        {announcements.map((announcement, index) => (
          <li key={index} className="mb-2">
            {announcement}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Announcements;
