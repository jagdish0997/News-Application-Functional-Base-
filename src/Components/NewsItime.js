import React from "react";

const NewsItime =(props)=> {
    let {title , description,imgUrl, NewsUrl, author, date} = props
    return (
      <div>
        <div className="card my-3 cardHover">
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text"><small className="text-muted">By {author} on {date}</small></p>
            <a href={NewsUrl} target="_blank" className="btn btn-primary">
              Read More...
            </a>
          </div> 
        </div>
      </div> 
    );
}

export default NewsItime;
