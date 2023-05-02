import '../styles/ReactLogo.css'
import logo from '../logo.svg';

const ReactLogo: React.FC = () => {
    return <div className="reactLogoContainer">
                <p>Powered by React.</p>
                <img src={logo} className="reactLogo" alt="logo" />
         </div>

}

export {ReactLogo};