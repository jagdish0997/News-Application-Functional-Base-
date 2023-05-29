import React, { Component } from "react";
import NewsItime from "./NewsItime";
import PropTypes from 'prop-types';
import { useEffect,useState } from "react";


const News = (props)=> {
const[articles,setArticles] = useState([])
const[page,setPage] = useState(1)


  ///---This is for fetch API to use in local programm-----------------///
  const updateNews = async () => {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d71fc34bdbc74a1f8b13390bbda8127f`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    setArticles(parseData.articles);
  }
  ///-----------------------------------------------------------------///

  useEffect(()=>{
    updateNews();
  },[])


 const handleNext = async () => {
    console.log("Next");

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d71fc34bdbc74a1f8b13390bbda8127f&page=${
      setPage(page+1)
    }`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    setPage(page+1)
    setArticles(parseData.articles)
  };

 const handlePrev = async () => {
    console.log("Prev");
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d71fc34bdbc74a1f8b13390bbda8127f&page=${
      setPage(page-1)
    }`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    setPage(page-1);
    setArticles(parseData.articles)
  };

    return (
      <>
        <div className="marBar">
          <marquee className='LiveCap'>Live Now !!!     Live Now !!!      Live Now !!! </marquee>
        </div>
        <div className="container  my-3 text-center">
          <h1 className="text-center my-5">The New India - Top Headlines</h1>
          <div className="row text-center">
            {articles.map((e) => {
              return (
                <div className="col-md-4" key={e.url}>
                  <NewsItime
                    title={e.title.slice(0,30)}
                    description={e.description?.slice(0, 45)}
                    imgUrl={e.urlToImage}
                    NewsUrl={e.url}
                    author={e.author}
                    date = {e.publishedAt}
                  />
                </div>
              );
            })}
          </div>

          <div className="container my-5 d-flex justify-content-between">
            <button
              disabled={page <= 1}
              type="button"
              className="btn btn-secondary btn-dark"
              onClick={handlePrev}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-dark"
              onClick={handleNext}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
}
News.defaultPros = {
  country : 'in',
  catagory : "general"
}

News.propTypes = {
  country :  PropTypes.string,
  catagory : PropTypes.string,
}

export default News;
