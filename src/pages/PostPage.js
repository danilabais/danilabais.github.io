import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./../index.css";
import { useNavigate } from "react-router-dom";

const PostPage = ({ posts, setPosts }) => {
  let navigate = useNavigate();
  const params = useParams();
  const item = posts.find((item) => item.id === Number(params.id));

  const [newTitle, setNewTitle] = useState(item.title);
  const [newDescr, setNewDescr] = useState(item.description);
  const [showConfirm, setShowConfirm] = useState(false);

  const remove = () => {
    setPosts(posts.filter((item) => item.id !== Number(params.id)));
    navigate("/");
  };
  const change = () => {
    setPosts(
      posts.map((item) =>
        item.id === Number(params.id)
          ? { id: item.id, title: newTitle, description: newDescr }
          : item
      )
    );
    navigate("/");
  };
  const onTitleChange = (e) => {
    e.preventDefault();
    setNewTitle(e.target.value);
  };
  const onDecrChange = (e) => {
    e.preventDefault();
    setNewDescr(e.target.value);
  };

  return (
    <div className="page container">
      <Link to="/" className="btnAdd btnBack">
        Назад
      </Link>
      <h3>Запись "title записи"</h3>
      <input required onChange={onTitleChange} value={newTitle} />
      <textarea required onChange={onDecrChange} value={newDescr} />
      <div className="wrapBtn">
        <button
          className=" btnAdd btnBack red"
          onClick={() => setShowConfirm(true)}
        >
          Удалить
        </button>
        <button type="submit" className=" btnAdd btnBack" onClick={change}>
          Сохранить
        </button>
      </div>
      {showConfirm ? (
        <div className="confirm">
          <div className="confirm-body">
            <span>Вы действительно хотите удалить?</span>
            <div className="wrapBtn">
              <button
                className="btnAdd btnBack"
                onClick={() => setShowConfirm(false)}
              >
                Передумал..
              </button>
              <button className="btnAdd btnBack red" onClick={remove}>
                Удалить
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};




export default PostPage;
