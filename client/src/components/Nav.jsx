import { useTranslation } from "react-i18next";

import { Button } from "./ui/button";
import { useState } from "react";

const languages = {
    en: {
        nativeName: "English" 
    },
    ka: {
        nativeName: "Georgian" 
    }
};

const Nav = () => {
    const { t, i18n } = useTranslation();
    const [toggle, setToggle] = useState(false);
    const [mobile, setMobile] = useState(false);

    return (
        <header className="bg-black text-white mb-16 p-4">
            <nav>
                <div className="flex justify-center lg:items-center" style={{fontFamily: "var(--main-font-family, 'Uber Move Text', sans-serif)"}}>
                    <ul className="lg:flex lg:flex-row lg:items-center md:flex md:flex-col md:items-start sm:flex sm:flex-col sm:items-start flex flex-col items-start gap-[32px] w-[1060px] text-[13px] font-medium">
                        <li className="text-xl">Logo</li>

                        <div className="hidden lg:flex lg:gap-[32px]">
                            <li>{t('navigation.ride')}</li>
                            <li>{t('navigation.drive')}</li>
                            <li>{t('navigation.business')}</li>
                            <li>{t('navigation.uberEats')}</li>
                            <li>{t('navigation.about')}</li>
                        </div>
                        
                        {mobile && (
                            <div className="flex flex-col gap-2 md:flex lg:hidden">
                                <li>{t('navigation.ride')}</li>
                                <li>{t('navigation.drive')}</li>
                                <li>{t('navigation.business')}</li>
                                <li>{t('navigation.uberEats')}</li>
                                <li>{t('navigation.about')}</li>
                            </div>
                        )}
                    </ul>

                    <ul className="flex justify-center items-center h-7 gap-[32px] text-[13px]">
                        <div className="relative">
                            <div className="flex gap-2 w-10" onClick={() => setToggle((prev) => !prev)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                                <p>{i18n.language === 'ka' ? 'GE' : 'EN'}</p>
                            </div>
                            {
                                toggle && (
                                    <div className="flex flex-col justify-center absolute gap-1 rounded-[1px] items-start pl-2 pt-1 pb-1 pr-2 top-full left-0 bg-white w-[100px] text-black mt-1 shadow-xl">
                                        {Object.keys(languages).map((language, index) => (
                                            <button className="hover:bg-black transition 3s w-full text-start rounded-[1px] hover:text-white p-1" key={index} onClick={() => i18n.changeLanguage(language)}>{languages[language].nativeName}</button>
                                        ))}
                                    </div>
                                )
                            }
                        </div>
                        <li>{t('navigation.help')}</li>
                        <li className="w-10">Log in</li>
                        <Button className="bg-white text-black rounded-full h-[32px]">Sign up</Button>
                        <div className={`lg:hidden md:block sm:block block`} onClick={() => setMobile((prev) => !prev)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
                        </div>
                    </ul>
                </div>
            </nav>
        </header>
    )
};

export default Nav;