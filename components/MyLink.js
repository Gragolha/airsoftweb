import { Center, Link } from "@chakra-ui/react";

export default function MyLink({ href, children, color }) {
  return (
    <Center>
      <Link fontWeight="medium" fontSize={12} href={href} color={color}>
        {children}
      </Link>
    </Center>
  );
}
