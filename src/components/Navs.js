import React from 'react'
import {Link} from 'react-router-dom'

//  Array for links, so to not repeat and map all in <li>
const LINKS = [
    {to: '/', text: 'Home'},
    {to: '/starred', text: 'Starred'}
]

const Navs = () => {
    return (
        <nav>   
            <ul>
                {
                    LINKS.map(item => ( 
                        <li key={item.to}>
                            <Link to={item.to}>{item.text}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navs;