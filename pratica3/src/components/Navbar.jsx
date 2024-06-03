import { NavLink } from 'react-router-dom';
import './Navbar.css';

export function Navbar() {
    return (
        <ul>
            <li><NavLink to="/" end>Meus Contatos</NavLink></li>
            <li><NavLink to="/novo">Novo Contato</NavLink></li>
        </ul>
    );
}
