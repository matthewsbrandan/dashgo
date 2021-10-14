import {
  Flex,
  Text,
  Box,
  Avatar 
} from "@chakra-ui/react";

interface ProfileLProps{
  showProfileData?: boolean;
}
export function Profile({ showProfileData = true }: ProfileLProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Mateus Brandão</Text>
          <Text color="gray.300" fontSize="small">
            mateusfleria@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Mateus Brandão" src="https://github.com/matthewsbrandan.png" />
    </Flex>
  );
}