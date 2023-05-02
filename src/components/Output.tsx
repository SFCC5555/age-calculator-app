import '../styles/Output.css'

const Output: React.FC<{name:string,number:number|string}> = ({name,number}) => {


    return  <div className='outputContainer'>
            <span className='number'>{number} </span>
            {name}
            </div>
}

export {Output};