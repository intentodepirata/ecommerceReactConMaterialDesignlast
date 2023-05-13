
import './button.css'

const ButtonPersonal = ({text, estilo, onClick}) => {



  
  return (
    <button className={estilo}   onClick={onClick} >{text}</button>
  )
}


export default ButtonPersonal