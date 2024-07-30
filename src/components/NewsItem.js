import React from 'react'

const NewsItem =(props)=> {

    let {title,description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div className="my-3" >
        <div className="card">
          <div style= {{display: 'flex', justifyContant: 'flex-end', position: 'absolute', right: '0'}} >
        <span className=" badge rounded-pill bg-danger" >{source}</span>
          </div>
          <img src={!imageUrl?"https://eagle-sensors.com/wp-content/uploads/unavailable-image.jpg":imageUrl} className="card-img-top" alt="..."/>
           <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p class="card-text" ><small class=" ">By {!author?"Unknone":author} on {new Date(date).toGMTString()} </small></p>
            <a href={newsUrl}  target="_blank" rel="noreferrer" className="btn btn-dark">Read more</a>
           </div>
        </div>
      </div>
    )
  }


export default NewsItem
// text-body-secondary {
//   --bs-text-opacity: 1;
//   color: rgb(255 255 255 / 75%) !important;