/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import ActorGird from '../components/actor/ActorGird';
import CustomRadio from '../components/CustomRadio';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import {apiGet} from '../misc/config';
import { useLastQuery } from '../misc/custom-hooks';
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from './Home.styled';

const Home = () => {
    const [input, setInput] = useLastQuery();
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
        if( results && results.length > 0 ) 
        return results[0].show 
        ? <ShowGrid data={results} /> 
        : <ActorGird data={results} />
        return null; 
    }

    return (
        <MainPageLayout>
            <SearchInput placeholder="Search for something" type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input} />
            <RadioInputsWrapper>
            <div>
                <CustomRadio 
                    label="Shows"
                    id="shows-search"
                    value="shows"
                    onChange={onRadioChange}
                />
            </div>    
            <div>
                <CustomRadio 
                    label="Actors"
                    id="actor-search"
                    value="people"
                    onChange={onRadioChange}
                />
            </div>
            </RadioInputsWrapper>
            <SearchButtonWrapper>
                <button type="button" onClick={onSearch}>Search</button>
            </SearchButtonWrapper>
            {renderResult()}
        </MainPageLayout>
    )
}

export default Home;