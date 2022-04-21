import React, {useState}  from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from './pages/Main'
import PostPage from './pages/PostPage'



function App() {


  //Инициализация начальных данных
  const [posts,setPosts] = useState([])
  

  //Компонент отвечающий за страницы
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Main setPosts={setPosts} posts={posts}/>}  />
        <Route exact path="post-page/:id"  element={<PostPage posts={posts} setPosts={setPosts} />}/>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App;
