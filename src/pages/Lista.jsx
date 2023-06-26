import { useState } from "react";
import { useTaskList } from "../hooks/useTaskList";
import { Button, Input, Grid, GridItem, Box, Flex } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { BsTrash3 } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";

export function Lista() {
  const {
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
  } = useTaskList();

  const [showDeleteAllButton, setShowDeleteAllButton] = useState(false);

  const onSubmit = (data) => {
    if (editingTaskId) {
      updateTask(editingTaskId, {
        titulo: data.titulo,
        descripcion: data.descripcion,
      });
    } else {
      addTask(data.titulo, data.descripcion);
      setShowDeleteAllButton(true); // Mostrar el botón de "Eliminar todo"
    }
  };

  return (
    <Flex direction="column" align="center" mt={8}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex align="center" mb={4}>
          <Input
            mr={2}
            placeholder="Ingresa una tarea"
            type="text"
            borderColor="blue.500"
            borderWidth={2}
            {...register("titulo", {
              required: true,
              minLength: {
                value: 3,
              },
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
            ml={2}
            placeholder="Descripción (opcional)"
            type="text"
            borderColor="blue.500"
            borderWidth={2}
            {...register("descripcion")}
          />
          <Button colorScheme="blue" type="submit" ml={2}>
            <AddIcon />
          </Button>
        </Flex>
      </form>

      <Flex direction="column" align="flex-start" width="100%">
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <Flex align="center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                />
                <Box m={2}>
                  <span
                    style={{
                      textDecoration: task.completed ? "line-through" : "none",
                    }}
                  >
                    <Box color="blue" fontFamily="arial">
                      <span>Tu Tarea</span> {task.titulo}
                    </Box>
                    <Box color="green" fontFamily="arial">
                      <span>Descripcion</span> {task.descripcion}
                    </Box>
                  </span>
                </Box>
                <Button
                  colorScheme="red"
                  marginRight={2}
                  size="sm"
                  onClick={() => handleDeleteTodo(task.id)}
                >
                  <BsTrash3 />
                </Button>
                <Button
                  size="sm"
                  colorScheme="blue"
                  onClick={() => handleEditTask(task.id)}
                >
                  <AiOutlineEdit />
                </Button>
              </Flex>
            </li>
          ))}
        </ul>

        {showDeleteAllButton && (
          <Button
            mt={4}
            colorScheme="red"
            onClick={deleteAll}
            alignSelf="flex-end"
          >
            Eliminar todo
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
