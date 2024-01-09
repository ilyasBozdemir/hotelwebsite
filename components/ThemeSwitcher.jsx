import { Icon, IconButton, useColorMode, Tooltip } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [darkIcon, setDarkIcon] = useState(BsMoon);
  const [lightIcon, setLightIcon] = useState(BsSun);

  const [icon, setIcon] = useState(colorMode === "dark" ? lightIcon : darkIcon);

  useEffect(() => {
    const channel = new BroadcastChannel("themeChannel");
    setIcon(colorMode === "dark" ? lightIcon : darkIcon);

    const handleChannelMessage = (event) => {
      const { colorMode: newColorMode } = event.data;
      if (newColorMode !== colorMode) {
        toggleColorMode(newColorMode);
      }
    };

    channel.addEventListener("message", handleChannelMessage);

    return () => {
      channel.removeEventListener("message", handleChannelMessage);
    };
  }, [colorMode]);

  const channelBroadcast = () => {
    const channel = new BroadcastChannel("themeChannel");
    const newColorMode = colorMode === "light" ? "dark" : "light";
    channel.postMessage({ colorMode: newColorMode });
  };

  const handleToggleColorMode = () => {
    toggleColorMode();
    channelBroadcast();
  };

  return (
    <>
      <IconButton
        id={"theme-switcher"}
        aria-label="Color Switcher"
        variant={"ghost"}
        onClick={handleToggleColorMode}
        icon={
          <Icon
            variant={"ghost"}
            as={icon === darkIcon ? BsMoon : BsSun}
            fontSize="lg"
          />
        }
        p={3}
      />
    </>
  );
}

export default ThemeSwitcher;
