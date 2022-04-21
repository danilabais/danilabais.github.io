import React, { useState } from "react";
import Posts from "./../posts/Posts";
import Modal from "./../modal/Modal";

function Main({ posts, setPosts }) {
  const [modalActive, setModalActive] = useState(false);

  //функция для создание поста
  const addPost = (post) => {
    console.log(post);
    setPosts([...posts, { ...post }]);
  };

  return (
    <div className="container">
      <h1>Блог</h1>
      <Posts posts={posts} />
      {posts.length === 0 ? (
        <h3 className="nullPosts">Постов пока нет, добавьте первый</h3>
      ) : null}
      <button className="btnAdd" onClick={() => setModalActive(true)}>
        + Добавить
      </button>
      <Modal
        addPost={addPost}
        active={modalActive}
        setActive={setModalActive}
      />
    </div>
  );
}

export default Main;
