import { useState } from "react";
import { NavLink, Outlet } from "react-router";

export const NavButton = () => {
  let [tasks, setTasks] = useState([]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <nav className="flex justify-center gap-6 bg-blue-500 p-4 shadow-md">
        <h1 className="text-2xl font-bold text-white ">TODO App</h1>

        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition ${
              isActive
                ? "bg-blue-300  text-white"
                : "bg-blue-500  hover:bg-blue-300  text-white"
            }`
          }
        >
          ➕ Add Task
        </NavLink>

        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition ${
              isActive
                ? "bg-blue-300  text-white"
                : "bg-blue-500  hover:bg-blue-300 text-white"
            }`
          }
        >
          📋 View Tasks
        </NavLink>
      </nav>

      {/* Outlet Section */}
      <main className="flex-1 flex justify-center items-center p-6">
        <div className="bg-blue-500 w-full max-w-2xl rounded-xl shadow-lg p-6 text-white">
          <Outlet context={{ tasks, setTasks }} />
        </div>
      </main>
    </div>
  );
};
