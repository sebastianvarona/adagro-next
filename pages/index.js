import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { getDatabase } from '../lib/notion';
import { Text } from './[id].js';
// import styles from './index.module.css';
import Navbar from '../components/Navbar';
import PhotoCardOne from '../components/PhotoCardOne';

export const databaseId = process.env.NOTION_DATABASE_ID;

const bgQs = '';

const styles = {
  hero: {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1563201515-adbe35c669c5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174')",
  },
  qs: [
    {
      backgroundImage: `url('${bgQs}')`,
    },
    {
      backgroundImage:
        "url('https://images.unsplash.com/photo-1519557663006-e0423f3a092b?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687')",
    },
    {
      backgroundImage:
        "url('https://images.unsplash.com/photo-1624791338465-2c1af1eb117d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170')",
    },
    {
      backgroundImage:
        "url('https://images.unsplash.com/photo-1529159942819-334f07de4fe5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687')",
    },
  ],
};

export default function Home({ posts }) {
  return (
    <div className="max-w-7xl mx-auto px-12 min-h-screen">
      <Head>
        <title>Adagro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
          <Navbar />
        </header>

        <div
          className={`h-[70vh] w-full rounded-3xl overflow-hidden bg-cover bg-top flex items-stretch drop-shadow-lg`}
          style={styles.hero}
        >
          <div
            className={`flex-1 bg-black/20 p-20 flex justify-center items-center`}
          >
            <h1 className={`text-5xl text-white font-bold text-center`}>
              Asociación De Agricultores <br />{' '}
              <span className={`text-7xl font-extrabold`}>Colombianos</span>
            </h1>
          </div>
        </div>

        <section className={`flex flex-col gap-8`}>
          <h2 className={`text-4xl font-bold text-center mt-12`}>
            ¿Quiénes Somos?
          </h2>
          <p className={`text-center text-lg`}>
            Es una entidad asociativa sin ánimo de lucro que propende por el
            fortalecimiento y consolidación de una mejor calidad de vida de
            nuestros asociados y de la comunidad en general. Nuestra visión es
            que al año 2024, ADAGRO, sea reconocido como el gremio líder del
            Sector Agropecuario Colombiano, constituyéndose en el soporte
            técnico, administrativo y jurídico para el desarrollo agro
            empresarial, económico, social y ambiental de la región y el país.
          </p>
          <div
            className={`px-0 sm:px-20 md:px-48 lg:px-0 lg:grid lg:grid-cols-3 grid-flow-row gap-8`}
            style={styles.qs[0]}
          >
            <PhotoCardOne style={styles.qs[1]} />
            <PhotoCardOne c="hidden lg:block" style={styles.qs[2]} />
            <PhotoCardOne c="hidden lg:block" style={styles.qs[3]} />
          </div>
        </section>

        <section className={`flex flex-col gap-8`}>
          <h2 className={`text-4xl font-bold text-center mt-12`}>
            Objetivos de Adagro
          </h2>
          <div
            className={`grid grid-flow-row grid-cols-1 lg:grid-cols-7 gap-8`}
          >
            <ol class="col-span-4 list-decimal leading-tight list-outside mx-6 flex flex-col justify-center gap-3">
              <li>
                El fomento de la actividad agrícola, pecuaria y agroindustrial.
              </li>
              <li>
                Ser cuerpo consultivo de entidades públicas y privadas de
                carácter nacional e internacional o cualquier otra índole en
                asuntos relacionados con el agro y el medio ambiente.
              </li>
              <li>
                Prestar los servicios de asistencia técnica especializada sobre
                frutales, hortalizas, cereales, forestales, permanentes y café,
                entre otros, en establecimiento, fertilización y nutrición,
                programas de control sanitario y fitosanitario, cosecha y pos
                cosecha. Así mismo, asesoría, capacitación, extensión,
                asistencia técnica rural, ambiental y de transferencia de
                tecnología.
              </li>
              <li>
                Planificar, diseñar, formular, ejecutar y auditar planes,
                programas y proyectos en los sectores agropecuario, ambiental,
                de seguridad alimentaria, infraestructura, vivienda, saneamiento
                básico, educación, recreación, deporte y cultura.
              </li>
              <li>
                Formular, promover, administrar y desarrollar proyectos
                agroindustriales, de agricultura urbana y de impacto ambiental,
                etc.
              </li>
            </ol>
            <div className={`flex items-center col-span-3`}>
              <img
                className="object-cover w-full rounded-2xl drop-shadow-lg"
                src={
                  'https://images.unsplash.com/photo-1507311036505-05669fc503cb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGNyb3AlMjBmaWVsZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500'
                }
                width={200}
                height={200}
              />
            </div>
          </div>
        </section>

        {/* ENTRADAS DEL BLOG */}
        {/* <ol className={styles.posts}>
          {posts.map((post) => {
            const date = new Date(post.last_edited_time).toLocaleString(
              'es-ES',
              {
                month: 'long',
                day: '2-digit',
                year: 'numeric',
              }
            );
            return (
              <li key={post.id} className={styles.post}>
                <h3 className={styles.postTitle}>
                  <Link href={`/${post.id}`}>
                    <a>
                      <Text text={post.properties.Name.title} />
                    </a>
                  </Link>
                </h3>

                <p className={styles.postDescription}>{date}</p>
                <Link href={`/${post.id}`}>
                  <a> Leer entrada →</a>
                </Link>
              </li>
            );
          })}
        </ol> */}
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
