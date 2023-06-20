import { useState, useEffect } from "react";

export function useTaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask !== "") {
      const newCheck = {
        id: Date.now(),
        description: newTask,
        completed: false
      };
      setTasks([...tasks, newCheck]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return {
    tasks,
    newTask,
    setNewTask,
    addTask,
    toggleTaskCompletion
  };
}

export function TaskList() {
  const {
    tasks,
    newTask,
    setNewTask,
    addTask,
    toggleTaskCompletion
  } = useTaskList();

  return (
    <div>
      <input
        type="text"
        placeholder="Ingresa una tarea"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button onClick={addTask}>AGREGAR</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none"
              }}
            >
              {task.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}