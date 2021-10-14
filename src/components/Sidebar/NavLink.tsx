import { Text, Link as LinkChakra, Icon, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  href?: string,
  icon: IconType,
  children: string,
}

export function NavLink({ href = '#', icon, children, ...rest }: NavLinkProps){
  return (
    <ActiveLink href={href} passHref>
      <LinkChakra display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20"/>
        <Text ml="4" fontWeight="medium">{children}</Text>
      </LinkChakra>
    </ActiveLink>
  );
}