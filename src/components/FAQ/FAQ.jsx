import { Accordion, Box, Center, Container, Text, Title } from "@mantine/core"
import { useMediaQuery } from '@mantine/hooks';

const questions = [
    { id: 1, question: '¿Que es Pod Planet?', answer: 'Somos un equipo de expertos que puede ayudarte a introducir tu podcast en Spotify y convertirlo en un éxito. Te guiaremos a lo largo de todo el proceso, desde la creación de tu podcast hasta su envío a Spotify. También te daremos consejos para que tu podcast tenga éxito en Spotify.', value: 'what-is' },
    { id: 2, question: '¿Aceptan pagos en criptomonedas?', answer: 'Sí, aceptamos pagos en Bitcoin, Ethereum, y otras criptomonedas populares.', value: 'payments' },
    { id: 3, question: '¿Qué tipo de asesoría técnica se brinda?', answer: 'Depende del plan que elijas, pero nuestra asesoría técnica puede incluir ayuda con la configuración de tu equipo de grabación, edición de audio, y optimización de la configuración de tu cuenta en Spotify.', value: 'support' },
    { id: 4, question: '¿Ofrecen reembolsos?', answer: 'Sí, ofrecemos un reembolso completo antes de la publicación de tu segundo episodio si no estás satisfecho con nuestros servicios.', value: 'refund' },
    { id: 5, question: '¿Puedo cambiar de plan en cualquier momento?', answer: 'Sí, puedes cambiar de plan en cualquier momento. Simplemente contáctanos y te guiaremos en el proceso.', value: 'change-plan' },
]

export function FAQ() {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <Box bg='#2B3C3F' py={80}>
            <Container>
                <Center mb={40}>
                    <Title order={isMobile ? 2 : 1} color="white">Preguntas frecuentes</Title>
                </Center>
                <Box>
                    <Accordion defaultValue="what-is">
                        {questions.map((question) => (
                            <Accordion.Item mb={20} value={question.value} key={question.id}>
                                <Accordion.Control bg="white">
                                    <Text fw="bold"> {question.question} </Text>
                                </Accordion.Control>
                                <Accordion.Panel bg="#D9D9D9">{question.answer}</Accordion.Panel>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Box>
            </Container>
        </Box>
    )
}