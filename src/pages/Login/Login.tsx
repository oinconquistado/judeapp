import React from 'react';
import {Box, Button, Center, Flex, Heading, Input, InputGroup, InputLeftAddon, Link, Text} from "@chakra-ui/react";
import {MdAlternateEmail, MdPassword} from "react-icons/md";


const Login = () => {

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">

            <Center>
                <Flex direction="column" gap="2vh">
                    <Heading marginBottom="1vh">Login</Heading>
                    <InputGroup>
                        <InputLeftAddon>
                            <MdAlternateEmail/>
                        </InputLeftAddon>
                        <Input type='email' placeholder='E-mail'/>
                    </InputGroup>
                    <InputGroup>
                        <InputLeftAddon>
                            <MdPassword/>
                        </InputLeftAddon>
                        <Input type='password' placeholder='Senha'/>
                    </InputGroup>
                    <Flex justify="end">
                        <Link href='https://chakra-ui.com' isExternal>
                            <Text color={"gray"} fontSize="12px">
                                Esqueci a senha
                            </Text>
                        </Link>
                    </Flex>
                    <Button colorScheme='blue' variant='solid'>
                        Entrar
                    </Button>
                </Flex>
            </Center>
        </Box>
    );
};

export default Login;
