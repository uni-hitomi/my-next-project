import Image from "next/image";

import styles from "./index.module.css";
import Category from "../Category";
import Date from "../Date";
import { News } from "@/app/_libs/microcms";

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <p className="text-center">記事はありません。</p>;
  }
  return (
    <ul className={styles.newsList}>
      {news.map((article) => (
        <li key={article.id} className={styles.newsList_li1}>
          <a href="" className={styles.newsList_link}>
            <div className={styles.newsList_thumb}>
              <Image
                className={styles.newsList_img}
                src="/top/thumb.jpg"
                alt="サムネイル"
                width={680}
                height={454}
              />
            </div>
            <div className={styles.newsList_textBox}>
              <div className={styles.newsList_clm1}>
                <Date date={article.publishedAt ?? article.createdAt} />
                <Category category={article.category} />
              </div>
              <h3 className={styles.newsList_tit1}>{article.title}</h3>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
