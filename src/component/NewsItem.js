import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="card ">
        <div style={   {display: "flex",
                        position: "absolute",
                        right: 0}
                      }>
        <span class=" badge rounded-pill bg-primary" >
          {source}
        </span>
        </div>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title && title.slice(0, 90)}</h5>
          <p className="card-text">
            {description && description.slice(0, 150)}
          </p>
          <p className="card-text">
            <small class="text-muted">
              by {!author ? "Unknown" : author} on{" "}
              {new Date(date).toUTCString()}{" "}
            </small>
          </p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read more
          </a>
        </div>
      </div>
    );
  }
}
