import { HStack, Image, useColorMode } from "@chakra-ui/react";
import logo_dark from "../assets/images/logo/logo_dark.png";
import logo_light from "../assets/images/logo/logo_light.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function NavBar() {
  const { colorMode } = useColorMode();
  const logoImage = colorMode === "dark" ? logo_dark : logo_light;

  return (
    <HStack padding="10px">
      <Image src={logoImage} width="100px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
