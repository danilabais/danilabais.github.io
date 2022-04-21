import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";
import "./posts.css";

function Posts(props) {
  return (
    <div className="wrapper">
      {props.posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Posts;
