import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import IconLogo from "../assets/icons/logo.png";

export const Header = () => {

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            p={4}
            bg="#121418"
            color={["white", "white", "primary.700", "primary.700"]}
        >
            <Logo></Logo>
        </Flex>
    );
};

const Logo = () => <img src={IconLogo} alt="" />;


export default Header;