import { Box, Center, Container, Text, Title, Card, Flex, Avatar } from "@mantine/core"
import { useMediaQuery } from '@mantine/hooks';
import PropTypes from 'prop-types';

const reviews = [
    {
        id: 1,
        content: 'Gracias a los servicios de podcast en Spotify, pudimos crear un podcast de alta calidad que ha sido muy bien recibido por nuestra audiencia. El equipo de producción fue muy profesional y nos brindó todo el apoyo que necesitábamos.',
        author: 'Juan Perez',
        company: 'NovoTech',
        img: 'https://picsum.photos/id/15/300'
    },
    {
        id: 2,
        content: 'Estoy muy contento con el servicio que recibí. El equipo de producción fue muy amable y profesional, y me ayudó a crear un podcast que ha tenido mucho éxito en Spotify".',
        author: 'Ana Garcia',
        company: 'BlueWave',
        img: 'https://picsum.photos/id/16/300'
    },
    {
        id: 3,
        content: 'Recomiendo los servicios de podcast en Spotify a cualquier persona que quiera crear un podcast de alta calidad. El equipo de producción es muy talentoso y se asegura de que todo salga perfecto.',
        author: 'Juan Perez',
        company: 'SwiftCore',
        img: 'https://picsum.photos/id/15/300'
    },
]

export function Reviews() {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <Box bg='#131B1C' py={80}>
            <Container>
                <Center mb={40}>
                    <Title order={isMobile ? 2 : 1} color="white">Nuestros testimonios</Title>
                </Center>
                <Flex gap="lg" direction={isMobile && 'column'}>
                    {reviews.map(review => (<ReviewCard key={review.id} review={review} />))}
                </Flex>
            </Container>
        </Box>
    )
}

function ReviewCard({ review }) {
    const isMobile = useMediaQuery('(max-width: 768px)');
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder maw={isMobile ? undefined : 300} >
            <Text size="sm" color="#222" mih={isMobile ? undefined : 140} mb={isMobile && 30}>
                {review.content}
            </Text>
            <Flex align="center" gap="sm" mt="sm">
                <Box>
                    <Avatar src={review.img} radius={50} size="lg" alt={`${review.author}'s profile`} />
                </Box>
                <Box size="sm">
                    <Text size="sm" color="#444"> {review.author}, {review.company}</Text>
                </Box>
            </Flex>
        </Card>
    )
}

ReviewCard.propTypes = {
    review: PropTypes.shape({
        id: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
    })
}