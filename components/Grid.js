import { Grid, GridItem, Center } from "@chakra-ui/react";
import Mybutton from "./Button";

export default function MyGrid({ children, bgColor, h, borderBottom }) {
  return (
    <Center
      width="100%"
      bgColor={bgColor || "#13171f"}
      h={h}
      borderBottom={borderBottom}
    >
      <Grid templateColumns="repeat(12, 64px)" gap={4}>
        {children}
      </Grid>
    </Center>
  );
}
