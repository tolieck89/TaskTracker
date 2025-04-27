import { useContext } from "react";
import { LanguageContext, LANGUAGES, ThemeContext, THEMES, AuthContext } from "../providers/context";
import styles from "./Button.module.css";


export default function  Button(){
    const {theme} = useContext(ThemeContext);
    const {language} = useContext(LanguageContext);
    const {setIsAuth, isAuth} = useContext(AuthContext);
    
    function handleLogOut() {
        setIsAuth(false);
            localStorage.setItem("isAuth", false);
            console.log({ isAuth, setIsAuth });
          
    }
    
    return (
        <button type="button" onClick={handleLogOut} className={theme === THEMES.LIGHT ? styles.lightBtn : styles.darkBtn} >
            {language === LANGUAGES.EN.value  ? 'Log out' : 'Вийти'}
            </button>
    )
}