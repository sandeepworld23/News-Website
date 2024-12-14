import React from 'react'

export default function NewsItem(props) {
  return (
    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-3'>
      <div className="card">
        <img src={props.pic?props.pic:"/images/noImage.png"} height={160} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <div className="date-source">
              <p>{props.source}</p>
              <p>{new Date(props.date).toLocaleDateString()}</p>
            </div>
            <p className="card-text">{props.description}</p>
            <a href={props.url} className="btn background w-100 text-light">Read More</a>
          </div>
      </div>
    </div>
  )
}

