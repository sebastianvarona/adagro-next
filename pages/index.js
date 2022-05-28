import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getDatabase } from "../lib/notion";
import { Text } from "./[id].js";
// import styles from './index.module.css';
import PhotoCardOne from "../components/PhotoCardOne";
import Layout from "../components/Layout";
import Banner1 from "../components/landing/Banner1";
import Banner2 from "../components/landing/Banner2";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

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
          {/* Quienes Somos */}
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

          {/* Aliados */}
          <section className={`flex flex-col gap-8`}>
            <h3 className={`text-4xl font-bold text-center mt-20`}>
              Nuestros Aliados
            </h3>
            <Splide
              options={{
                rewind: true,
                perPage: 4,
                gap: 30,
                autoplay: true,
                padding: 100,
                pagination: false,
              }}
              aria-label="React Splide Example"
            >
              <SplideSlide className="flex justify-center items-center">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </SplideSlide>
              <SplideSlide className="flex justify-center items-center">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </SplideSlide>
              <SplideSlide className="flex justify-center items-center">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  ></path>
                </svg>
              </SplideSlide>
              <SplideSlide className="flex justify-center items-center">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </SplideSlide>
              <SplideSlide className="flex justify-center items-center">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  ></path>
                </svg>
              </SplideSlide>
              <SplideSlide className="flex justify-center items-center">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
              </SplideSlide>
              <SplideSlide className="flex justify-center items-center">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              </SplideSlide>
              <SplideSlide className="flex justify-center items-center">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  ></path>
                </svg>
              </SplideSlide>
            </Splide>
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
                  "es-ES",
                  {
                    month: "long",
                    day: "2-digit",
                    year: "numeric",
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
