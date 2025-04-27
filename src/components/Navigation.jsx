import { useEffect, useState, useContext } from "react";
import { Select, Switch } from "antd";
import { LanguageContext, ThemeContext, THEMES, LANGUAGES, AuthContext } from "./providers/context";
import Button from "./theme/Button";
import  "./Navigation.css"

export default function Navigation() {
    const defaultClassName = 'navigation';
    const { isAuth } = useContext(AuthContext); 

    const [className, setClassName] = useState(defaultClassName);


    const {theme, setTheme} = useContext(ThemeContext);
    const {language, setLanguage} = useContext(LanguageContext);
    const handleThemeChange = (checked) => {
        console.log(checked);
        setTheme(checked ? THEMES.LIGHT : THEMES.DARK);
    }
    const handleLanguageChange = (value) =>{
        console.log(value);
        setLanguage(value);}


        useEffect(()=>{
            setClassName(`${defaultClassName} ${defaultClassName}_${theme}`)
        },
         [theme])
        
         
    
    return (
        <div className={className}>
            <div className="toggles">
            <div className="much-weight"> 
            <Select  className={theme === 'light' ? 'select-light' : 'select-dark'}
             popupClassName={theme === 'light' ? 'dropdown-light' : 'dropdown-dark'}
                value={language}
                style={{ width: 68, height: 20 }}
                onChange={handleLanguageChange}
                options={[
                    { value: LANGUAGES.EN.value, label: LANGUAGES.EN.text },
                    { value: LANGUAGES.UA.value, label: LANGUAGES.UA.text },
                   
                ]} />
            </div>

          

            <div className="much-weight"> 
            <Switch
                checkedChildren={<span className="switch-text-light">🌞</span>}
                unCheckedChildren={<span className="switch-text-dark">🌙</span>}
                className={theme === 'light' ? 'switch-light' : 'switch-dark'}
                onChange={handleThemeChange}
                checked={theme === 'light'}
                />
            </div>
            </div>
                
            {isAuth} <div className="logOutButton" ><Button /> </div>

            
        </div>
    )
}