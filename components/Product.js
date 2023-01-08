import { Box, Flex } from "@chakra-ui/react";
import ButtonBlur from "./ButtonBlur";
import formatPrice from "../lib/formatPrice";

export default function Product({ produto }) {
  return (
    <Flex
      backgroundImage={produto?.imagem}
      backgroundPosition="top"
      backgroundRepeat="repeat"
      rounded={8}
      border="1px"
      borderColor={produto.colorb || "#5e7ebf"}
      h="300"
    >
      <Box
        backdropFilter="auto"
        bgColor="rgba(19, 23, 31, .4)"
        backdropBlur="30px"
        bgGradient="linear(to-b, transparent 30%, rgba(19, 23, 31, .9) 100%)"
        mt="auto"
        h="125px"
        w="100%"
        roundedBottom={8}
        px="20px"
        py="5px"
      >
        <Box fontSize={20} fontWeight="medium" color="white">
          {formatPrice(produto?.preco)}
        </Box>

        <Box color="#5e7ebf" fontSize={16} fontWeight="medium">
          {produto?.nome}
        </Box>
        <ButtonBlur mt={2} color="white" bgColor="rgba(94, 126, 191,.45)">
          COMPRAR
        </ButtonBlur>
      </Box>
    </Flex>
  );
}
