import {
  Box,
  Stack,
  Text,
  Link,
  Icon
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine
} from "react-icons/ri";

export function Sidebar(){
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text
            fontWeight="bold"
            color="gray.400"
            fontSize="small"
            textTransform="uppercase"
          >Geral</Text>
          <Stack spacing="4" mt="8" align="stretch">
            <SidebarItem
              href="dashboard"
              icon={RiDashboardLine}
              text="Dashboard"
            />
            <SidebarItem
              href="users"
              icon={RiContactsLine}
              text="Usuários"
            />
          </Stack>
        </Box>
        <Box>
          <Text
            fontWeight="bold"
            color="gray.400"
            fontSize="small"
            textTransform="uppercase"
          >Automação</Text>
          <Stack spacing="4" mt="8" align="stretch">
            <SidebarItem
              icon={RiInputMethodLine}
              text="Formulários"
            />
            <SidebarItem
              icon={RiGitMergeLine}
              text="Automação"
            />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

interface SidebarItemProps{
  href?: string,
  icon: IconType,
  text: string,
}
const SidebarItem = ({ href = '#', icon, text }: SidebarItemProps) => {
  return (
    <Link display="flex" align="center" href={href}>
      <Icon as={icon} fontSize="20"/>
      <Text ml="4" fontWeight="medium">{text}</Text>
    </Link>
  );
}