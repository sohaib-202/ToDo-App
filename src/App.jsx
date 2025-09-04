import Button from "./component/button";
import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [Tasks, setTasks] = useState([]);

  const Add = () => {
    if (input.trim() === "") return;
    setTasks([...Tasks, input]);
    setInput(" ");
  };

  const DeleteOne = (index) => {
    const newTasks = Tasks.filter((task, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  const ClearAll = () => {
    setTasks([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl p-6 w-full max-w-2xl">
        <h1 className="font-bold text-3xl text-center  mb-6">
          Manage Your ToDos
        </h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={input}
            placeholder="Write your todo here..."
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button AddBtn={Add} text="Add" />
        </div>

        <div className="space-y-3">
          {Tasks.map((task, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-50 border rounded-lg px-4 py-2 shadow-sm"
            >
              <p className="text-gray-700 font-medium">{task}</p>
              <Button AddBtn={() => DeleteOne(index)} text="Delete" />
            </div>
          ))}
        </div>

        {Tasks.length > 0 && (
          <div className="mt-6 text-center">
            <Button AddBtn={ClearAll} text="Clear All" />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
