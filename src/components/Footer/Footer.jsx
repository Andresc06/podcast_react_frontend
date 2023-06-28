import { Box, Center, Container, Text, Title, Flex, Anchor } from "@mantine/core"

export function Footer() {
    return (
        <footer>
            <Box bg='white' pb={10} pt={100}>
                <Container>
                    <Flex justify="space-between" mb={50}>
                        <Box>
                            <Title order={3} mb={20}>Pod Planet</Title>
                            <Box mb={10}><Anchor color="black" href="#">Sobre Nosotros</Anchor></Box>
                            <Box mb={10}><Anchor color="black" href="#">Preguntas frecuentes</Anchor></Box>
                            <Box mb={10}><Anchor color="black" href="#">Politica de privacidad</Anchor></Box>
                            <Box mb={10}><Anchor color="black" href="#">Terminos y condiciones</Anchor></Box>
                        </Box>
                        <Box>
                            <Title order={4} mb={20}>Redes sociales</Title>
                            <Box mb={10}><Anchor color="black" href="#">Instagram</Anchor></Box>
                            <Box mb={10}><Anchor color="black" href="#">Twitter</Anchor></Box>
                            <Box mb={10}><Anchor color="black" href="#">Linkedin</Anchor></Box>
                            <Box mb={10}><Anchor color="black" href="#">Facebook</Anchor></Box>
                        </Box>
                    </Flex>
                    <Center mb={40}>
                        <Flex direction="column" justify="center">
                            <Text ta="center">Made in 🇻🇪 by OpeskDevs</Text>
                            <Text ta="center">Copyright © 2023 Todos los derechos reservados</Text>
                        </Flex>
                    </Center>
                </Container>
            </Box>
        </footer>
    )
}
