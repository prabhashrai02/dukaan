import logo from '../../Assets/white.svg';
import Button from '../button/button';
import './navBar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="Dukaan logo"/>
            </div>
            
            <Button className="signin">Sign In</Button>
            <Button className="dukaan_pc">Dukaan for PC</Button>
        </div>
    )
}

export default Navbar;