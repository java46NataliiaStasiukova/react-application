import React, { useEffect } from 'react';
interface Props {
    timeZone?: string
    interval?: number
    //zoneName?: string
}
const Timer: React.FC<Props>= ({timeZone, interval}) => {
    const [time, setTime] = React.useState(new Date());
    function tic(): void{
        console.log('kuku')
        setTime(new Date());
    }
    useEffect(() => {
        console.log('timer has been mounted')
        const intervalId = setInterval(tic, interval || 1000);
        return () => {
            clearInterval(intervalId);
            console.log("unmounting timer")
    }}, [interval]);
    //if(zoneName === undefined) zoneName = 'Local time'
    return <div className="col" style={{marginLeft: "10vw"}}>
        <h3>{timeZone}</h3>
        <label>{time.toLocaleTimeString('en-US', {timeZone})}</label>
    </div>
}
export default Timer;
