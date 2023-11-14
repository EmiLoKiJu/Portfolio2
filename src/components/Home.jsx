import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Home = ()=> {
  return(
    <div className="h-[5000px] flex flex-col">
      <Nav />
      <div className="main_wrapper  w-[85%] lg:opacity-1 mx-auto mt-4 flex flex-col justify-center ">
        <main className="home_sub_pages">
            <Outlet/>
        </main>
      </div>
      <div>
        <footer>this is the footer</footer>
      </div>
    </div>
  );
}

export default Home;