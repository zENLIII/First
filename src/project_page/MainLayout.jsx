import React, { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Tabs from "./ProjectPage";
import Introduction from "./Introduction";
import Announcements from "./Announcements";
import Resources from "./Resources";
import Assignments from "./Assignments";
import Chat from "./Chat";

const MainLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div>
      <Tabs isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
      <div
        className={`container mx-auto px-4 py-8 ${
          isDrawerOpen ? "ml-60" : "ml-16"
        } transition-all duration-300`}
      >
        <h1 className="text-2xl font-bold mb-4">Introduction to PyTorch</h1>
        <Routes>
          <Route index element={<Introduction />} />
          <Route path="introduction" element={<Introduction />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="resources" element={<Resources />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="chat" element={<Chat />} />
        </Routes>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
