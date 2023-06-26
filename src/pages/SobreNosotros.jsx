import { Box, Heading, Flex } from "@chakra-ui/react";
export const SobreNosotros = () => {
  return (
    <Box>
      <Flex
        align="center"
        mb={4}
        Text
        fontFamily="Roboto"
        maxW="500px"
        textAlign="left"
      >
        <Heading as="h2" fontSize="xl">
          Acerca de nosotros
        </Heading>
      </Flex>

      <Box
        color="black"
        fontFamily="Arial"
        maxW="500px"
        textAlign="left"
        border="2px solid #000000"
        borderRadius="md"
        p={4}
      >
        Nuestra aplicación presenta una lista de tareas intuitiva y fácil de
        usar que te permite mantener un seguimiento de tus actividades diarias.
        Con nuestra funcionalidad de lista de tareas, puedes agregar nuevas
        tareas según sea necesario. Cada tarea se puede marcar como completada
        cuando hayas finalizado con ella, lo que te brinda una satisfactoria
        sensación de progreso. Además, si alguna tarea ya no es relevante o
        deseas eliminarla, puedes hacerlo con un simple toque. Esta lista de
        tareas es una herramienta simple y práctica para ayudarte a mantenerte o
        rganizado y aumentar tu productividad. ¡Simplifica tu día a día y mantén
        el control de tus tareas con nuestra funcionalidad de lista de tareas en
        nuestra aplicación!
      </Box>
    </Box>
  );
};