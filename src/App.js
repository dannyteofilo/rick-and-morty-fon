import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, Input } from "@chakra-ui/react";

const App = () => {
    return(
    <ChakraProvider>
        <Input placeholder="Ingrese su nombre" />
        <Button colorScheme="blue">Enviar</Button>
        hello
    </ChakraProvider>
    )
};

export default App;