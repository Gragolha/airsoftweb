import { GridItem, Box } from "@chakra-ui/react";
import MyGrid from "../components/Grid";
import Navbar from "../components/NavBar";
import ContentHeader from "../components/ContentHeader";
import Categories from "../components/Categories";
import Product from "../components/Product";

export default function Home() {
  const produtos = [
    { nome: "Vandal", preco: 1500, imagem: "/vandalPrime.png" },
    {
      nome: "Phantom",
      preco: 2500,
      imagem: "/phantomObe.png",
      colorb: "#943693",
    },
    { nome: "Stinger", preco: 700, imagem: "/stingerNn.png" },
    { nome: "Stinger", preco: 700, imagem: "/stingerNn.png" },
    { nome: "Stinger", preco: 700, imagem: "/stingerNn.png" },
    { nome: "Stinger", preco: 700, imagem: "/stingerNn.png" },
    { nome: "Stinger", preco: 700, imagem: "/stingerNn.png" },
    { nome: "Stinger", preco: 700, imagem: "/stingerNn.png" },
    { nome: "Stinger", preco: 700, imagem: "/stingerNn.png" },
    { nome: "Stinger", preco: 700, imagem: "/stingerNn.png" },
    { nome: "Stinger", preco: 700, imagem: "/stingerNn.png" },
    { nome: "Stinger", preco: 700, imagem: "/stingerNn.png" },
    { nome: "Stinger", preco: 700, imagem: "/stingerNn.png" },
    { nome: "Stinger", preco: 700, imagem: "/stingerNn.png" },
    { nome: "Stinger", preco: 700, imagem: "/stingerNn.png" },
  ];
  return (
    <>
      <Navbar />
      <MyGrid mt={16}>
        <GridItem colStart={1} colSpan={12}>
          <ContentHeader />
        </GridItem>
        <GridItem colStart={1} colSpan={3} rowSpan={2}>
          <Categories />
        </GridItem>
        {produtos.map((produto, index) => (
          <GridItem colStart={4 + (index % 3) * 3} colSpan={3}>
            <Product produto={produto} />
          </GridItem>
        ))}
      </MyGrid>
    </>
  );
}
