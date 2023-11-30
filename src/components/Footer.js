import { links } from "../config/links"
import { contactInfo } from "../config/links"
import { socialLinks } from "../config/links"

import logo from '../images/Logo.svg'

function Footer() {
    return (
        <footer className="flex-box flex-row">
            <ul className='doormat-links inline-flex flex-row space-between align-center'>
                <li>
                    <img src={logo} alt="Little Lemon Restaurant Logo"></img>
                </li>
                <li>
                    <ul className="footer-list">
                        {links.map((link)=>{
                            return (<li key={link.name} className="footer-link"><a href={link.url}>{link.name}</a></li>)
                        })}
                    </ul>
                </li>
                <li>
                    <ul className='contact-info'>
                        {contactInfo.map((item)=>{
                            return (<li className="footer-link" key={item.name}>{item.data}</li>)
                        })}
                    </ul>
                </li>
                <li>
                    <ul className='social-links'>
                        {socialLinks.map((link)=>{
                            return (
                                <li className="footer-link" key={link.name}>
                                    <a href={link.url}>
                                        <img href={link.iconUrl} alt={link.name}></img>
                                    </a>
                                </li>)
                        })}
                    </ul>
                </li>
            </ul>


        </footer>
    )
}

export default Footer