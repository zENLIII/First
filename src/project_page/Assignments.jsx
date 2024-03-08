import React, { useState } from "react";

const Assignments = () => {
  const [assignments, setAssignments] = useState([
    { name: "Assignment 1", completed: false },
    { name: "Assignment 2", completed: false },
    { name: "Assignment 3", completed: false },
    { name: "Assignment 4", completed: false },
    { name: "Assignment 5", completed: false },
  ]);

  const toggleCompletion = (index) => {
    const updatedAssignments = assignments.map((assignment, i) => {
      if (i === index) {
        return { ...assignment, completed: !assignment.completed };
      }
      return assignment;
    });
    setAssignments(updatedAssignments);
  };

  const progress =
    (assignments.filter((assignment) => assignment.completed).length /
      assignments.length) *
    100;

  const getQuote = (progress) => {
    if (progress === 100) {
      return "Congratulations! You've completed all assignments.";
    } else if (progress >= 80) {
      return "Almost there, keep pushing!";
    } else if (progress >= 60) {
      return "You're over halfway done!";
    } else if (progress >= 40) {
      return "Great progress, keep it up!";
    } else if (progress >= 20) {
      return "Good start, let's keep going!";
    } else {
      return "Let's get started!";
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-base font-medium text-blue-700 dark:text-white">
            Progress - {Math.round(progress)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className={`h-2.5 rounded-full transition-width ease-in-out duration-300 ${
              progress === 100 ? "bg-green-600" : "bg-blue-600"
            }`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-center mt-2 italic">{getQuote(progress)}</p>
      </div>

      <h2 className="text-2xl font-bold mb-4">Assignments</h2>

      <ul>
        {assignments.map((assignment, index) => (
          <li key={index} className="mb-2 flex justify-between items-center">
            {assignment.name}
            <button
              className={`px-2 py-1 rounded text-white ${
                assignment.completed ? "bg-red-500" : "bg-blue-500"
              }`}
              onClick={() => toggleCompletion(index)}
            >
              {assignment.completed ? "Unmark" : "Mark as Done"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Assignments;
