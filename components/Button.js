import { Button } from "@chakra-ui/react";

export default function Mybutton({
  children,
  ml,
  bgColor,
  color,
  variant,
  borderColor,
  border,
}) {
  return (
    <Button
      w="100%"
      rounded={8}
      ml={ml}
      bgColor={bgColor}
      color={color}
      variant={variant}
      border={border}
      borderColor={borderColor}
      _hover={{ bgColor: "#5e7ebf", color: "#242e42", transform: "scale(1.1)" }}
    >
      {children}
    </Button>
  );
}
