'use client'

import SearchForm from "@/components/SearchForm/SearchForm"
import styles from "./home.module.scss"
import NewsItem from "@/components/NewsItem/NewsItem"
import { useAppDispatch, useAppSelector } from "@/hooks"
import { useEffect } from "react";
import { fetchNews } from "@/store/reducers/ActionCreators";


export default function Home() {

  const dispatch = useAppDispatch();
  const {news, isLoading, error} = useAppSelector(state => state.newsReducer)

  useEffect(() => {
    dispatch(fetchNews())
  }, [])


  return (
    <main className={styles.main}>
      <SearchForm />
      <div className={styles.news}>
        {isLoading && <div className={styles.loading}><div></div><div></div><div></div><div></div></div>}
        {error && <div>Error</div>}
        {news.map(item => <NewsItem item={item}/>)}
      </div>

    </main>
  )
}

