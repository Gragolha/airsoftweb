import { Input, Progress } from "@chakra-ui/react";

export default function PlaceHolder({ placeholder }) {
  return (
    <Input
      rounded={8}
      focusBorderColor="#5e7ebf"
      borderColor="gray.700"
      bgColor="rgba(12, 15, 20, 0.3)"
      color="white"
      placeholder={placeholder}
      size="xs"
      fontSize={12}
      _hover={{}}
    />
  );
}
