import React, { useEffect } from 'react';
interface Props {
    timeZoneName?: {}
    interval?: number
    zoneName?: string
}
const Timer: React.FC<Props>= ({timeZoneName, interval, zoneName}) => {
    const [time, setTime] = React.useState(new Date());
    function tic(): void{
        setTime(new Date());
    }
    useEffect(() => {
        setInterval(tic, interval || 1000);
    }, []);
    if(zoneName === undefined) zoneName = 'Local time'
    return <div className="col" style={{marginLeft: "10vw"}}>
        <h3>{zoneName}</h3>
        <label>{time.toLocaleTimeString('en-US', timeZoneName || undefined)}</label>
    </div>
}
export default Timer;
