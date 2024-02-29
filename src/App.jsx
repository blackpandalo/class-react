import './App.css'
import FetchData from './Hooks/FetchData'
import MyHook from './Hooks/MyHook'
import Menu from './components/Nav'
import PageNotFound from './pages/404Page'
import About from './pages/About'
import DetailPage from './pages/DetailPage'
import Home from './pages/Home'
import Login from './pages/Login'
import Product from './pages/Product'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'


function App() {
  
  return (
    <>
    {/* <About />
    <Home />
    <Product/> */}

    {/* routing pages */}
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/:id" element={<DetailPage />} />
      <Route path="/hook" element={<MyHook/>} />
      <Route path="/blog" element={<FetchData/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/*" element={<PageNotFound/>} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
