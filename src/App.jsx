import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Blog from "./components/blog/Blog";
import Card from "./components/card/Card";
import Category from "./components/category/Category";
import Contact from "./components/contact/Contact";
import Details from "./components/details/Details";
import Hero from "./components/hero/Hero";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Products from "./components/products/Products";
import Rightbar from "./components/rightbar/Rightbar";
import Recents from "./components/recents/Recents";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <Category />
      <Recents />
      <Rightbar />
      <Footer />

      <Home />
      <Products />
      <Portfolio />
      <Blog />
      <Contact />
      <Details />
    </>
  );
}

export default App;
