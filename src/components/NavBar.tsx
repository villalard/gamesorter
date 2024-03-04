import { HStack, Image, Text, useColorMode } from "@chakra-ui/react";
import logo_dark from "../assets/images/logo/logo_dark.png";
import logo_light from "../assets/images/logo/logo_light.png";
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
  const { colorMode } = useColorMode();
  const logoImage = colorMode === "dark" ? logo_dark : logo_light;

  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logoImage} width="100px" />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
