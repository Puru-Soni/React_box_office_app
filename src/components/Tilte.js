import React from 'react'
import { TitleWrapper } from './Title.Styled'


export default function Tilte({ title, subtitle }){
    return (
        <TitleWrapper>
            <h1>{ title }</h1>
            <p>{ subtitle }</p>
        </TitleWrapper>
    )
}
