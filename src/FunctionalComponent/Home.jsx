import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

import NewsItem from './NewsItem';
import { useLocation } from 'react-router-dom';

export default function Home(props) {
  let [articles, setArticles] = useState([])
  let [totalResults, setTotalResults] = useState(0)
  let [page, setPage] = useState(1)
  let[q,setQ]=useState("")

let location =useLocation().search
let query= new URLSearchParams(location)


  async function getApiData() {
    let response = await fetch(`https://newsapi.org/v2/everything?q=${q?q : "All"}&pageSize=24&psge=1&sortBy=publishedAt&language=${props.language}&apiKey=fec976bbac294eebb1365f1e65e0fb17`)
    response = await response.json()
    setArticles (response.articles.filter((x) => x.title !== "[Removed]"))
    setTotalResults (response.totalResults)
  }

  let fetchData = async () => {
    setPage(page + 1)
    let response = await fetch(`https://newsapi.org/v2/everything?q=${q?q : "All"}&pageSize=24&psge=${page}&sortBy=publishedAt&language=${props.language}&apiKey=fec976bbac294eebb1365f1e65e0fb17`)
    response = await response.json()
    if (response.articles) {
      setArticles (articles.concat(response.articles.filter((x) => x.title !== "[Removed]")))
    }

  }

  useEffect(()=>{
    getApiData()
  },[q, props.language])

  useEffect(()=>{
    setQ(query.get("q"))
    getApiData()
  },[location])

  return (
    <div className="container-fluid my-2">
      <h5 className='background text-center text-light p-2 my-2 text-capitalize'>{q?q:"All"} News Article</h5>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        hasMore={articles.length < totalResults}
        loader={<div className='my-3 text-center'>
          <div className="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        }

      >
        <div className="row">
          {
            articles?.map((item, index) => {
              return <NewsItem
                key={index}
                source={item.source.name}
                title={item.title}
                description={item.description}
                url={item.url}
                pic={item.urlToImage}
                date={item.publishedAt}
              />
            })
          }
        </div>
      </InfiniteScroll>
    </div>
  )
}
