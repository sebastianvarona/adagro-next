import React, { useState } from 'react';
import Layout from '../components/Layout';
import { getDatabase } from '../lib/notion';
import Link from 'next/link';
import { Text } from './[id].js';

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function blog({ posts }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);
  console.log(posts);
  return (
    <Layout>
      <div className={`max-w-7xl mx-auto px-12`}>
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
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  let p = [...database.results];

  while (database.has_more) {
    database = await getDatabaseOnCursor(databaseId, database);
    p = [...p, database.results];
  }

  return {
    props: {
      posts: p,
    },
    revalidate: 1,
  };
};
