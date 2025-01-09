import { useEffect, useState } from 'react';
import counter from '../../assets/images/counter.webp';

const CountdownTimer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [mins, setMinutes] = useState(0);
    const [secs, setSeconds] = useState(0);

    const deadline = 'January, 31, 2025';

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

//  !!!on sm and below devices, menu from bottom will be removed so countdown is placed accordingly!!!
// digits not visible for font dharma on sm devices

    return (
        <div className="w-[90.18vw] md:w-[62.18vw] h-[24.88vh] absolute z-20 top-[60vh] md:top-[62vh] 
        grid grid-cols-4 text-white gap-x-8 xxs:gap-x-[6vw]">
            {[
                { label: 'DAYS', value: days },
                { label: 'HOURS', value: hours },
                { label: 'MINS', value: mins },
                { label: 'SECS', value: secs },
            ].map(({ label, value }, index) => (
                <div key={index} className="sm:font-dharma flex flex-col items-center justify-center h-full">
                    <p
                        className="text-sm sm:text-xl uxl:text-3xl tracking-[2.5px] font-sans sm:mb-5 
                        -mt-[5.5vh] sm:-mt-[6.4vh] md:-mt-[6.2vh] lg:-mt-[7vh] xl:-mt-[6.9vh] 
                        xxl:-mt-[5.5vh] uxl:-mt-[6vh] w-[80px] sm:w-[100px] lg:w-[150px] xl:w-[200px] uxl:w-[250px]"
                        style={{
                            backgroundImage: `url(${counter})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            padding: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {label}
                    </p>
                    <h1 className="text-2xl sm:text-5xl lg:text-8xl uxl:text-9xl sm:font-semibold tracking-[7.5px] pl-1">
                        {value < 10 ? '0' + value : value}
                    </h1>
                </div>
            ))}
        </div>
    );
};

export default CountdownTimer;
