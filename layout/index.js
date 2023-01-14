import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { Box, Drawer, DrawerContent, useDisclosure ,DrawerCloseButton} from "@chakra-ui/react";
import React from "react";
export default function Layout({ children }) {

  const [darkMode, setDarkMode] = React.useState(false);
  const date = new Date();

  React.useEffect(() => {
    const currentHour = date.getHours();
    if (currentHour >= 6 && currentHour < 18) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  }, [date.getHours()]);

  
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh">
      <Sidebar
        onClose={() => onClose}
        display={{ base: "none", md: "none" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="sm"
      >
        <DrawerContent>
        <DrawerCloseButton />
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/*= Header =*/}

      <Header onOpen={onOpen} />

      <Box ml={{ base: 0, md: 0 }} >
        {children}
      </Box>
      <FloatingWhatsApp
            statusMessage={"Genellikle 5 dk içinde cevap veriyor."}
            avatar={"/images/hilmi_ilhan.jpg"}
            accountName={"Güven Otel"}
            phoneNumber={"+905435403160"}
            chatMessage={`Merhaba, nasıl yardımcı olabiliriz?`}
            placeholder={"Mesaj"}
            messageDelay={1}
            darkMode={darkMode}
            allowClickAway={true}
            allowEsc={true}
            notification={true}
            notificationDelay={600}
            notificationSound={true}
            notificationLoop={true}
            className={'guven-otel-wp-wrapper'}

          />
    </Box>
  );
}
