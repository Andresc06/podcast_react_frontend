import { Container, Title, Text, Button } from '@mantine/core';
import './Principal.css';
import principal from '../../assets/images/principal.webp'
import { useNavigate } from 'react-router-dom';

export function Principal() {
    const navigate = useNavigate();

    return (
        <div className='principal'>
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
                    </Text><br />
                    Amplify your <Text span variant="gradient" gradient={{ from: '#FFF', to: '#FFF' }} inherit>voice</Text> and captivate the world.
                    </Title>

                    <Text className='description-principal' fs="italic" mt={30}>
                    Unlocking a realm of possibilities, Pod Planet offers you a captivating 
                    space to cultivate your audience and cultivate your podcasting dreams into 
                    a thriving reality. Whether you are an established podcaster looking to expand 
                    your reach or a budding creator eager to make your mark, we have got your back 
                    every step of the way.
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