'use client'

import SearchForm from "@/components/SearchForm/SearchForm"
import styles from "./home.module.scss"
import NewsItem from "@/components/NewsItem/NewsItem"
import { useEffect, useState } from "react";
import { useGetNewsQuery } from "@/store/reducers/newsApi";
import { NewsType } from "@/types";
import { useAppSelector } from "@/hooks";


export default function Home() {

  const {searchValue, pageSize, sortBy} = useAppSelector(state => state.searchState)
  const {data, isLoading, error, isFetching} = useGetNewsQuery({pageSize, searchValue, sortBy})

  console.log(data)
  return (
    <main className={styles.main}>
      <SearchForm />
      <div className={styles.news}>
        {(isLoading || isFetching) && <div className={styles.loading}><div></div><div></div><div></div><div></div></div>}
        {error && <div>Error</div>}
        {!isFetching && data && data.response.results.map((item: NewsType) => <NewsItem item={item}/>)}
      </div>

    </main>
  )
}

