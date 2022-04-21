import React from "react";
import "./posts.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//компонент по отображению карточки поста, принимает данные о посте пропсом
function Post({ post }) {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <Link className="btn-to" to={`post-page/${post.id}`}>
        Перейти
      </Link>
    </div>
  );
}


//Проверка что пропс это обьект
Post.propTypes = {
    post: PropTypes.object,
  };

export default Post;
