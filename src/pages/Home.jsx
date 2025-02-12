import { Box, Stack } from "@chakra-ui/react";
import CardUi from "../components/units/CardUi";
import { recipes } from "../data/recipes";

export default function Home() {
  return (
    <Box py={{ base: "40px", md: "100px" }} px={"16px"}>
      <Stack gap="4" direction="row" wrap="wrap">
        {recipes.map((item, idx) => (
          <CardUi key={idx} {...item} />
        ))}
      </Stack>
    </Box>
  );
}
