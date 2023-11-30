import { links } from "../config/links"
import logo2 from '../images/Logo2.svg'

function Nav() {
    return (
        <nav className="flex-box flex-row">
            <ul className="inline-flex flex-row space-between align-center">
                <li key='logo'>
                    <a className="nav-link" href='/'>
                        <img src={logo2} alt="little lemon restaurant logo" id="nav-logo"></img>
                    </a>
                </li>
                <li>
                    <ul id="navlinks" className="flex-box flex-inline space-between">
                        {links.map((link)=>{
                            return (
                                <li className="nav-item">
                                    <a className="nav-link" href={link.url}>
                                        {link.name}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Nav