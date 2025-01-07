import { useEffect, useState } from 'react'
import counter from "../../assets/images/counter.png"

const CountdownTimer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [mins, setMinutes] = useState(0);
    const [secs, setSeconds] = useState(0);

    const deadline = "January, 31, 2025";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / (1000 * 60)) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className=' w-[90.18vw] md:w-[62.18vw] h-[24.88vh]  absolute z-20 top-[62.5vh] md:top-[59.29vh]  grid grid-cols-4 text-white xxs:gap-x-[6vw]'>
                <div className='w-full h-full font-dharma   flex flex-col items-center justify-center '> 
                    <div className='flex flex-col items-center justify-start'>
                    <img src={counter} className='w-[200%] h-[100%]'></img>
                    <p className='text-md sm:text-2xl uxl:text-4xl tracking-[2.5px] font-sans -mt-[4.4vh]  xs1-sm:-mt-[5.5vh] sm:-mt-[6.4vh] md:-mt-[6.2vh] lg:-mt-[7vh] xl:-mt-[6.9vh] xxl:-mt-[5.5vh] uxl:-mt-[6vh]'>DAYS</p>
                    </div>
                    <h1 className=' text-3xl sm:text-5xl lg:text-8xl uxl:text-9xl font-semibold leading-[9.37rem] tracking-[7.5px] pl-1 '>
                        {days < 10 ? "0" + days : days}
                    </h1>
                </div>
                <div className='font-dharma   flex flex-col items-center justify-center h-full'> 
                    <div className='flex flex-col items-center justify-start'>
                    <img src={counter} className='w-[200%] h-[100%]'></img>
                    <p className='text-md sm:text-2xl uxl:text-4xl tracking-[2.5px] font-sans -mt-[4.4vh]  xs1-sm:-mt-[5.5vh] sm:-mt-[6.4vh] md:-mt-[6.2vh] lg:-mt-[7vh] xl:-mt-[6.9vh] xxl:-mt-[5.5vh] uxl:-mt-[6vh]'>HOURS</p>
                    </div>
                    <h1 className=' text-3xl sm:text-5xl lg:text-8xl uxl:text-9xl font-semibold leading-[9.37rem] tracking-[7.5px] pl-1'>
                        {days < 10 ? "0" + hours : hours}
                    </h1>
                </div>
                <div className='font-dharma   flex flex-col items-center justify-center h-full'> 
                    <div className='flex flex-col items-center justify-start'>
                    <img src={counter} className='w-[200%] h-[100%]'></img>
                        <p className='text-md sm:text-2xl uxl:text-4xl  tracking-[2.5px] font-sans -mt-[4.4vh]  xs1-sm:-mt-[5.5vh] sm:-mt-[6.4vh] md:-mt-[6.2vh]  lg:-mt-[7vh] xl:-mt-[6.9vh] xxl:-mt-[5.5vh] uxl:-mt-[6vh]'>MINS</p>
                    </div>
                    <h1 className=' text-3xl sm:text-5xl lg:text-8xl uxl:text-9xl font-semibold leading-[9.37rem] tracking-[7.5px] pl-1'>
                        {days < 10 ? "0" + mins : mins}
                    </h1>
                </div>
                <div className='font-dharma   flex flex-col items-center justify-center h-full'> 
                    <div className='flex flex-col items-center justify-start'>
                    <img src={counter} className='w-[200%] h-[100%]'></img>
                        <p className='text-md sm:text-2xl uxl:text-4xl tracking-[2.5px] font-sans -mt-[4.4vh]  xs1-sm:-mt-[5.5vh] sm:-mt-[6.4vh] md:-mt-[6.2vh]  lg:-mt-[7vh] xl:-mt-[6.9vh] xxl:-mt-[5.5vh] uxl:-mt-[6vh]'>SECS</p>
                    </div>
                    <h1 className=' text-3xl sm:text-5xl lg:text-8xl uxl:text-9xl font-semibold leading-[9.37rem] tracking-[7.5px] pl-1'>
                        {days < 10 ? "0" + secs : secs}
                    </h1>
                </div>
        </div>
    );
};

export default CountdownTimer;