import { useState, useEffect, createContext } from "react";
import { useForm } from "react-hook-form";

export const saveContext = createContext();

export function useTaskList() {
  const [tasks, setTasks] = useState([]);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm();

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (titulo, descripcion) => {
    if (titulo.trim() !== "") {
      const newCheck = {
        id: Date.now(),
        titulo,
        descripcion,
        completed: false
      };
      setTasks([...tasks, newCheck]);
      reset(); // Limpiar los campos del formulario
    }
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTodo = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return {
    tasks,
    addTask,
    toggleTaskCompletion,
    handleDeleteTodo,
    handleSubmit,
    register,
    errors
  };
}