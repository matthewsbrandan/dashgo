import { Stack, HStack, Box } from '@chakra-ui/react';
import { PaginationItem } from './PaginationItem';

interface PaginationProps{
  take?: number;
  total: number;
  currentPage: number;
}

export function Pagination({
  take = 20,
  total,
  currentPage
} : PaginationProps){
  const final = currentPage * take;
  const initial = final - take;
  const paginationMap = [];
  for(let i = 1; i <= Math.ceil(total / take); i++){
    paginationMap.push(i);
  }

  return(
    <Stack
      direction={["column", "row"]}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>{initial}</strong> - <strong>{final > total ? total : final}</strong> de <strong>{total}</strong>
      </Box>
      <HStack spacing="2">
        {paginationMap.map(i => { return(
          <PaginationItem number={i} isCurrent={ i === currentPage } key={i}/>
        );})}
      </HStack>
    </Stack>
  );
}