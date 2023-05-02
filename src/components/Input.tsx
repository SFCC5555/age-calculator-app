import '../styles/Input.css'

export interface IputInterface {
    name:string
    handleChange: any
}

const Input: React.FC<IputInterface> = ({name,handleChange}) => {
    return  <div className='inputContainer'>
                <label htmlFor={name}>{name}</label>
                <input onChange={handleChange} id={name} type='number' placeholder={name==='DAY'?'DD':name==='MONTH'?'MM':'YYYY'}/>
            </div>
}

export {Input};