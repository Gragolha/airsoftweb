import {
  Box,
  Flex,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  List,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

import Link from "next/link";

export default function Categories() {
  return (
    <Flex
      direction="column"
      minH="360px"
      bgColor="#2a3345"
      rounded={8}
      border="1px"
      borderColor="#5e7ebf"
    >
      <Box px="20px" py="10px" fontWeight="bold" color="white" fontSize="20px">
        Categorias
      </Box>
      <Divider />
      <Accordion allowToggle outline="none" borderColor="#2a3345">
        <AccordionItem>
          <Box>
            <AccordionButton>
              <Box
                color="White"
                fontWeight="medium"
                as="span"
                flex="1"
                textAlign="left"
              >
                Armas Leves
              </Box>
              <AccordionIcon color="white" />
            </AccordionButton>
          </Box>
          <AccordionPanel pb={4} px="10">
            <UnorderedList textAlign="left" color="#5e7ebf">
              <ListItem>
                <Link href="/test">Classic</Link>
              </ListItem>
              <ListItem>
                <Link href="/test">Shorty</Link>
              </ListItem>
              <ListItem>
                <Link href="/test">Frenzy</Link>
              </ListItem>
              <ListItem>
                <Link href="/test">Ghost</Link>
              </ListItem>
              <ListItem>
                <Link href="/test">Sheriff</Link>
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Accordion allowToggle outline="none" borderColor="#2a3345">
        <AccordionItem>
          <Box>
            <AccordionButton>
              <Box
                color="White"
                fontWeight="medium"
                as="span"
                flex="1"
                textAlign="left"
              >
                Submetralhadoras
              </Box>
              <AccordionIcon color="white" />
            </AccordionButton>
          </Box>
          <AccordionPanel pb={4} px="10">
            <UnorderedList textAlign="left" color="#5e7ebf">
              <ListItem>
                <Link href="/test">Stinger</Link>
              </ListItem>
              <ListItem>
                <Link href="/test">Spectre</Link>
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Accordion allowToggle outline="none" borderColor="#2a3345">
        <AccordionItem>
          <Box>
            <AccordionButton>
              <Box
                color="White"
                fontWeight="medium"
                as="span"
                flex="1"
                textAlign="left"
              >
                Fuzis
              </Box>
              <AccordionIcon color="white" />
            </AccordionButton>
          </Box>
          <AccordionPanel pb={4} px="10">
            <UnorderedList textAlign="left" color="#5e7ebf">
              <ListItem>
                <Link href="/test">Vandal</Link>
              </ListItem>
              <ListItem>
                <Link href="/test">Phantom</Link>
              </ListItem>
              <ListItem>
                <Link href="/test">Bulldog</Link>
              </ListItem>
              <ListItem>
                <Link href="/test">Guardian</Link>
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Accordion allowToggle outline="none" borderColor="#2a3345">
        <AccordionItem>
          <Box>
            <AccordionButton>
              <Box
                color="White"
                fontWeight="medium"
                as="span"
                flex="1"
                textAlign="left"
              >
                Escopetas
              </Box>
              <AccordionIcon color="white" />
            </AccordionButton>
          </Box>
          <AccordionPanel pb={4} px="10">
            <UnorderedList textAlign="left" color="#5e7ebf">
              <ListItem>
                <Link href="/test">Bucky</Link>
              </ListItem>
              <ListItem>
                <Link href="/test">Judge</Link>
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Accordion allowToggle outline="none" borderColor="#2a3345">
        <AccordionItem>
          <Box>
            <AccordionButton>
              <Box
                color="White"
                fontWeight="medium"
                as="span"
                flex="1"
                textAlign="left"
              >
                Fuzis de precisão
              </Box>
              <AccordionIcon color="white" />
            </AccordionButton>
          </Box>
          <AccordionPanel pb={4} px="10">
            <UnorderedList textAlign="left" color="#5e7ebf">
              <ListItem>
                <Link href="/test">Marshal</Link>
              </ListItem>
              <ListItem>
                <Link href="/test">Operator</Link>
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Accordion allowToggle outline="none" borderColor="#2a3345">
        <AccordionItem>
          <Box>
            <AccordionButton>
              <Box
                color="White"
                fontWeight="medium"
                as="span"
                flex="1"
                textAlign="left"
              >
                Metralhadoras
              </Box>
              <AccordionIcon color="white" />
            </AccordionButton>
          </Box>
          <AccordionPanel pb={4} px="10">
            <UnorderedList textAlign="left" color="#5e7ebf">
              <ListItem>
                <Link href="/test">Arex</Link>
              </ListItem>
              <ListItem>
                <Link href="/test">Odin</Link>
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Accordion allowToggle outline="none" borderColor="#2a3345">
        <AccordionItem>
          <Box>
            <AccordionButton>
              <Box
                color="White"
                fontWeight="medium"
                as="span"
                flex="1"
                textAlign="left"
              >
                Arma de Confronto
              </Box>
              <AccordionIcon color="white" />
            </AccordionButton>
          </Box>
          <AccordionPanel pb={4} px="10">
            <UnorderedList textAlign="left" color="#5e7ebf">
              <ListItem>
                <Link href="/test">Facas</Link>
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
}
