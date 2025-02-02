import { extendTheme } from "@chakra-ui/react";

const colors = {
  gray: {
    100: "#F5F5F5",
    200: "#EEEEEE",
    300: "#E0E0E0",
    // ... 필요한 다른 색상들
  },
  brand: {
    primary: "#0066CC",
    secondary: "#4CAF50",
    // ... 커스텀 브랜드 색상
  },
};

const theme = extendTheme({
  colors,
  // 폰트도 커스터마이징 가능
  fonts: {
    heading: "Pretendard, sans-serif",
    body: "Pretendard, sans-serif",
  },
  // 기본 스타일도 오버라이드 가능
  styles: {
    global: {
      body: {
        bg: "white",
        color: "gray.900",
      },
    },
  },
});

export default theme;
