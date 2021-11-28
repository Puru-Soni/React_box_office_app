/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout';
import {apiGet} from '../misc/config'

const Home = () => {
    const [input, setInput] = useState('');
    const [results, setResults] = useState(null);
    const [searchFor , setSearchFor] = useState('shows');

    const onSearch = ()=>{
        apiGet(`/search/${searchFor}?q=${input}`)
        .then(result => {
            setResults(result);
        })
    }

    const onRadioChange = (ev)=>{
        setSearchFor( ev.target.value );
    }

    const onKeyDown = (ev)=>{
        if(ev.keyCode === 13){
            onSearch();
        }
    }

    const onInputChange = (ev)=>{
        setInput(ev.target.value);
    }

    const renderResult = ()=>{
        if( results && results.length === 0 ) return <div>No result</div>;

        if( results && results.length > 0 ) return results[0].show ? results.map( item=> <div key={item.show.id}>{item.show.name}</div> ) 
        : results.map( item=> <div key={item.person.id}>{item.person.name}</div> );
        
        return null; 
    }

    return (
        <MainPageLayout>
            <input placeholder="Search for something" type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input} />
            <div>
                <label htmlFor="shows-search">
                    TV Shows
                    <input name="radio-search"  id="shows-search" type="radio" value="shows" onChange={onRadioChange} />
                </label>

                <label htmlFor="actor-search">
                    Actors
                    <input name="radio-search" id="actor-search" type="radio" value="people" onChange={onRadioChange} />
                </label>
            </div>
            <button type="button" onClick={onSearch}>Search</button>
            {renderResult()}
        </MainPageLayout>
    )
}

export default Home;