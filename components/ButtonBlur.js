import { Button, Box } from "@chakra-ui/react";

export default function ButtonBlur({ children, bgColor, color, mt, w }) {
  return (
    <Box
      backdropFilter="auto"
      backdropBlur="30px"
      w={w}
      borderRadius={8}
      mt={mt}
    >
      <Button
        boxShadow="lg"
        border="none"
        bgColor={bgColor}
        color={color}
        rounded={8}
        w="100%"
        _hover={{ bgColor: "#5E7EBF" }}
      >
        {children}
      </Button>
    </Box>
  );
}
