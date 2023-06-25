import { Text, Title } from "@mantine/core";
import "./About.css";
import FEAT_1 from '../../assets/images/doing-podcast.png';
import FEAT_2 from '../../assets/images/listening-podcast.png';
import FEAT_3 from '../../assets/images/podcaster.jpg';

export function About() {

    return (
        <div className="About">
            <article className="feature" id="feat-1">
                <div className="feat-img">
                    <img src={FEAT_1} alt="Chica en su oficina sonriendo a la camara" />
                </div>
                <div className="feat-text">
                    <Title className='title-feat' order={2} mb={10} c={'#00a71f'} fs={'italic'}>Crea podcasts y episodios ilimitados, sin importar el plan que elijas.</Title>
                    <Text>
                    Publica todo el contenido que quieras por un precio fijo mensual. Graba episodios más largos, prueba nuevos estilos,
                    o inicie un segundo programa sin alcanzar un límite de almacenamiento. Finalmente puedes dejar que tu genio creativo interior
                    vuélvete loco con Pod Planet. ¡Este es el alojamiento de podcasts bien hecho!
                    </Text>
                </div>
            </article>

            <article className="feature" id="feat-2">
                <div className="feat-text">
                    <Title className='title-feat' order={2} mb={10} c={'#00a71f'} fs={'italic'}>Automatice y simplifique su flujo de trabajo de publicación de podcasts</Title>
                    <Text>
                     Nos esforzamos por facilitar el alojamiento de podcasts para que tenga más tiempo para concentrarse en lo que importa...
                     conectando con tu audiencia.<br /><br />
                     Amplíe su audiencia al aumentar la conciencia sobre las cuentas sociales conectadas y el sindicato
                     su podcast a las aplicaciones de escucha más populares como Spotify con solo unos pocos clics.
                    </Text>
                </div>
                <div className="feat-img">
                    <img src={FEAT_2} alt="Chica escuchando musica con auriculares" />
                </div>
            </article>

            <article className="feature" id="feat-3">
                <div className="feat-img">
                    <img src={FEAT_3} alt="Chica usando su movil escuchando musica" />
                </div>
                <div className="feat-text">
                    <Title className='title-feat' order={2} mb={10} c={'#00a71f'} fs={'italic'}>Una mejor manera de ganarse la vida como podcaster.</Title>
                    <Text>
                    Libera el poder transformador del podcasting con nuestra revolucionaria aplicación web que le permite crear audio cautivador sin esfuerzo
                    contenido, directamente desde la comodidad de su teléfono. Diga adiós a las configuraciones complicadas y dé la bienvenida a una experiencia de podcasting perfecta.

                    Nuestra interfaz fácil de usar facilita la publicación de sus episodios y la portada que lo acompaña, lo que garantiza que su podcast se mantenga
                    en el abarrotado paisaje sonoro digital. Con nuestra plataforma ultra simple y segura, puede compartir su voz única con
                    el mundo.
                    </Text>
                </div>
            </article>
            
        </div>
    )
}