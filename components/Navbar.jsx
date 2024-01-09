import {
    Box,
    Flex,
    HStack,
    Text,
    MenuItem,
    Stack,
    Icon,
    IconButton,
    useDisclosure,
    useColorModeValue
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import ThemeSwitcher from './ThemeSwitcher';
import Logo from './Logo';
import Link from 'next/link';

const navLinks = [
    {
        name: "Anasayfa",
        path: "/"
    },
    {
        name: "Hakkımızda",
        path: "/hakkimizda"
    },
    {
        name: "Foto Galeri",
        path: "/foto-galeri"
    },
    {
        name: "İletişim",
        path: "/iletisim"
    },
];


export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const menuProps = {
        bg: useColorModeValue('gray.200', 'gray.700'),
        color: useColorModeValue('blue.500', 'blue.200')
    };

    return (
        <Box px={4} boxShadow="lg" width="100%">
            <Flex h={16} alignItems="center" justifyContent="space-between" maxW={800} mx="auto">
                <IconButton
                    size="md"
                    icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
                    aria-label="Open Menu"
                    display={['inherit', 'inherit', 'none']}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems="center">
                    <Logo />
                    <HStack as="nav" spacing={1} display={{ base: 'none', md: 'flex' }} alignItems="center">
                        {navLinks.map((link, index) => (
                            <NavLink key={index} {...link} onClose={onClose} />
                        ))}
                     
                    </HStack>
                </HStack>


                <ThemeSwitcher />
            </Flex>

            {isOpen ? (
                <Box pb={4} display={['inherit', 'inherit', 'none']}>
                    <Stack as="nav" spacing={2}>
                        {navLinks.map((link, index) => (
                            <NavLink key={index} {...link} onClose={onClose} />
                        ))}
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
}



const NavLink = ({ name, path, onClose }) => {
    const link = {
        bg: useColorModeValue('gray.200', 'gray.700'),
        color: useColorModeValue('blue.500', 'blue.200')
    };

    return (
        <Link
            href={path}
            px={3}
            py={1}
            lineHeight="inherit"
            rounded="md"
            _hover={{
                textDecoration: 'none',
                bg: link.bg,
                color: link.color
            }}
            onClick={() => onClose()}
        >
            {name}
        </Link>
    );
};



const MenuLink = ({ name, path, icon, onClose }) => {
    return (
        <Link href={path} onClick={() => onClose()}>
            <MenuItem _hover={{ color: 'blue.400', bg: useColorModeValue('gray.200', 'gray.700') }}>
                <HStack>
                    <Icon as={icon} size={18} color="blue.400" />
                    <Text>{name}</Text>
                </HStack>
            </MenuItem>
        </Link>
    );
};