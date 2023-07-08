import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
      let {title, description, imgUrl, url} = this.props;
    return (
        <div className="card" style={{
          minWidth:"20rem"
        }}>
        <img src={imgUrl} className="card-img-top"  alt="..."/>
        <div className="card-body " style={{
          position:"relative",
          height:"50%"
        }}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a target="_blank" rel="noreferrer" href={url}className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
      
    )
  }
}
