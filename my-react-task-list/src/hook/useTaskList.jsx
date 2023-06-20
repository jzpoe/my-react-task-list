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

  const handleDeleteTodo = taskId => {
		setTasks(tasks.filter((task) => task.id !== taskId));
	};

  const updateTask = (taskId, updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === taskId ? { ...task, ...updatedTask } : task))
    );
  };


  
  return {
    
    tasks,
    newTask,
    setNewTask,
    addTask,
    toggleTaskCompletion,
    handleDeleteTodo,
    updateTask,
    useEffect,
  

    
    
  };
}
