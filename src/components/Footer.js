import { links } from "../config/links"
import { contactInfo } from "../config/links"
import { socialLinks } from "../config/links"

import logo from '../images/Logo.svg'

function Footer() {
    return (
        <footer>
            <img src={logo} alt="Little Lemon Restaurant Logo"></img>
            <ul className='doormat-links'>
                {links.map((link)=>{
                    return (<li key={link.name}><a href={link.url}>{link.name}</a></li>)
                })}
            </ul>
            <ul className='contact-info'>
                {contactInfo.map((item)=>{
                    return (<li key={item.name}>{item.data}</li>)
                })}
            </ul>
            <ul className='social-links'>
                {socialLinks.map((link)=>{
                    return (
                        <li key={link.name}>
                            <a href={link.url}>
                                <img href={link.iconUrl} alt={link.name}></img>
                            </a>
                        </li>)
                })}
            </ul>
        </footer>
    )
}

export default Footer