import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { getDatabase } from '../lib/notion';
import { Text } from './[id].js';
// import styles from './index.module.css';
import PhotoCardOne from '../components/PhotoCardOne';
import Layout from '../components/Layout';
import Banner1 from '../components/landing/Banner1';
import Banner2 from '../components/landing/Banner2';

export const databaseId = process.env.NOTION_DATABASE_ID;

const styles = {
  hero: {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1563201515-adbe35c669c5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174')",
  },
  qs: [
    {
      backgroundImage: `url('')`,
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
  cert: {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1528132596460-787bb7adfd5f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686')",
  },
};

export default function Home({ posts }) {
  return (
    <div className="">
      <Head>
        <title>Adagro</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="../node_modules/tw_elements/dist/js/index.js"></script>
      </Head>

      <Layout>
        <Banner2 />

        <div className={`max-w-7xl mx-auto px-12`}>
          {/* Quiemes Somos */}
          <section className={`flex flex-col gap-8`}>
            <h2 className={`text-4xl font-bold text-center mt-20`}>
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

          {/* Objetivos */}
          <section className={`flex flex-col gap-8`}>
            <h2 className={`text-4xl font-bold text-center mt-20`}>
              Objetivos de Adagro
            </h2>
            <div className={`relative flex justify-end items-center pt-16`}>
              <div className="w-[55%]">
                <img
                  className="rounded-2xl"
                  src="https://images.unsplash.com/photo-1507311036505-05669fc503cb?ixlib=rb-1.2.1"
                />
              </div>
              <ol className="w-1/2 font-medium list-decimal leading-tight list-outside pl-16 flex flex-col justify-center gap-3 p-8 rounded-2xl drop-shadow-md bg-white/60 shadow-lg  absolute top-0 left-0 backdrop-blur-md">
                <li>
                  El fomento de la actividad agrícola, pecuaria y
                  agroindustrial.
                </li>
                <li>
                  Ser cuerpo consultivo de entidades públicas y privadas de
                  carácter nacional e internacional o cualquier otra índole en
                  asuntos relacionados con el agro y el medio ambiente.
                </li>
                <li>
                  Prestar los servicios de asistencia técnica especializada
                  sobre frutales, hortalizas, cereales, forestales, permanentes
                  y café, entre otros, en establecimiento, fertilización y
                  nutrición, programas de control sanitario y fitosanitario,
                  cosecha y pos cosecha. Así mismo, asesoría, capacitación,
                  extensión, asistencia técnica rural, ambiental y de
                  transferencia de tecnología.
                </li>
                <li>
                  Planificar, diseñar, formular, ejecutar y auditar planes,
                  programas y proyectos en los sectores agropecuario, ambiental,
                  de seguridad alimentaria, infraestructura, vivienda,
                  saneamiento básico, educación, recreación, deporte y cultura.
                </li>
                <li>
                  Formular, promover, administrar y desarrollar proyectos
                  agroindustriales, de agricultura urbana y de impacto
                  ambiental, etc.
                </li>
              </ol>
            </div>
          </section>

          {/* Certificado */}
          <section className="text-gray-800 mt-20 relative">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover h-80 bg-center rounded-2xl"
              style={styles.cert}
            ></div>
            <div className="container text-gray-800 px-4 md:px-12 z-20">
              <div className="block rounded-2xl shadow-lg py-10 md:py-12 px-4 md:px-6 -mt-24 bg-white/60 backdrop-blur-md">
                <div className="flex flex-wrap justify-center text-center lg:text-left">
                  <div className="grow-0 shrink-0 basis-auto w-full xl:w-10/12 px-6">
                    <div className="grid lg:grid-cols-3 gap-x-6 items-center">
                      <div className="mb-10 lg:mb-0 col-span-3">
                        <h3 className="text-4xl font-bold text-center">
                          En 2015 fuimos certificados como
                          <br />
                          <span className="text-green-500">
                            Exportadores de Frutas
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Ultimas Entradas */}
          <section>
            <h3 className="text-4xl font-bold text-center mt-20 mb-8">
              Ultimas Entradas
            </h3>
            {/* ENTRADAS DEL BLOG */}
            <ol className={`grid grid-cols-3 gap-8`}>
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
                  <li
                    key={post.id}
                    className={`shadow-md rounded-2xl p-8 flex flex-col gap-4`}
                  >
                    <p className={`text-black/50`}>{date}</p>
                    <h5
                      className={`text-2xl font-semibold hover:underline underline-offset-2`}
                    >
                      <Link href={`/${post.id}`}>
                        <a>
                          <Text text={post.properties.Name.title} />
                        </a>
                      </Link>
                    </h5>

                    <Link href={`/${post.id}`}>
                      <div>
                        <a
                          className={`font-medium inline-block px-3 py-1 bg-orange-500/70 hover:bg-orange-500 transition cursor-pointer rounded-2xl text-white`}
                        >
                          Leer entrada
                        </a>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </section>
        </div>
      </Layout>
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
