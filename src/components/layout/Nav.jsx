import { Box, Button, Text, VStack } from "@chakra-ui/react";

export default function Nav() {
  return (
    <Box
      h={{ base: "100px", md: "100vh" }}
      w={{ base: "100%", md: "350px" }}
      display={"flex"}
      flexDirection={{ base: "row", md: "column" }}
      justifyContent={{ base: "center", md: "space-between" }}
      alignItems={{ base: "center", md: "start" }}
      p={"100px 86px"}
    >
      <Button
        bg={"none"}
        border={"none"}
        p={"0"}
        _hover={{ transform: "scale(1.05)" }}
        _active={{ transform: "scale(1)" }}
        transition={"all 0.1s"}
      >
        <Text
          fontSize={"42px"}
          fontWeight={"bold"}
          color={"gray.100"}
          textAlign={"start"}
        >
          GPT <br /> RECIPES
        </Text>
      </Button>
      <Box>
        <Text
          fontSize={"16px"}
          fontWeight={"normal"}
          color={"gray.100"}
          display={{ base: "none", md: "block" }}
        >
          tnlfl288@gmail.com
        </Text>
      </Box>
    </Box>
  );
}
