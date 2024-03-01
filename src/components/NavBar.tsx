import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/images/logo/logo_dark.png";

function NavBar() {
  return (
    <HStack>
      <Image src={logo} width="100px" />
      <Text>NavBar</Text>
    </HStack>
  );
}

export default NavBar;
