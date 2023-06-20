import { Box, Heading, Text, Flex } from "@chakra-ui/react";

export const Home = () => {
  return (
    <div>
      
        
          <Flex align="center" mb={4} Text fontFamily="Roboto" maxW="500px" textAlign="left">
            <Heading as="h2" fontSize="xl">
             <Box  p={4} borderWidth="10px" borderRadius="md" marginTop="40px">Bienvenido a tu aplicacion
             
             <Text>Lista de Tareas</Text>
             </Box>   
            </Heading>
          </Flex>
          
        
    </div>
  );
};
