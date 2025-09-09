import "./App.css";
import { useState } from "react";
import Button from "./components/Button.jsx";
import { useOutletContext } from "react-router";

function App() {
  let [taskData, setTaskData] = useState({
    text: "",
    date: "",
    priority: "High",
  });
  let { tasks, setTasks } = useOutletContext();

  function addTask() {
    if (!taskData.text.trim()) return;
    setTasks([taskData, ...tasks]);
    setTaskData({
      text: "",
      date: "",
      priority: "High",
    });
  }

  return (
    <div className="flex justify-center items-center">
      <section className="bg-blue-590 w-full max-w-lg text-white rounded-xl p-6 shadow-lg">
        <h1 className="font-bold text-2xl text-white text-center mb-6">
          Add Task
        </h1>

        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Title:</label>
            <input
              type="text"
              value={taskData.text}
              placeholder="Enter your task!"
              className="w-full rounded-lg border p-3 text-white"
              onChange={(e) => {
                setTaskData({ ...taskData, text: e.target.value });
              }}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Date:</label>
            <input
              type="date"
              value={taskData.date}
              className="w-full rounded-lg border p-3 text-white"
              onChange={(e) => {
                setTaskData({ ...taskData, date: e.target.value });
              }}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Priority:</label>
            <select
              value={taskData.priority}
              onChange={(e) =>
                setTaskData({ ...taskData, priority: e.target.value })
              }
              className="w-full rounded-lg border border-white p-3 text-white"
            >
              <option value="High" className="bg-gray-200">
                High
              </option>
              <option value="Med" className="bg-gray-200">
                Medium
              </option>
              <option value="Low" className="bg-gray-200">
                Low
              </option>
            </select>
          </div>

          {/* Button */}
          <div className="flex justify-end">
            <Button AddBtn={addTask} text="Add" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
