import { Anchor, Box, Center, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import './../components/RequestForm/RequestForm.css';

export function Thanks() {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <div style={{
            background: '#131B1C', height: '100vh', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: "center", width: '100vw', rowGap: '20px'
        }}>
            <Title className="title">
                <Anchor href="/" color="white" style={{ textDecoration: 'none' }}>Pod Planet</Anchor>
            </Title>
            <Center style={{ width: '100%' }}>
                <Box bg="white" sx={() => ({
                    border: '2px solid black',
                    borderRadius: '10px',
                    width: isMobile ? '100%' : '500px'
                })} mx={isMobile && 20} p={50} >
                    <Title order={2} mb={30} >¡Gracias por solicitar nuestros servicios!</Title>
                    <Text mb={30}>Te contactaremos en breve.</Text>
                    <Anchor href="/" color="black" style={{ textDecoration: 'none' }}>Volver al inicio</Anchor>
                </Box>
            </Center>
        </div>
    )
}