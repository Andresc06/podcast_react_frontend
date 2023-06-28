import { Container, Grid, Image, SimpleGrid, Text, Title } from '@mantine/core';
import './Categories.css';
import PODCAST_3 from '../../assets/images/podcast-3.png';
import { SpotifyLogin } from '../SpotifyLogin/SpotifyLogin';
import { SpotifyPlalists } from '../SpotifyPlaylists/SpotifyPlaylists';

const PRIMARY_COL_HEIGHT = '600px';

export function Categories() {
    const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - 2rem / 2)`;

    return (
        <>
        <div className='Categories'>
        {/* <Title mb={50} fz={'3rem'} ta={'center'} fs={'italic'}>Categories</Title> */}
        <SpotifyLogin />
        <SpotifyPlalists />
        <Container my="md">
        <SimpleGrid cols={2} spacing="lg" breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
            <div height={PRIMARY_COL_HEIGHT} className='category'>
                <Image w={'100%'} radius={'lg'} src="https://i.scdn.co/image/69b74b20843e6166351057e95221b6b99978549f" alt="" />
                <Container mt={10}>
                    <Title order={3}>Geeky Theory</Title>
                    <Text fs={'italic'} fz={'sm'} fw={100}>Tecnologia</Text><br/>
                    <Text ta={'justify'}>Podcast que explora el fascinante mundo de la programación y la tecnología.
                    Aqui, los anfitriones se sumergen en temas relacionados con la programación, 
                    el desarrollo de software, la inteligencia artificial y el diseño web.<br/><br/>

                    Este ofrece valiosos conocimientos sobre las últimas 
                    tendencias en el ámbito de la programación. Este podcast cubre una amplia gama de temas que mantendrán a 
                    los oyentes informados y actualizados.<br/><br/>
                    
                    Además de brindar conocimientos técnicos, también aborda temas relacionados con el emprendimiento e
                    la industria tecnológica.</Text>
                </Container>
            </div>
            <Grid gutter="md">
            <Grid.Col span={6}>
                <div height={SECONDARY_COL_HEIGHT} className='category'>
                    <Image radius={'lg'} src="https://i.scdn.co/image/ab67656300005f1f997d66105c826d42ea027261" alt="" />
                    <Container mt={10}>
                        <Title order={3}>Entiende tu Mente</Title>
                        <Text fs={'italic'} fz={'sm'} fw={100}>Solucion de problemas</Text>
                        <Text ta={'justify'} fz={'sm'}>Es el podcast de psicología en español más escuchado. 
                        ¿Nuestro objetivo? Ayudarte a entenderte mejor. Aqui encontraras como disfrutar cada momento de
                        tu vida.</Text>
                    </Container>
                </div>
            </Grid.Col>
            <Grid.Col span={6}>
                <div height={SECONDARY_COL_HEIGHT} className='category'>
                    <Image radius={'lg'} src={PODCAST_3} alt="" />
                    <Container mt={10}>
                        <Title order={3}>Explorando la Paz en la Naturaleza</Title>
                        <Text fs={'italic'} fz={'sm'} fw={100}>Bienestar</Text>
                        <Text ta={'justify'} fz={'sm'}>Sumérgete en un fascinante viaje hacia la paz interior con 
                        este podcast que te invita a explorar y conectar con la tranquilidad que nos brinda la naturaleza.</Text>
                    </Container>
                </div>
            </Grid.Col>
            <Grid.Col span={6}>
                <div height={SECONDARY_COL_HEIGHT} className='category'>
                    <Image radius={'lg'} src='https://i.scdn.co/image/ab67656300005f1fb20cd2673b7b412f207c5afd' alt="" />
                    <Container mt={10}>
                        <Title order={3}>The Wild Project</Title>
                        <Text fs={'italic'} fz={'sm'} fw={100}>Entretenimiento</Text>
                        <Text ta={'justify'} fz={'sm'}>Jordi Wild nos comparte su podcast de más de 3 horas por capítulo 
                        para hablar sobre todo y más, el humor es el hilo conductor y sus invitados lo saben desde el comienzo. </Text>
                    </Container>
                </div>
            </Grid.Col>
            <Grid.Col span={6}>
                <div height={SECONDARY_COL_HEIGHT} className='category'>
                    <Image radius={'lg'} src='https://i.scdn.co/image/47934c7e49c8b318c052bc661ad68fca8e3b3039' alt="" />
                    <Container mt={10}>
                        <Title order={3}>Sin Humo</Title>
                        <Text fs={'italic'} fz={'sm'} fw={100}>Educacion</Text>
                        <Text ta={'justify'} fz={'sm'}>Si quieres aprender y reírte esta este es uno de los podcasts de programación que debes añadir a tu playlist.
                         Un pod con un clásico humor para pasar un buen momento. </Text>
                    </Container>
                </div>
            </Grid.Col>
            </Grid>
        </SimpleGrid>
        </Container>
        </div>
        </>
    );
}