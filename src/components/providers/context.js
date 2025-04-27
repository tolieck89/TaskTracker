import { createContext } from "react";

export const THEMES = {
    LIGHT: 'light',
    DARK: 'dark'
};

export const ThemeContext = createContext(THEMES.LIGHT);

export const LANGUAGES = {
    UA: {
        value: `UA`,
        text: `Ua`
    },
    EN: {
        value: `EN`,
        text: `En`,
    },
};

export const TASK_HEADER = {
    UA: {
        value: `Завдання`,
        text: `Task`
    },
    EN: {
        value: `Task`,
        text: `Task`,
    },
};







export const AuthContext = createContext(false);


export const LanguageContext = createContext(LANGUAGES.EN.value);

