import { useState } from "react";
import { Flex, Box, Text, Collapse } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Flex justify="center" align="center">
    <Box>
      <Flex
        align="center"
        justify="space-between"
        p={4}
        bg=""
        mb={4}
        onClick={toggleMenu}
        cursor="pointer"
      >
        <Text fontSize="l" fontWeight="bold">
          Menú
        </Text>
      </Flex>
      

      <Collapse in={isOpen}>
        <Box p={4} >
          <Link to="/">Home</Link>
        </Box>
        <Box p={4}>
          <Link to="/SobreNosotros">Acerca de Nosotros</Link>
        </Box>
        <Box p={4}>
          <Link to="/Lista">Agregar Tarea</Link>
        </Box>
        
      </Collapse>
    </Box>
    </Flex>
  );
}