import { Flex, Grid, GridItem, Icon } from "@chakra-ui/react";
import MyGrid from "./Grid";
import Mybutton from "./Button";
import MyLink from "./MyLink";
import PlaceHolder from "./PlaceHolders";
import { ShoppingCartSimple } from "phosphor-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <MyGrid
      fixed
      bgColor="rgba(12, 15, 20, .5)"
      mt="-65px"
      h="60px"
      zIndex="2"
      backdropBlur="40px"
      backdropFilter="auto"
      boxShadow="0px 20px 20px rgba(12, 15, 20, .5)"
    >
      <GridItem colStart={1} colSpan={1}>
        <Flex mt="12px">
          <Image src="/logo.svg" width="60" height="50" />
        </Flex>
      </GridItem>

      <GridItem my="auto" colStart={2} colSpan={5}>
        <PlaceHolder placeholder="Pesquisar" />
      </GridItem>

      <GridItem colStart={7} ml="30%" colSpan={2} my="auto" color="#5e7ebf">
        <MyLink>Equipamentos</MyLink>
      </GridItem>

      <GridItem colStart={9} ml="30%" my="auto">
        <MyLink href="/test" color="#5e7ebf">
          Pistolas
        </MyLink>
      </GridItem>

      <GridItem my="auto" colEnd={11}>
        <Flex w="100%" flexDirection="row-reverse">
          <MyLink href="/carsale">
            <Icon
              as={ShoppingCartSimple}
              weight="duotone"
              fontSize="20"
              color="#5e7ebf"
            />
          </MyLink>
        </Flex>
      </GridItem>

      <GridItem colStart={11} colSpan={2}>
        <Mybutton
          border="1px"
          ml="auto"
          color="#5e7ebf"
          bgColor="#242e42"
          borderColor="#5e7ebf"
        >
          Criar conta
        </Mybutton>
      </GridItem>
    </MyGrid>
  );
}
