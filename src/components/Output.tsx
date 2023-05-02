import '../styles/Output.css'

const Output: React.FC<{name:string,date:number,currentDate:number}> = ({name,date,currentDate}) => {


    return  <div className='outputContainer'>
            <span className='number'>{date===0?'-':currentDate-date} </span>
            {name}
            </div>
}

export {Output};