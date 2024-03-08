import React from "react";
import { Link } from "react-router-dom";

const Tabs = ({ isOpen, setIsOpen }) => {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed top-16 left-0 z-30 transition-all duration-300 bg-white shadow-lg ${
        isOpen ? "w-50" : "w-4"
      }`}
      style={{ height: "20rem" }} // Adjust 8rem to match the combined height of your navbar and footer
    >
      <button
        onClick={toggleSidebar}
        className="text-white bg-blue-500 hover:bg-blue-700 rounded-full p-2 m-2 focus:outline-none"
      >
        {isOpen ? "<" : ">"}
      </button>
      <div className="flex flex-col items-start p-2">
        <Link
          to="/course/introduction"
          className={`text-blue-500 hover:text-blue-700 my-2 mx-2 ${
            !isOpen && "hidden"
          }`}
        >
          Introduction
        </Link>
        <Link
          to="/course/announcements"
          className={`text-blue-500 hover:text-blue-700 my-2 mx-2 ${
            !isOpen && "hidden"
          }`}
        >
          Announcements
        </Link>
        <Link
          to="/course/resources"
          className={`text-blue-500 hover:text-blue-700 my-2 mx-2 ${
            !isOpen && "hidden"
          }`}
        >
          Resources
        </Link>
        <Link
          to="/course/assignments"
          className={`text-blue-500 hover:text-blue-700 my-2 mx-2 ${
            !isOpen && "hidden"
          }`}
        >
          Assignments
        </Link>
        <Link
          to="/course/chat"
          className={`text-blue-500 hover:text-blue-700 my-2 mx-2 ${
            !isOpen && "hidden"
          }`}
        >
          Chat
        </Link>
      </div>
    </div>
  );
};

export default Tabs;
