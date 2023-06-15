import {useTaskList} from './Hooks/useTaskList'
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