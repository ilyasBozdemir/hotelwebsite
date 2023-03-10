import NextLink from "next/link";
import { Flex, Icon, Text } from "@chakra-ui/react";

export default function NavLink({ link, ...rest }) {
  const { label, icon, href } = link;

  return (
    <NextLink href={href} passHref legacyBehavior>
      <a>
        <Flex
          align="center"
          p="2"
          mx="2"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "red.400",
            color: "white",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "white",
              }}
              as={icon}
              color={'black'}
            />
          )}
          <Text fontSize="1.2rem">{label}</Text>
        </Flex>
      </a>
    </NextLink>
  );
}
