import {
  Flex, Box,
  Heading, Text,
  Button, Icon,
  Table,
  Thead, Tr, Th,
  Tbody, Td,
  Checkbox
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function UserList(){
  const users = [
    { id: 1, name: 'Mateus Brandão', email: 'mateusfleria@gmail.com', created_at: '01 de Feb, 1999' },
    { id: 2, name: 'Isabella Silva', email: 'isabella.beatriz.0201@gmail.com', created_at: '04 de Apr, 2000' },
    { id: 3, name: 'Lara Brandão', email: 'lara.brandao@gmail.com', created_at: '08 de Apr, 2020' }
  ];
  return (
    <Box>
      <Header/>
      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <Sidebar/>

        <Box flex="1" borderRadius="8" bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine}/>}
            >
              Criar novo
            </Button>
          </Flex>
          
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map(user => { return(
                <Tr key={user.id}>
                  <Td px="6"><Checkbox colorScheme="pink" /></Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">{user.name}</Text>
                      <Text fontSize="sm" color="gray.300">{user.email}</Text>
                    </Box>
                  </Td>
                  <Td>{user.created_at}</Td>
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      bg="gray.700"
                      colorScheme="blackAlpha"
                      leftIcon={<Icon as={RiPencilLine}/>}
                    >
                      editar
                    </Button>
                  </Td>
                </Tr>
              );})}
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
}