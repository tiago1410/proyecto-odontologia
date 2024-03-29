import React, { useContext } from "react"
import { Routes, Route } from "react-router-dom"
import { ContextGlobal } from "./Components/utils/global.context"
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"

function App() {

  const { state } = useContext(ContextGlobal);

  return (
    <div className={`App ${state.theme}`}>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="dentista/:id" element={<Detail />} />
        <Route path="favs" element={<Favs />} />
        <Route path="*" element={<div>Error 404</div>} />
      </Routes>
    </div>
  )
}

export default App
