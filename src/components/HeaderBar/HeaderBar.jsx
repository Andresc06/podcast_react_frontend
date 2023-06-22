import { Header, Container, Group, Burger, rem, Transition, Paper } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import './HeaderBar.css';

export function HeaderBar() {

  const HEADER_HEIGHT = rem(60);

  // Lista de Links del Header
  const links = ['Home', 'About', 'Pricing', 'FAQ', 'Contact', 'Sign Up'];

  // Handler booleano propio del Mantine hook el cual cambia el estado de la variable
  const [opened, { toggle }] = useDisclosure(false);

  // Animacion de links al usarse en dispositivo movil
  const scaleY = {
    in: { opacity: 0.8, transform: 'scaleY(1)' },
    out: { opacity: 0, transform: 'scaleY(0)' },
    common: { transformOrigin: 'top' },
    transitionProperty: 'transform, opacity',
  };

  return (
    <Header height={HEADER_HEIGHT} mb={120} className='Header'>
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
            <Paper className='sm-list' withBorder style={styles}>
              {links.map((link, idx) => (
                <a
                key={idx}
                href={`#${link}`}
                className='link'
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


