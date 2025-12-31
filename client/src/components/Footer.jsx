import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-black text-white mt-10 p-40">
            <div className="flex flex-col gap-5 mb-10">
                <p className="text-[25px]">{t('footer.logo')}</p>
                <p>{t('footer.visitHelpCenter')}</p>
            </div>

            <div className="lg:flex lg:flex-row md:flex md:flex-col lg:gap-[200px] sm:flex sm:flex-col flex flex-col sm:gap-[50px] gap-[50px] md:gap-[70px] mb-20">
                <div className="lg:flex lg:flex-row lg:gap-[200px] md:flex md:flex-row sm:flex sm:flex-col flex flex-col md:gap-[200px] sm:gap-[50px] gap-[50px]">
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold mb-3 text-xl">{t('footer.company.title')}</p>

                        <p>{t('footer.company.about')}</p>
                        <p>{t('footer.company.offerings')}</p>
                        <p>{t('footer.company.newsroom')}</p>
                        <p>{t('footer.company.investors')}</p>
                        <p>{t('footer.company.blog')}</p>
                        <p>{t('footer.company.careers')}</p>
                    </div>


                    <div className="flex flex-col gap-2">
                        <p className="font-semibold mb-3 text-xl">{t('footer.products.title')}</p>

                        <p>{t('footer.products.ride')}</p>
                        <p>{t('footer.products.drive')}</p>
                        <p>{t('footer.products.eat')}</p>
                        <p>{t('footer.products.uberForBussines')}</p>
                        <p>{t('footer.products.uberFreight')}</p>
                        <p>{t('footer.products.giftCards')}</p>
                    </div>
                </div>

                <div className="lg:flex lg:flex-row lg:gap-[200px] md:flex md:flex-row sm:flex sm:flex-col flex flex-col md:gap-[130px] sm:gap-[50px] gap-[50px]">
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold mb-3 text-xl">{t('footer.globalCitizenship.title')}</p>

                        <p>{t('footer.globalCitizenship.safety')}</p>
                        <p>{t('footer.globalCitizenship.sustainability')}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="font-semibold mb-3 text-xl">{t('footer.travel.title')}</p>
                    
                        <p>{t('footer.travel.reserve')}</p>
                        <p>{t('footer.travel.airports')}</p>
                        <p>{t('footer.travel.cities')}</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-10">
                <svg fill="#ffffff" height="20px" width="20px" viewBox="0 0 32 32" stroke="#ffffff" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve"><path d="M23,0H9C4,0,0,4,0,9v14c0,5,4,9,9,9h14c5,0,9-4,9-9V9C32,4,28,0,23,0z M12,25c0,0.6-0.4,1-1,1H7c-0.6,0-1-0.4-1-1V13c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1V25z M9,11c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S10.7,11,9,11z M26,25c0,0.6-0.4,1-1,1h-3c-0.6,0-1-0.4-1-1v-3.5v-1v-2c0-0.8-0.7-1.5-1.5-1.5S18,17.7,18,18.5v2v1V25c0,0.6-0.4,1-1,1h-3c-0.6,0-1-0.4-1-1V13c0-0.6,0.4-1,1-1h4c0.3,0,0.5,0.1,0.7,0.3c0.6-0.2,1.2-0.3,1.8-0.3c3,0,5.5,2.5,5.5,5.5V25z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" width="20" height="20"><path d="M23.498 6.186a2.953 2.953 0 0 0-2.08-2.087C19.33 3.5 12 3.5 12 3.5s-7.33 0-9.418.599a2.953 2.953 0 0 0-2.08 2.087A30.007 30.007 0 0 0 0 12a30.007 30.007 0 0 0 .502 5.814 2.953 2.953 0 0 0 2.08 2.087C4.67 20.5 12 20.5 12 20.5s7.33 0 9.418-.599a2.953 2.953 0 0 0 2.08-2.087A30.007 30.007 0 0 0 24 12a30.007 30.007 0 0 0-.502-5.814zM10 15V9l5 3-5 3z"/></svg>
                <svg width='20px' viewBox="0 0 24 24" fill="#ffffff" stroke="#ffffff" xmlns="http://www.w3.org/2000/svg"><g><path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" /><path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" /><path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" /></g></svg>
                <svg width="21px" height="21px" viewBox="-1.2 -1.2 22.4 22.4" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" strokeWidth={0.0002}><rect x="0" width="20" height="20" fill="none"/><g><path d="M18.94 4.46c-.49.73-1.11 1.38-1.83 1.9.01.15.01.31.01.47 0 4.85-3.69 10.44-10.43 10.44-2.07 0-4-.61-5.63-1.65.29.03.58.05.88.05 1.72 0 3.3-.59 4.55-1.57-1.6-.03-2.95-1.09-3.42-2.55.22.04.45.07.69.07.33 0 .66-.05.96-.13-1.67-.34-2.94-1.82-2.94-3.6v-.04c.5.27 1.06.44 1.66.46-.98-.66-1.63-1.78-1.63-3.06 0-.67.18-1.3.5-1.84 1.81 2.22 4.51 3.68 7.56 3.83-.06-.27-.1-.55-.1-.84 0-2.02 1.65-3.66 3.67-3.66 1.06 0 2.01.44 2.68 1.16.83-.17 1.62-.47 2.33-.89-.28.85-.86 1.57-1.62 2.02.75-.08 1.45-.28 2.11-.57z"/></g></svg>
            </div>
        </div>
    );
};

export default Footer;