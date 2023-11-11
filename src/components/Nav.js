import { links } from "../config/links"

function Nav() {
    return (
        <nav> 
            <ul>
                {links.map((link)=>{
                    return (
                        <li>
                            <a href={link.url}>
                                {link.name}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Nav