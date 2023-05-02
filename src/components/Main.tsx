import { useState } from 'react';
import '../styles/Main.css'
import { Input } from './Input';
import { Output } from './Output';

const Main: React.FC = () => {

    const [day,setDay] = useState(0);
    const [month,setMonth] = useState(0);
    const [year,setYear] = useState(0);

    const currentDate = new Date();

    const currentDay:number = currentDate.getDate();
    const currentMonth:number = currentDate.getMonth();
    const currentYear:number = currentDate.getFullYear();



    function handleChange(e:any):void {

        let inputValue = parseInt(e.target.value)

        e.target.id==='DAY'?setDay(inputValue):e.target.id==='MONTH'?setMonth(inputValue):setYear(inputValue);


    }



    return  <section className='mainSection'>
        <section className='inputSection'>
            <Input name='DAY' handleChange={handleChange} />
            <Input name='MONTH' handleChange={handleChange} />
            <Input name='YEAR' handleChange={handleChange} />
            <span className='icon'/>
        </section>

        <section className='outputSection'>
            <Output name='years' date={year} currentDate={currentYear}/>
            <Output name='months' date={month} currentDate={currentMonth}/>
            <Output name='days' date={day} currentDate={currentDay}/>
        </section>

    </section>
}

export {Main};