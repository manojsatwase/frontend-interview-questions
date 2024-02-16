import { Link } from "react-router-dom"
import { useTheme } from "../theme-context";
import { useDispatch, useSelector } from "react-redux";
import { toggleSwitch } from "../redux-toolkit/themeSlice/toggleThemeSlice";
import { useEffect } from "react";

const Navbar = () => {
    const dispatch = useDispatch();
    const {theme,toggleTheme} = useTheme();
    const  isDarkMode = useSelector(state=>state.theme.isDarkMode);

    const themeMode = isDarkMode ? "dark" : "light";

    const handleToggleTheme = () => dispatch(toggleSwitch());

    useEffect(()=>{
        document.documentElement.setAttribute("data-theme",themeMode)
    },[isDarkMode])

  return (
    <nav className="navbar">
         <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
         </div>
         {/* context API */}
         <div className="mode-switch">
            <p>context api</p>
            <label>
                <input 
                type="checkbox" 
                onClick={toggleTheme}
                defaultChecked={theme === "dark"}
                />
                <span className="slider round"></span>
            </label>
         </div>
           {/* redux toolkit */}
         <div className="mode-switch">
            <p>redux toolkit</p>
            <label>
                <input 
                type="checkbox" 
                onClick={handleToggleTheme}
                defaultChecked={themeMode === "dark"}
                />
                <span className="slider round"></span>
            </label>
         </div>
    </nav>
  )
}

export default Navbar