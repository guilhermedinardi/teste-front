import React from 'react'
import '../styles/styleToolsDisplay.css';

const ToolsDisplay = (tools) => { 
    const toolsSearch = tools;
    //const searchBox = toolsSearch.title; 
    console.log(toolsSearch)
    return (
        <div className="displaySearch">
            {tools.map(tool => (
                  <div>
                        {tool.title} &nbsp;
                    </div>
                ))}
        </div>
    );
};
export default ToolsDisplay;