import { useOutletContext } from "react-router-dom";
import Button from "../components/Button.jsx";
import { useCallback } from "react";

function TodoList() {
  let { tasks, setTasks } = useOutletContext();

  const deleteTask = useCallback(
    (id) => {
      setTasks(tasks.filter((task, index) => index !== id));
    },
    [tasks, setTasks]
  );

  const clearList = useCallback(() => {
    setTasks([]);
  }, [setTasks]);

  return (
    <div className="flex justify-center items-center">
      <section className="bg-blue-590 w-full max-w-2xl text-white rounded-xl p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-center text-white mb-6">
          📋 Your Tasks
        </h1>

        <div className="space-y-4">
          {tasks.length > 0 ? (
            tasks.map((task, id) => (
              <div
                key={id}
                className="flex justify-between items-center border border-blue-400 rounded-lg p-4 bg-blue-600 shadow-md hover:shadow-lg transition"
              >
                <div className="flex flex-col">
                  <span className="font-semibold text-lg">{task.text}</span>
                  <span className="text-sm text-blue-200">{task.date}</span>
                  <span
                    className={`text-sm mt-2 px-2 py-1 rounded-full w-fit ${
                      task.priority === "High"
                        ? "bg-red-500"
                        : task.priority === "Med"
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                  >
                    {task.priority} Priority
                  </span>
                </div>
                <Button AddBtn={() => deleteTask(id)} text=" Delete" />
              </div>
            ))
          ) : (
            <p className="text-center text-blue-200">No tasks added yet!</p>
          )}
        </div>

        {/* Clear Button */}
        {tasks.length > 0 && (
          <div className="flex justify-end mt-6">
            <Button AddBtn={clearList} text="🗑️ Clear All" />
          </div>
        )}
      </section>
    </div>
  );
}

export default TodoList;
