import '../styles/Output.css'

const Output: React.FC<{name:string,date:number,currentDate:number,maxDay?:number}> = ({name,date,currentDate,maxDay}) => {
            
    let age = currentDate-date;

    if (age<0) {
        if (name==='months') {
            age = 12 + age;
        } else if (name==='days'&&maxDay) {

            age = maxDay + age;
        }
    }



    return  <div className='outputContainer'>
            <span className='number'>{date===0?'-':age} </span>
            {age!==1?name:name.slice(0,-1)}
            </div>
}

export {Output};