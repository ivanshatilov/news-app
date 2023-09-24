import SearchForm from "@/components/SearchForm/SearchForm"
import styles from "./home.module.scss"
import NewsItem from "@/components/NewsItem/NewsItem"

export default function Home() {
  return (
    <main className={styles.main}>
      <SearchForm />
      <div className={styles.news}>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>

    </main>
  )
}
