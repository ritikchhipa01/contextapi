import Header from "./components/Header";
import Paginantion from "./components/Paginantion";
import Blog from "./components/Blog";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";



function App() {

  const {fetchBlogData} = useContext(AppContext);

  useEffect(()=>{
    fetchBlogData();
  }, []);

  return (
 <div className="flex flex-col justify-center items-center w-full relative">
   <Header/>
   <Blog />
   <Paginantion />
 </div>
  );
}

export default App;
