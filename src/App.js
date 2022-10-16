import Home from "./pages/Home";
import Search from "./components/Search"


function App() {
  return (
    <div className='w-full flex flex-col md:flex-row justify-around'>
      <div classname="w-full h-full md:w-1/4"> <Search/></div>
      <div classname="w-ful h-full md:w-3/4"><Home/></div>
    
    </div>
  );
}

export default App;
