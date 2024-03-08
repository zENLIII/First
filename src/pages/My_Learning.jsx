import React from "react";
import { Link } from "react-router-dom";

const MyLearning = () => {
  return (
    <div>
      <Link to="/course" className="hover:text-gray-300">
        Introduction to Pytorch
      </Link>
    </div>
  );
};

export default MyLearning;
