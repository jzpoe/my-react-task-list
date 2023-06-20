
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
export const SobreNosotros = () => {
  return (
    
      
      <Box  p={4} borderWidth="1px" borderRadius="md" marginTop="40px">
      <Flex align="center" mb={4} Text fontFamily="Roboto" maxW="500px" textAlign="left">
        
        <Heading as="h2" fontSize="xl">
          Acerca de nosotros
        </Heading>
      </Flex>
        <Text fontFamily="Roboto" maxW="500px" textAlign="left">
       
          Funcion:
          en este apartado encontraras las funcionalidades de tu app LISTA DE
          TAREAS aqui te contaremos las funcionalidades que tiene nuestra
          aplicacion, que va desde ingresar una tarea, modificarla y eliminarla
        
        </Text>
        </Box>
        
    
  );
};
