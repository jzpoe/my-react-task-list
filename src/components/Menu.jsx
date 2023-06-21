import { Flex, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export function Menu() {
  return (
    <Flex direction="column" align="flex-start" mb={8}>
      <Box p={4} bg="blue.300" mb={4}>
        <Text fontSize="l" fontWeight="bold">
          Menú
        </Text>
      </Box>
      <Box p={4} bg="gray.100">
        <Link to="/">Home</Link>
      </Box>
      <Box p={4} bg="gray.100">
        <Link to="/SobreNosotros">Acerca de Nosotros</Link>
      </Box>
      <Box p={4} bg="gray.100">
        <Link to="/Lista">Agregar Tarea</Link>
      </Box>
      {/* <Box p={4} bg="gray.100">
        <Link to="/TareasAgregadas">Tareas Agregadas</Link>
      </Box> */}
    </Flex>
  );
}