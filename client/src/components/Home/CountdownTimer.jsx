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
        <div className='absolute z-20 h-[30vh] md:h-[20vh] w-[90vw] md:w-[70vw] flex  flex-col p-[10vh] md:p-[20vh]'>
            <div className='flex  absolute top-[30vh]  md:top-[30vh] left-[4vw] md:left-[5vw] '>
                <img src={counter}></img>
            </div>
            <div className=" flex text-white absolute top-[27vh] sm:top-[37vh] md:top-[40vh] left-[6vw] md:left-[7vw]   gap-x-[15vw] md:gap-x-[9vw] lg:gap-x-[8vw] ">
                <div className='font-dharma w-[10vw]'>    
                    <h1 className=' text-3xl sm:text-5xl lg:text-9xl font-semibold leading-[9.37rem] tracking-[7.5px]'>
                        {days < 10 ? "0" + days : days}
                    </h1>
                </div>
                <div className='font-dharma w-[10vw]'>
                    <h1 className='text-3xl sm:text-5xl lg:text-9xl font-semibold leading-[9.37rem] tracking-[7.5px]'>
                        {hours < 10 ? "0" + hours : hours}
                    </h1>
                </div>
                <div className='font-dharma w-[10vw]'>
                    <h1 className='text-3xl sm:text-5xl lg:text-9xl font-semibold leading-[9.37rem] tracking-[7.5px]'>
                        {mins < 10 ? "0" + mins : mins}
                    </h1>
                </div>
                <div className='font-dharma w-[10vw]'>
                    <h1 className='text-3xl sm:text-5xl lg:text-9xl font-semibold leading-[9.37rem] tracking-[7.5px]'>
                        {secs < 10 ? "0" + secs : secs}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;