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
    const currentMonth:number = currentDate.getMonth()+1;
    const currentYear:number = currentDate.getFullYear();



    function handleChange(e:any):void {
        
        let inputValue;

        if (e.target.value==='') {
            inputValue=0;
        } else {
            inputValue = parseInt(e.target.value)
        }
        
        e.target.id==='DAY'?setDay(inputValue>31?31:inputValue):e.target.id==='MONTH'?setMonth(inputValue>12?12:inputValue):setYear(inputValue>currentYear?currentYear:inputValue);

    }

    function handleClick() {
        setDay(0);
        setMonth(0);
        setYear(0);

    }


    return  <section className='mainSection'>
        <h2 className='subtitle'>YOUR DATE OF BIRTH :</h2>
        <section className='inputSection'>
            <Input name='DAY' date={day}  handleChange={handleChange} maxDay={month===2?29
                                                                            :month===4||month===6||month===9||month===11?30
                                                                            :31
                                                                            }/>
            <Input name='MONTH' date={month} handleChange={handleChange} />
            <Input name='YEAR' date={year} handleChange={handleChange} currentDate={currentYear}/>
            <span onClick={handleClick} className='icon'/>
        </section>
        <h2 className='subtitle'>YOUR AGE :</h2>                                                                 
        <section className='outputSection'>
            <Output name='years' date={year} currentDate={(currentMonth<month)||(currentMonth===month&&currentDay<day)?currentYear-1:currentYear}/>
            <Output name='months' date={month} currentDate={currentDay<day?currentMonth-1:currentMonth}/>
            <Output name='days' date={day} currentDate={currentDay} maxDay={month===2?29
                                                                            :month===4||month===6||month===9||month===11?30
                                                                            :31
                                                                            }/>
        </section>

    </section>
}

export {Main};