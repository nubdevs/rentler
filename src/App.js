import Home from "./pages/Home";
import Search from "./components/Search"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function App() {
  return (
    <>
       <Navbar/>
      <div className='w-full flex flex-col md:flex-row justify-around'>
      <div classname="w-full h-full md:w-1/4"> <Search/></div>
      <div classname="w-ful h-full md:w-3/4"><Home/></div>
      </div>
    <Footer/>
    </>
 
  );
}

export default App;
