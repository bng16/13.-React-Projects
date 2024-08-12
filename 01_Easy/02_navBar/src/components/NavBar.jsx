import { Link,Outlet } from "react-router-dom";



function NavBar() {
  return (
    <div>
      <div className="w-full h-16 bg-slate-50 flex items-center justify-between px-8">
        <div id="left-nav">
          <Link to={'/'} className="font-bold text-2xl cursor-pointer">My logo</Link>
        </div>
        <div id="mid-nav" className="flex gap-16">
            <Link to={'/about'} className="cursor-pointer font-semibold hover:scale-105 hover:font-bold duration-100  ease-in-out">About</Link>
            <Link to={'/profile'} className="cursor-pointer font-semibold hover:scale-105 hover:font-bold duration-100  ease-in-out">Profile</Link>
            <Link to={'/lectures'} className="cursor-pointer font-semibold hover:scale-105 hover:font-bold duration-100  ease-in-out">Lectures</Link>
        </div>
        <div id="right-nav" className="pr-5 flex gap-4">
          <button className="rounded-md text-center px-4 py-2 h bg-red-400 text-white hover:bg-red-500 hover:rounded-none hover:scale-105 duration-300 ease-in-out ">Log in</button>
          <button className="rounded-md text-center px-4 py-2 h bg-blue-400 text-white hover:bg-blue-500 hover:rounded-none hover:scale-105 duration-300  ease-in-out">Sign in</button>
        </div>
      </div>
      <Outlet/>

    </div>
  );
}

export default NavBar;
