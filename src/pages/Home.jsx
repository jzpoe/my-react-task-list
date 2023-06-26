import { Heading, Text, Flex } from "@chakra-ui/react";
export const Home = () => {
  return (
    <div>

<Flex direction="column" align="center" mt={8}

        
      >
        <Heading as="h2" fontSize="xl">
          
           Bienvenido a tu aplicacion
            <Text>Lista de Tareas</Text>
        </Heading>
      </Flex>
    </div>
  );
};
