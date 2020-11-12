import React, { useEffect, useState } from 'react';
import api from '../services/Api';
import Modal from '../components/Modal';
import ToolsDisplay from '../components/ToolsDisplay';
import '../styles/styleHomePage.css'
import '../styles/styleModal.css'
import '../styles/styleToolsDisplay.css'

export default function Home() {

    const [tools, setTools] = useState ([]);
    const [show, setShow] = useState(false);
    const [showSearchFilter, setShowSearchFilter] = useState(false);
    
    const [searchText, setSearchText] = useState('');
    const [filterSearch, setFilterSearch] = useState([]);
    const [checkbox, setCheckbox] = useState(false);    
    
    useEffect(() => {
        loadTools()
      
    }, [])

    async function loadTools() {
        const response = await api.get('/tools')
        setTools(response.data) 
    }

    async function removeTool(toolId){
        await api.delete(`/tools/${toolId}`)
        loadTools();
    }
    const handleChangeSearch = e => {
        setSearchText(e);
        let oldList = tools.map(tool => {
            return {title: tool.title.toLowerCase()
            };
        });
        if(searchText !== '' ){
            let newList = [];
                newList = oldList.filter(tool =>
                tool.title.includes(searchText.toLowerCase()));
                setFilterSearch(newList);
            }else{
                setFilterSearch(tools.title);
            }
        
    }
    function handleCheckbox(e) {
        setCheckbox(e.target.checked);
        
    }
    function handleSearchSubmit(e) {
        e.preventDefault();
    
    }
      
    return (
        <>
            <div className="pageContainer">
                <form onSubmit={handleSearchSubmit}>
                      <div className="row">
                        <input
                            className="searchBar"
                            id="search"
                            type="text"
                            value={searchText}
                            placeholder="Search"
                            onChange={e => handleChangeSearch(e.target.value)}
                        />      
                        
                       
                        <div className="checkboxContainer">
                            <input
                                className="checkbox"
                                type="checkbox"
                                onChange={handleCheckbox}
                            />
                            <p> search in tags only </p>
                        </div>
                        <button onClick={() => setShow(!show)} type="button" className="addButton"> Add + </button>
                    </div>

                    <button className='invisibleButton' type="submit">submit</button>
                </form>
                {
                show ?
                <Modal 
                    tools = {tools}             
                />
                :
                null
                }
                <div className='cards'>   
                    {tools.map(tool => (
                        <div className='card' key={tool.id}>
                            <div className="delete-row">
                                <a href={tool.link} className='title'>{tool.title}</a>
                                <button className='remove' onClick={() => removeTool(tool.id)}> Remove </button>
                            </div>
                            <p className='description'>{tool.description}</p>
                            <p className='tags'> Tags: {tool.tags.join(', ')} </p>
                        </div>
                    ))}
                </div>
            </div>
            
        </>
    )
}