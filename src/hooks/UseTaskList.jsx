import { useState, useEffect, createContext } from "react";
import { useForm } from "react-hook-form";

export const saveContext = createContext();

export function useTaskList() {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [tasks, setTasks] = useState([]);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    setValue
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
      const newTask = {
        id: Date.now(),
        titulo,
        descripcion,
        completed: false
      };
      setTasks([...tasks, newTask]);
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
    
    const confirmacion  = window.confirm("¿esta seguro de eliminar todo?")
    
        if (confirmacion)
        setTasks(tasks.filter((task) => task.id !== taskId));

  };

  const handleEditTask = (taskId) => {
    setEditingTaskId(taskId);
    const taskToEdit = tasks.find((task) => task.id === taskId);
    if (taskToEdit) {
      setValue("titulo", taskToEdit.titulo);
      setValue("descripcion", taskToEdit.descripcion);
    }
  };

  const updateTask = (taskId, updatedData) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, ...updatedData } : task
    );
    setTasks(updatedTasks);
    setEditingTaskId(null);
    reset();
  };

    const deleteAll = () => {
      if (tasks.length > 0) {

        const confirmacion  = window.confirm("¿esta seguro de eliminar todo?")
        
        if (confirmacion)
        setTasks([]);
      }
    };

  return {
    tasks,
    addTask,
    toggleTaskCompletion,
    handleDeleteTodo,
    handleSubmit,
    register,
    errors,
    handleEditTask,
    updateTask,
    editingTaskId,
    deleteAll,
  };
}