// shadcn components
import { Input } from "@/components/ui/input";
import { Popover } from "@radix-ui/react-popover";
import { PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// components
import Footer from "../components/Footer";

// location images
import pickUpLocationImg from '../images/letter-a.png';
import dropOffLocationImg from '../images/letter-b.png';

// uber
import uber from '../images/uber.webp';
import uberDriver from '../images/uber driver.svg';

// genral images
import adult from '../images/person.png';
import child from '../images/child.png';

// cars
import suv from '../images/SUV.png';
import van from '../images/Van.png';
import vip from '../images/Vip.png';
import premium from '../images/premium.png';
import minibus from '../images/minibus.png';
import economy from '../images/economy.png';
import comfort from '../images/comfort.png';
import businsess from '../images/business.png';

// hooks
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();
    const [date, setDate] = useState(false);
    
    const ratings = [
        {
            message: "Amazing service! The driver was on time, the car was spotless, and the ride was incredibly smooth. I felt safe and comfortable the entire way.",
            rating: 5,
            image: "https://img.freepik.com/premium-photo/young-beautiful-smiling-woman-stands-confidently-blue-background_187241-8305.jpg",
        },
        {
            message: "Very good experience overall. The driver was polite and professional, the app was easy to use, and I arrived at my destination quickly without any issues.",
            rating: 5,
            image: "https://cdn.talently.tech/contratado_1_1b31983410.png",
        },
        {
            message: "Exceptional service! The car was clean, the driver was friendly, and the entire ride felt premium. I will definitely use this service again for my future trips.",
            rating: 5,
            image: "https://img.freepik.com/premium-photo/latin-woman_62972-9609.jpg",
        },
        {
            message: "Outstanding experience from start to finish. Everything was organized, the driver knew the best route, and the ride was both fast and comfortable. Highly recommended!",
            rating: 5,
            image: "https://images.pexels.com/photos/30007901/pexels-photo-30007901.jpeg?cs=srgb&dl=pexels-emre-simsek-27565013-30007901.jpg&fm=jpg",
        },
        {
            message: "Perfect service! From booking to drop-off, everything was flawless. The driver was courteous, the car was comfortable, and the overall experience exceeded my expectations.",
            rating: 5,
            image: "https://cdn.openart.ai/published/u6tvyIVfQ5of93a2we4l/VbwBM8AJ_e_tN_512.webp",
        },
    ];

    return (
        <>
            <div className="lg:flex lg:flex-row md:flex md:flex-col-reverse sm:flex sm:flex-col-reverse flex flex-col-reverse lg:gap-[120px] justify-center items-center w-full">
                <div className="lg:w-[452px] md:w-[600px] sm:w-full w-full">
                    <p className="text-[52px] font-bold mb-4 lg:mt-0 md:mt-0 sm:mt-10 mt-10" style={{fontFamily: "var(--main-font-family, 'Uber Move Text', sans-serif)"}}>{t('home.title')}</p>
                    <div className="relative gap-7 flex flex-col lg:w-[410px] md:w-[580px] sm:w-full w-full mb-10">
                        <div className="flex justify-center items-center pl-1 rounded-[2px]" style={{ backgroundColor: 'var(--input-bg-color, #F3F3F3)' }}>
                            <img src={pickUpLocationImg} className="w-[28px]" />
                            <Input type="text" placeholder={t('home.form.input1.placeholder')} className="p-1! shadow-none border-none" required />
                        </div>
                        <div className="absolute top-7 left-[17.4px] h-10 w-px bg-black"></div>
                        <div className="flex justify-center items-center pl-1 rounded-[2px]" style={{ backgroundColor: 'var(--input-bg-color, #F3F3F3)' }}>
                            <img src={dropOffLocationImg} className="w-7" />
                            <Input type="text" placeholder={t('home.form.input2.placeholder')} required className="p-1! shadow-none border-none" />
                        </div>
                    </div>
                    <div className="flex gap-2 mb-7">
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2 justify-center items-center border rounded-full h-[40px] lg:w-[200px] md:w-[290px] sm:w-[290px] w-[290px]">
                                <img src={economy} className="w-[80px]" />
                                <p className="font-normal">{t('home.cars.economy')}</p>
                            </div>
                            <div className="flex gap-2 justify-center items-center border rounded-full h-[40px] lg:w-[200px] md:w-[290px] sm:w-[290px] w-[290px]">
                                <img src={comfort} className="w-[80px]" />
                                <p className="font-normal">{t('home.cars.comfort')}</p>
                            </div>
                            <div className="flex gap-2 justify-center items-center border rounded-full h-[40px] lg:w-[200px] md:w-[290px] sm:w-[290px] w-[290px]">
                                <img src={businsess} className="w-[80px]" />
                                <p className="font-normal">{t('home.cars.business')}</p>
                            </div>
                            <div className="flex gap-2 justify-center items-center border rounded-full h-[40px] lg:w-[200px] md:w-[290px] sm:w-[290px] w-[290px]">
                                <img src={premium} className="w-[80px]" />
                                <p className="font-normal">{t('home.cars.premium')}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2 justify-center items-center border rounded-full h-[40px] lg:w-[200px] md:w-[290px] sm:w-[290px] w-[290px]">
                                <img src={vip} className="w-[80px]" />
                                <p className="font-normal">{t('home.cars.vip')}</p>
                            </div>
                            <div className="flex gap-2 justify-center items-center border rounded-full h-[40px] lg:w-[200px] md:w-[290px] sm:w-[290px] w-[290px]">
                                <img src={suv} className="w-[80px]" />
                                <p className="font-normal">{t('home.cars.suv')}</p>
                            </div>
                            <div className="flex gap-2 justify-center items-center border rounded-full h-[40px] lg:w-[200px] md:w-[290px] sm:w-[290px] w-[290px]">
                                <img src={van} className="w-[80px]" />
                                <p className="font-normal">{t('home.cars.van')}</p>
                            </div>
                            <div className="flex gap-2 justify-center items-center border rounded-full h-[40px] lg:w-[200px] md:w-[290px] sm:w-[290px] w-[290px]">
                                <img src={minibus} className="w-[80px]" />
                                <p className="font-normal">{t('home.cars.minibus')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-[200px] gap-5 mb-5">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline" className="w-[128px] flex justify-between font-normal p-3">{date ? date.toLocaleDateString() : 'Select Date'}
                                    <ChevronDownIcon />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="overflow-hidden" align="start">
                                <Calendar mode="single" selected={date} onSelect={setDate} className="w-auto bg-white rounded-lg [--cell-size:--spacing(11)] md:[--cell-size:--spacing(12)]" />
                            </PopoverContent>
                        </Popover>
                        <Input type="time" step="1" defaultValue="10:30:00" className="p-3 appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none" />
                    </div>

                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190570.22479760094!2d44.64161396055562!3d41.7278601629426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x61d084ede2576ea3!2sTbilisi!5e0!3m2!1sen!2sge!4v1766507521251!5m2!1sen!2sge" width="400" height="300" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="flex flex-col gap-6 lg:mb-[120px] md:mb-[50px]">
                    <img src={uber} className="lg:w-[590px] md:w-[590px] sm:w-[400px] w-full rounded-[5px]" />

                    <Carousel className="w-full max-w-[590px] mt-4 overflow-hidden relative">
                        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full border-gray-300">
                            <ChevronLeftIcon />
                        </CarouselPrevious>
                        <CarouselContent className="flex">
                            {ratings.map((e, index) => (
                                <CarouselItem key={index} className="w-[140px] shrink-0 ml-2">
                                    <Card>
                                        <CardContent className="flex flex-col gap-4 ml-2 p-2 w-[140px] h-[180px] shadow">
                                            <div className="flex gap-2">
                                                <img src={e.image} className="w-10 h-10 rounded-full" />
                                                <div className="flex w-20">
                                                    {[...Array(e.rating)].map((_, i) => (
                                                        <svg fill="#FFC107" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-fill="" style={{ "--darkreader-inline-fill": "var(--darkreader-background-ffc107, #967000)" }}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.5,9.757l-5.278,4.354L17.871,21.5,12,17.278,6.129,21.5l1.649-7.389L2.5,9.757l6.333-.924L12,2.5l3.167,6.333Z"></path></g></svg>
                                                    ))}
                                                </div>  
                                            </div>
                                            <p className="text-[10px]">{e.message}</p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full border-gray-300 ">
                            <ChevronRightIcon />
                        </CarouselNext>
                    </Carousel>
                </div>
            </div>
            <div className="lg:flex lg:flex-row lg:justify-center lg:items-center lg:mt-0 md:flex md:flex-col md:gap-[50px] md:justify-center md:items-center md:mt-10 sm:flex sm:flex-col sm:justify-center sm:items-center sm:mt-10 flex flex-col justify-center items-center mt-10 lg:gap-[150px] w-full" style={{fontFamily: "var(--main-font-family, 'Uber Move Text', sans-serif)"}}>
                <div className="flex flex-col gap-4 lg:w-auto md:w-[558px] sm:w-[558px] w-[558px] lg:mb-0 md:mb-0 sm:mb-10 mb-10">
                    <p className="text-[35px] font-bold w-[450px]">{t('home.auth.title')}</p>

                    <p className="w-[430px]">{t('home.auth.text')}</p>

                    <Button className="bg-black rounded-[5px] w-[200px] h-[40px] text-white">{t('home.auth.btnText')}</Button>
                </div>

                <div className="flex justify-center items-center">
                    <img src={uberDriver} />
                </div>
            </div>

            <Footer />
        </>
    )
};

export default Home;