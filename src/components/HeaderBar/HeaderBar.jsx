import { Header, Container, Group, Burger, rem, Transition, Paper, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import './HeaderBar.css';
import logo from '../../assets/images/microphone.png';

export function HeaderBar() {

  const HEADER_HEIGHT = rem(60);

  // Lista de Links del Header
  const links = ['Home', 'About', 'Categories', 'Pricing', 'FAQ', 'Sign Up'];

  // Handler booleano propio del Mantine hook el cual cambia el estado de la variable
  const [opened, { toggle }] = useDisclosure(false);

  // Animacion de links al usarse en dispositivo movil
  const scaleY = {
    in: { opacity: 0.9, transform: 'scaleY(1)' },
    out: { opacity: 0.5, transform: 'scaleY(0)' },
    common: { transformOrigin: 'top' },
    transitionProperty: 'transform, opacity',
  };

  return (
    <Header height={HEADER_HEIGHT} mb={120} className='Header'>
        <Title className='brand-header' fs='italic'><img src={logo} id='logo'/>Pod Planet</Title>
      <Container className='headerContainer'>
        <Group spacing={5} className='links'>
          {links.map((link, idx) => (
            <a
            key={idx}
            href={`#${link}`}
            className='link'
            id={`lnk-${idx}`}
          > 
            {link}
          </a>))
          }
        </Group>

        {/*---- SOLO visible en la vista para moviles ----*/}

        <Burger className='burger' color="#90D274" opened={opened} onClick={toggle} size="md" />

        {/* Lista de navegacion */}
        <Transition transition={scaleY} duration={200} mounted={opened}>
          {(styles) => (
            <Paper className='sm-list' style={styles}>
              {links.map((link, idx) => (
                <a
                key={idx}
                href={`#${link}`}
                className='link movil-lnk'
                id={`lnk-${idx}`}
                onClick={toggle}
              >
                {link}
              </a>))
              }
            </Paper>
          )}
        </Transition>

      </Container>
    </Header>
  );
}


