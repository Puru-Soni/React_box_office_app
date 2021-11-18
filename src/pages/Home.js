import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout';
import {apiGet} from '../misc/config'

const Home = () => {
    const [input, setInput] = useState('');
    const [results, setResults] = useState(null);

    const onSearch = ()=>{
        apiGet(`/search/shows?q=${input}`)
        .then(result => {
            setResults(result);
        })
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
        if( results && results.length > 0 ) return results.map( item=> <div key={item.show.id}>{item.show.name}</div> );
        return null; 
    }

    return (
        <MainPageLayout>
            <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input} />
            <button type="button" onClick={onSearch}>Search</button>
            {renderResult()}
        </MainPageLayout>
    )
}

export default Home;