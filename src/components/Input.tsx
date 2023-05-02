import '../styles/Input.css'

export interface IputInterface {
    name:string
    handleChange: any
    currentDate?:number
    date:number
    maxDay?:number
}

const Input: React.FC<IputInterface> = ({name,handleChange,currentDate,date,maxDay}) => {
    return  <div className='inputContainer'>
                <label htmlFor={name}>{name}</label>
                <input onChange={handleChange}
                        value={date===0?'':date}
                        id={name}
                        type='number'
                        placeholder={name==='DAY'?'DD':name==='MONTH'?'MM':'YYYY'}
                        min={1}
                        max={name==='DAY'?maxDay:name==='MONTH'?12:currentDate}       
                />
            </div>
}

export {Input};