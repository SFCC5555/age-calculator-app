import { useState } from 'react';
import '../styles/Main.css'
import { Input } from './Input';
import { Output } from './Output';

const Main: React.FC = () => {

    const [day,setDay] = useState<string | number>('-');
    const [month,setMonth] = useState<string | number>('-');
    const [year,setYear] = useState<string | number>('-');

    const actualDate = new Date();

    const actualDay:number = actualDate.getDate();
    



    function handleChange(e:any):void {

        e.target.id==='DAY'?setDay(e.target.value):e.target.id==='MONTH'?setMonth(e.target.value):setYear(e.target.value);


    }



    return  <section className='mainSection'>
        <section className='inputSection'>
            <Input name='DAY' handleChange={handleChange} />
            <Input name='MONTH' handleChange={handleChange} />
            <Input name='YEAR' handleChange={handleChange} />
            <span className='icon'/>
        </section>

        <section className='outputSection'>
            <Output name='years' number={year}/>
            <Output name='months' number={month}/>
            <Output name='days' number={day}/>
        </section>

    </section>
}

export {Main};