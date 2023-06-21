import { useTaskList } from '../hook/useTaskList';
import { Button, Input, Grid, GridItem } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

export function Lista() {
  const {
    tasks,
    newTask,
    setNewTask,
    addTask,
    toggleTaskCompletion,
    handleDeleteTodo,
    updateTask,
  } = useTaskList();

  return (
    <Grid templateColumns="2fr 2fr" gap={10} justifyContent="flex-center"
    maxW="500px" textAlign="left">
      <GridItem>
        <Input
          size="sm"
          maxW="200px"
          placeholder='Ingresa una tarea'
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </GridItem>
      
      <GridItem>
        <Button colorScheme='blue' onClick={addTask}>
          <AddIcon/>
        </Button>
      </GridItem>
      
      <GridItem>
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
              <Button
                colorScheme='red'
                marginRight={2}
                size='sm'
                onClick={() => handleDeleteTodo(task.id)}
              >
                Borrar
              </Button> 
              <Button
                colorScheme='green'
                size='sm'
                marginLeft={2}
                onClick={() => updateTask(task.id, { name: "Tarea actualizada" })}
              >
                Actualizar
              </Button>
            </li>
          ))}
        </ul>
      </GridItem>
    </Grid>
  );
}