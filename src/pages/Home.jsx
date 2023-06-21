import { Box, Heading, Text, Flex } from "@chakra-ui/react";
export const Home = () => {
  return (
    <div>
      <Flex
        align="center"
        mb={3}
        Text
        fontFamily="arial"
        maxW="500px"
        textAlign="left"
      >
        <Heading as="h2" fontSize="xl">
          <Box
            color="black"
            fontFamily="Arial"
            maxW="500px"
            textAlign="left"
            border="2px solid "
            borderRadius="md"
            p={4}
          >
            Bienvenido a tu aplicacion
            <Text>Lista de Tareas</Text>
          </Box>
        </Heading>
      </Flex>
    </div>
  );
};
