import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Counter from "./components/Counter"


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes >
      <Route path="/" element={<h1>Home Page</h1>}/>
      <Route path="/counter" element={<Counter />}/>
      <Route path="/mycart" element={<h1>My cart Pages</h1>}/>
      <Route path="/myorders" element={<h1>Orders Page</h1>}/>
      <Route path="/setting" element={<h1>Setting Page</h1>}/>
      <Route path="/profile" element={<h1>Profile Page</h1>}/>
      <Route path="/logout" element={<h1>Logout Page</h1>}/>
      <Route path="*" element={<h1>Page not Found</h1>}/>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
