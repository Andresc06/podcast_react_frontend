import { Header, Container, Group, Burger, rem, Transition, Paper, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import './HeaderBar.css';
import logo from '../../assets/images/microphone.png';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';


export function HeaderBar() {

  // define "lord-icon" custom element with default properties
  defineElement(lottie.loadAnimation);

  const STYLE_ICONS = { width: '30px', height: '30px' }

  const HEADER_HEIGHT = rem(60);
  const HOME_ICON =  <lord-icon src="https://cdn.lordicon.com/osuxyevn.json" trigger="hover" state="hover-1" style={STYLE_ICONS}></lord-icon>
  const FAQ_ICON =  <lord-icon src="https://cdn.lordicon.com/enzmygww.json" trigger="hover" state="hover-2" style={STYLE_ICONS}></lord-icon>
  const LISTEN_ICON =  <lord-icon src="https://cdn.lordicon.com/xddtsyvc.json" trigger="hover" state="hover" style={STYLE_ICONS}></lord-icon>
  const PRICE_ICON =  <lord-icon src="https://cdn.lordicon.com/pmegrqxm.json" trigger="hover" style={STYLE_ICONS}></lord-icon>
  const ABOUT_ICON =  <lord-icon src="https://cdn.lordicon.com/ycwlopoz.json" trigger="hover" style={STYLE_ICONS}></lord-icon>
  const SIGN_ICON =  <lord-icon src="https://cdn.lordicon.com/egiwmiit.json" trigger="morph" colors="primary:#FFF" style={STYLE_ICONS}></lord-icon>
  // Lista de Links del Header
  const links = [[HOME_ICON, 'Home'], [ABOUT_ICON, 'Servicios'], [LISTEN_ICON, 'Listen Now'], [PRICE_ICON, 'Precios'], [FAQ_ICON, 'FAQ'], [SIGN_ICON, 'Iniciar']];

  // Handler booleano propio del Mantine hook el cual cambia el estado de la variable
  const [opened, { toggle }] = useDisclosure(false);

  // Animacion de links al usarse en dispositivo movil
  const scaleY = {
    in: { opacity: 1, transform: 'scaleY(1)' },
    out: { opacity: 0.5, transform: 'scaleY(0)' },
    common: { transformOrigin: 'top' },
    transitionProperty: 'transform, opacity',
  };

  return (
    <Header height={HEADER_HEIGHT} mb={120} className='Header'>
        <Title className='brand-header'><img src={logo} id='logo'/>Pod Planet</Title>
      <Container className='headerContainer'>
        <Group spacing={5} className='links'>
          {links.map((link, idx) => (
            <a href={`#${link[1]}`} key={idx} className='link' id={`lnk-${idx}`}>{link[0]}{link[1]}</a>
          ))
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
                href={`#${link[1]}`}
                className='link'
                id={`lnk-${idx}`}
                onClick={toggle}
              >
                {link[0]}{link[1]}
              </a>))
              }
            </Paper>
          )}
        </Transition>

      </Container>
    </Header>
  );
}


