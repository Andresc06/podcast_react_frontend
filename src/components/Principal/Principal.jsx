import { Container, Title, Text, Button } from '@mantine/core';
import './Principal.css';
import principal from '../../assets/images/principal.webp'
import { useNavigate } from 'react-router-dom';

export function Principal() {
    const navigate = useNavigate();

    return (
        <div className='principal' id='Inicio'>
            <Container className='contain-principal' size="lg">
                <div className='content-principal'>
                    <Title order={1} fs='italic' c='#FFF'>
                    <Text
                        component="span"
                        inherit
                        variant="gradient"
                        id='brand'
                        gradient={{ from: 'teal', to: 'lime', deg: 105 }}
                    >
                        Pod Planet
                    </Text><br /><br />
                    Amplifica tu <Text span variant="gradient" gradient={{ from: '#FFF', to: '#FFF' }} inherit>voz</Text> y cautiva el mundo.
                    </Title>

                    <Text className='description-principal' fs="italic" mt={30}>
                    Al desbloquear un reino de posibilidades, Pod Planet le ofrece una cautivadora
                    espacio para cultivar su audiencia y cultivar sus sueños de podcasting en
                    una realidad próspera. Si eres un podcaster establecido que busca expandirse
                    su alcance o un creador en ciernes ansioso por dejar su huella, lo respaldamos
                    cada paso del camino.
                    </Text>

                    <Button
                    variant="gradient"
                    gradient={{ from: 'teal', to: 'lime', deg: 105 }}
                    size="xl"
                    className='control'
                    mt={40}
                    onClick={() => navigate('/solicitar-servicio')}
                    >
                        Get started
                    </Button>
                </div>
                <img className='img-container' src={principal} />
            </Container>
        </div>
    )
}