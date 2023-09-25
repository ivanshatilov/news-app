'use client'

import SearchForm from "@/components/SearchForm/SearchForm"
import styles from "./home.module.scss"
import NewsItem from "@/components/NewsItem/NewsItem"
import { useEffect, useState } from "react";
import { useGetNewsQuery } from "@/store/reducers/newsApi";
import { NewsType } from "@/types";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {newsSlice} from "@/store/reducers/newsSlice";


export default function Home() {


  const {searchValue, pageSize, sortBy} = useAppSelector(state => state.searchState)
  const {news, totalPages, page} = useAppSelector(state => state.newsState)
  const {setNews, setTotalPages, setPage} = newsSlice.actions;
  const {clearNews, clearPage} = newsSlice.actions;
  const dispatch = useAppDispatch()

  const {data, isLoading, error, isFetching, isSuccess} = useGetNewsQuery({pageSize, searchValue, sortBy, page})
  
  useEffect(() => {
    dispatch(clearNews())
    dispatch(clearPage())
  }, [])

  useEffect(() => {
    if(data) {
      dispatch(setNews(data.response.results))
      dispatch(setTotalPages(data.response.pages))
      console.log(page)
      console.log(totalPages)
    }
  }, [data])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return function() {
      document.removeEventListener('scroll', scrollHandler);
    }
  }, [])

  const scrollHandler = (e: any) => {
    if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) === 0) {
      dispatch(setPage(1))
    }
  }

  return (
    <main className={styles.main}>
      <SearchForm />
      <div className={styles.news}>
        {(isLoading || isFetching) && <div className={styles.loading}><div></div><div></div><div></div><div></div></div>}
        {error && <div>Error</div>}
        {!error && news && news.map((item: NewsType) => <NewsItem key={item.id} item={item}/>)}
      </div>

    </main>
  )
}

