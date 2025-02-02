import { Box, Stack } from "@chakra-ui/react";
import CardUi from "../components/units/CardUi";

const data = [
  {
    title: "달건이 레시피",
    description: "든든한 내편, 달건이 레시피",
    img: "/imgs/img_gundal.png",
    url: "https://chatgpt.com/g/g-6732c7d1db948190a9c86f41ddef311a-dalgeoni",
  },
];

export default function Home() {
  return (
    <Box py={"100px"} px={"16px"}>
      <Stack gap="4" direction="row" wrap="wrap">
        {data.map((item, idx) => (
          <CardUi key={idx} {...item} />
        ))}
      </Stack>
    </Box>
  );
}
