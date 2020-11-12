import React, {useState} from 'react';
import '../styles/styleModal.css';
import api from '../services/Api';

const Modal = (props) => {
    const [toolName, setToolName] = useState('');
    const [toolLink, setToolLink] = useState('');
    const [toolDescription, setToolDescription] = useState('');
    const [toolTags, setToolTags] = useState([]);

    const tags = ''+[toolTags]; 
    const resultTags = tags.split(" ");

    const tools = props.tools
    const length = tools.length
    const lastIndex = tools[length - 1]
    const lastId = lastIndex.id

    
    async function submitHandler() {
        const object =
            {           
                "id":   lastId + 1,
                "title": toolName,
                "link": toolLink,
                "description": toolDescription,
                "tags": resultTags 
            }
        await api.post('/tools', object)
    }

    return ( 
        <form>
            <div className="modal">
            
                <h4 className="titleModal"> + Add new tool </h4>
                <p className="toolNameModal"> Tool Name </p>
                <input 
                    className="nameModal" 
                    id="nameModal" 
                    type="text" 
                    onChange={e => setToolName((e.target.value))}
                />
                <p className="toolLinkModal"> Tool Link </p>
                <input 
                    className="link" 
                    id="linkModal" 
                    type="url"
                    placeholder="Add tool link" 
                    onChange={e => setToolLink((e.target.value))}
                />
                <p className="toolDescriptionModal"> Tool description </p>
                <input 
                    id="description" 
                    as="textarea" 
                    onChange={e => setToolDescription((e.target.value))}
                />
                <p className="toolTagsModal"> Tags </p>
                <input 
                    id="tags" 
                    type="text"
                    placeholder="Add tags"
                    onChange={e => setToolTags(e.target.value)}
                />
                <button onClick={e => submitHandler(e)} type="submit" className="addTool"> Add Tool </button>
            </div>
        </form>
    )
} 
export default Modal;