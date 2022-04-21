import React, { useState } from "react";
import "./modal.css";

const Modal = ({ active, setActive, addPost }) => {
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    addPost({ id: Date.now(), title, description: descr });
    setTitle("");
    setDescr("");
    setActive(false);
  }
  const closeModal = () => {
    setTitle("");
    setDescr("");
    setActive(false);
  };

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__body" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={submitHandler}>
          <input
            required
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Заголовок"
          />
          <textarea
            required
            cols="60"
            rows="5"
            value={descr}
            placeholder="Описание"
            onChange={(event) => setDescr(event.target.value)}
          />
          <div className="wrapperBtn">
            <button type="reset" onClick={() => closeModal()}>
              Закрыть модалку
            </button>
            <button type="submit">Добавить</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
