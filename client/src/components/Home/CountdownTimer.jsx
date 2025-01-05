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
        <div className='absolute z-20  h-[30vh] md:h-[20vh] w-[90vw] md:w-[70vw] flex  flex-col p-[10vh] md:p-[20vh]'>
            <div className='w-[60.47vw] h-[6.21vh]   absolute top-[30vh]  md:top-[30vh] left-[15.56vw] md:left-[6vw] lg:left-[7.5vw] '>
                <img className=' w-[60.47vw] h-[6.21vh]' src={counter}></img>
            </div>
            <div className="w-[60.47vw] h-[16.66vh] flex text-white absolute top-[27vh] sm:top-[37vh] md:top-[40vh] left-[15.56vw] md:left-[7.5vw]   gap-x-[6vw] sm:gap-x-[8.5vw] md:gap-x-[10vw]  ">
                <div className='font-dharma w-[10vw]  mx-auto'>    
                    <h1 className=' text-3xl sm:text-5xl lg:text-8xl uxl:text-9xl font-semibold leading-[9.37rem] tracking-[7.5px] pl-1'>
                        {days < 10 ? "0" + days : days}
                    </h1>
                </div>
                <div className='font-dharma w-[10vw] mx-auto'>
                    <h1 className='text-3xl sm:text-5xl lg:text-8xl uxl:text-9xl font-semibold leading-[9.37rem] tracking-[7.5px] pl-2'>
                        {hours < 10 ? "0" + hours : hours}
                    </h1>
                </div>
                <div className='font-dharma w-[10vw] mx-auto'>
                    <h1 className='text-3xl sm:text-5xl lg:text-8xl uxl:text-9xl font-semibold leading-[9.37rem] tracking-[7.5px] pl-2'>
                        {mins < 10 ? "0" + mins : mins}
                    </h1>
                </div>
                <div className='font-dharma w-[10vw] mx-auto'>
                    <h1 className='text-3xl sm:text-5xl lg:text-8xl uxl:text-9xl font-semibold leading-[9.37rem] tracking-[7.5px] pl-3'>
                        {secs < 10 ? "0" + secs : secs}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;