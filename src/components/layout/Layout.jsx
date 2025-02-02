import { Box, HStack } from "@chakra-ui/react";
import Nav from "./Nav";

function Layout({ children }) {
  return (
    <HStack
      bgGradient="linear(to-br, #686262, #7F7F7F, #7D7D7D)"
      w="100vw"
      h="100%"
      display={"flex"}
      justifyContent={"start"}
      alignItems={"start"}
    >
      <Nav />
      {children}
    </HStack>
  );
}

export default Layout;
