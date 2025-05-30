import styles from "./page.module.css";
import Image from "next/image";

import NewsList from "./_components/NewsList";
import ButtonLink from "./_components/ButtonLink";
import { News } from "./_libs/microcms";

const data: { contents: News[] } = {
  contents: [
    {
      id: "1",
      title: "1渋谷にオフィスを移転しました。",
      category: {
        name: "更新情報",
      },
      publishedAt: "2025/04/01",
      createdAt: "2025/04/01",
    },
    {
      id: "2",
      title: "2渋谷にオフィスを移転しました。",
      category: {
        name: "更新情報",
      },
      publishedAt: "2025/04/01",
      createdAt: "2025/04/01",
    },
    {
      id: "3",
      title: "3渋谷にオフィスを移転しました。",
      category: {
        name: "更新情報",
      },
      publishedAt: "2025/04/01",
      createdAt: "2025/04/01",
    },
    {
      id: "4",
      title: "3渋谷にオフィスを移転しました。",
      category: {
        name: "更新情報",
      },
      publishedAt: "2025/04/01",
      createdAt: "2025/04/01",
    },
    {
      id: "5",
      title: "3渋谷にオフィスを移転しました。",
      category: {
        name: "更新情報",
      },
      publishedAt: "2025/04/01",
      createdAt: "2025/04/01",
    },
  ],
};

export default function Home() {
  const sliceData = data.contents.slice(0, 3);
  // const sliceData: News = [];
  const name = "人見";
  return (
    <>
      <div className={styles.mv}>
        <div className={styles.mv_textBox}>
          <h1 className={`${styles.title} text-white`} id={styles.title}>
            {name}トップページテスト
          </h1>
          <p className={`${styles.text} text-white`}>ダミー</p>
        </div>
        <Image
          className={styles.img1}
          src="/top/mv.jpg"
          alt="ダミー"
          width={1876}
          height={1144}
        />
      </div>

      <section className={styles.news}>
        <h2 className={`${styles.newsTitle} text-center`}>NEWS</h2>
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
