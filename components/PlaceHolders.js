import { Input } from "@chakra-ui/react";

export default function PlaceHolder({ placeholder }) {
  return (
    <Input
      rounded={8}
      focusBorderColor="#5e7ebf"
      borderColor="gray.700"
      bgColor="gray.900"
      color="white"
      placeholder={placeholder}
      size="xs"
      fontSize={12}
      _hover={{ bgColor: "rgb()" }}
    />
  );
}
