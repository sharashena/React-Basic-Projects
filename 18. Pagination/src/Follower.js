import React from "react";

const Follower = ({ login: name, avatar_url: img, html_url: url }) => {
  return (
    <article className="card">
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <a href={url} className="btn">
        view profile
      </a>
    </article>
  );
};

export default Follower;
