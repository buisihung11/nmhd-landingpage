import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import logo from '../assets/images/logo.png';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import Link from './Link';

export default function Navigation({ navStyle = {} }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      bg="#3B0707"
      zIndex="banner"
      position="absolute"
      w="100%"
      {...navStyle}
    >
      <Flex
        bg={'transparent'}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={[4, 4]}
        align={'center'}
        w={['90%']}
        mx="auto"
      >
        <Flex flex={{ base: 1 }} justify={{ base: 'space-between' }}>
          <Link to="/">
            <Image
              w={['61px', '61px', '90px', '172px']}
              h={['43px', '43px', '64px', '122px']}
              objectFit="cover"
              src={logo}
              alt="NMHD Logo"
            />
          </Link>
          <Flex
            display={{ base: 'flex', md: 'flex' }}
            alignItems="center"
            ml={10}
          >
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('white', 'gray.200');
  const linkHoverColor = useColorModeValue('primary', 'white');

  return (
    <Stack direction={'row'} spacing={[4, 8, 12]}>
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                to={navItem.href ?? '#'}
                fontSize={['10px', 'lg']}
                textTransform="uppercase"
                fontWeight={700}
                color={linkColor}
                _hover={{
                  borderBottom: `1px solid red`,
                  paddingBottom: '3px',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      to={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={4}
        as={Link}
        to={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          _hover={{
            color: 'red',
          }}
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map(child => (
              <Link key={child.label} py={2} to={child.href}>
                <Text>{child.label}</Text>
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Trang chủ',
    href: '/',
  },
  {
    label: 'Sản phẩm',
    href: '/san-pham',
  },
  {
    label: 'Giới thiệu',
    href: '/gioi-thieu',
  },
  {
    label: 'Tin tức',
    href: '/tin-tuc',
  },
];
