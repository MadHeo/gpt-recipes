import { Box, Button, Text, VStack } from "@chakra-ui/react";

export default function Nav() {
  return (
    <VStack
      h={"100vh"}
      w={"350px"}
      bg={"none"}
      justifyContent={"space-between"}
      alignItems={"start"}
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
        <Text fontSize={"16px"} fontWeight={"normal"} color={"gray.100"}>
          tnlfl288@gmail.com
        </Text>
      </Box>
    </VStack>
  );
}
