import React,{memo} from 'react'
import { useLocation } from 'react-router-dom'


import { NavList, LinkStyled } from './Navs.Styled'

//  Array for links, so to not repeat and map all in <li>
const LINKS = [
    {to: '/', text: 'Home'},
    {to: '/starred', text: 'Starred'}
]

const Navs = () => {
    const location = useLocation();
    console.log(location)

    return (
        <nav>   
            <NavList> 
                {LINKS.map(item => ( 
                    <li key={item.to}>
                        <LinkStyled to={item.to}
                        className={item.to === location.pathname ? 'active' : ''}>
                            {item.text}
                        </LinkStyled>
                    </li>
                ))}
            </NavList>
        </nav>
    )
}

export default memo(Navs);