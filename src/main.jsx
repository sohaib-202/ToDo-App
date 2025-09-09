import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { Tasks } from './pages/tasks.jsx'
import TodoList from "./pages/TodoList.jsx";

import { NavButton } from "./layout/NavButton.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<NavButton />}>
          <Route path="/" element={<App />} />
          <Route path="/tasks" element={<TodoList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
