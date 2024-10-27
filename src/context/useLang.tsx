"use client"
import { createContext, useState, ReactNode, useContext } from 'react';

type LangContextType = {
    lang: boolean;
    setLang: (lang: boolean) => void;

}

const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLang] = useState<boolean>(false);

    const toggleLang = (newLang: boolean) => {
        setLang(newLang);
    }

    return (
        <LangContext.Provider value={{ lang, setLang: toggleLang }}>
            {children}
        </LangContext.Provider>
    )
}

export const useLang = () => {
    const lang = useContext(LangContext);
    if(!lang)
        throw new Error('usePage must be used within a PageProvider');
    return lang;    
}
