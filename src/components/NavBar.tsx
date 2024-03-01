import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/images/logo/logo_dark.png";
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} width="100px" />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
