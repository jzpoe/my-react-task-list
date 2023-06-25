import { useTaskList } from "../hooks/useTaskList";
import { Button, Input, Grid, GridItem, Box } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export function Lista() {
  const {
    tasks,
    addTask,
    toggleTaskCompletion,
    handleDeleteTodo,
    handleSubmit,
    register,
    errors
  } = useTaskList();

  const onSubmit = (data) => {
    addTask(data.titulo, data.descripcion);
  };

  return (
    <Grid
      templateColumns="2fr 2fr"
      gap={10}
      justifyContent="flex-center"
      maxW="1000px"
      textAlign="left"
    >
      <GridItem >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            size="sm"
            maxW="200px"
            placeholder="Ingresa una tarea"
            type="text"
            {...register("titulo", {
              required: true,
              minLength: {
                value: 3
              }
            })}
          />
          {errors.titulo?.type === "minLength" && (
            <Box as="p" color="red.500">
              Se requieren más letras
            </Box>
          )}

          {errors.titulo?.type === "required" && (
            <Box as="p" color="red.500">
              El campo está vacío
            </Box>
          )}

          <Input
            size="sm"
            maxW="200px"
            placeholder="Descripción (opcional)"
            type="text"
            {...register("descripcion")}
          />
        </form>
      </GridItem>

      <GridItem>
        <Button colorScheme="blue" onClick={handleSubmit(onSubmit)}>
          <AddIcon />
        </Button>
      </GridItem>

      <GridItem>
        <ul>
          {tasks.map((task) => (
            
            <li  key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
              />
              <Box 
              m={2} > <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none"
                }}
              >
                <Box  color="blue" fontFamily="arial"> <span >Tu Tarea</span> {task.titulo} </Box>
                <Box color="green" fontFamily="arial"><span >Descripcion</span> {task.descripcion}</Box>
                  
              </span>
              </Box>
              <Button
                colorScheme="red"
                marginRight={2}
                size="sm"
                onClick={() => handleDeleteTodo(task.id)}
              >
                Borrar
              </Button>
            </li>
          ))}
        </ul>
      </GridItem>
    </Grid>
  );
}