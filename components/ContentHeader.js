import { Box, Flex, GridItem } from "@chakra-ui/react";
import MyGrid from "./Grid";
import ButtonBlur from "./ButtonBlur";

export default function ContentHeader() {
  return (
    <Flex
      bgImage="/backg.png"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      flexDirection="column"
      border="1px"
      borderColor="#5e7ebf"
      rounded={8}
      h="250px"
      mt={8}
      p="30px"
    >
      <Box fontSize={64} color="white">
        AirSoft
      </Box>
      <Box color="#c6c6c6">O lugar certo para as suas armas</Box>

      <ButtonBlur
        w="220px"
        mt={4}
        bgColor="rgba(94, 126, 191,.2)"
        color="white"
      >
        veja mais e compre mais!
      </ButtonBlur>
    </Flex>
  );
}
