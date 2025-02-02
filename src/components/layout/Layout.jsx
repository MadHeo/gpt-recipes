import { Box, HStack } from "@chakra-ui/react";
import Nav from "./Nav";

function Layout({ children }) {
  return (
    <Box
      bgGradient="linear(to-br, #686262, #7F7F7F, #7D7D7D)"
      w="100vw"
      minH="100vh" // 최소 높이를 뷰포트 높이로 설정
      h="100%"
      display={"flex"}
      flexDirection={{ base: "column", md: "row" }}
      justifyContent={{ base: "center", md: "start" }}
      alignItems={{ base: "center", md: "start" }}
      spacing={{ base: 4, md: 0 }}
      p={{ base: 4, md: 0 }}
      overflow="hidden" // 가로 스크롤 방지
    >
      <Nav />

      <Box w={{ base: "100%", md: "auto" }}>{children}</Box>
    </Box>
  );
}

export default Layout;
