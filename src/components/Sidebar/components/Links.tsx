import { NavLink, useLocation } from "react-router-dom";
import { Box, Flex, HStack, Text, useColorModeValue } from "@chakra-ui/react";

export const SidebarLinks = (props: { routes: RoutesType[] }) => {
  const location = useLocation();
  const activeColor = useColorModeValue("gray.700", "white");
  const inactiveColor = useColorModeValue(
    "secondaryGray.600",
    "secondaryGray.600"
  );
  const activeIcon = useColorModeValue("brand.500", "white");
  const textColor = useColorModeValue("secondaryGray.500", "white");
  const brandColor = useColorModeValue("brand.500", "brand.400");

  const { routes } = props;

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName: string) => {
    return location.pathname.includes(routeName);
  };

  const createLinks = (routes: RoutesType[]) => {
    return routes.map((route: RoutesType, index: number) => {
      return (
        <NavLink key={index} to={route.path}>
          {route.icon ? (
            <Box>
              <HStack
                spacing={
                  activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
                }
                py="5px"
                ps="10px"
              >
                <Flex w="100%" alignItems="center" justifyContent="center">
                  <Flex
                    color={
                      activeRoute(route.path.toLowerCase())
                        ? activeIcon
                        : textColor
                    }
                    me="18px"
                  >
                    {route.icon}
                  </Flex>
                  <Text
                    me="auto"
                    color={
                      activeRoute(route.path.toLowerCase())
                        ? activeColor
                        : textColor
                    }
                    fontWeight={
                      activeRoute(route.path.toLowerCase()) ? "bold" : "normal"
                    }
                  >
                    {route.name}
                  </Text>
                </Flex>
                <Box
                  h="36px"
                  w="4px"
                  bg={
                    activeRoute(route.path.toLowerCase())
                      ? brandColor
                      : "transparent"
                  }
                  borderRadius="5px"
                />
              </HStack>
            </Box>
          ) : (
            <Box>
              <HStack
                spacing={
                  activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
                }
                py="5px"
                ps="10px"
              >
                <Text
                  me="auto"
                  color={
                    activeRoute(route.path.toLowerCase())
                      ? activeColor
                      : inactiveColor
                  }
                  fontWeight={
                    activeRoute(route.path.toLowerCase()) ? "bold" : "normal"
                  }
                >
                  {route.name}
                </Text>
                <Box h="36px" w="4px" bg="brand.400" borderRadius="5px" />
              </HStack>
            </Box>
          )}
        </NavLink>
      );
    });
  };

  return <>{createLinks(routes)}</>;
}

export default SidebarLinks;
