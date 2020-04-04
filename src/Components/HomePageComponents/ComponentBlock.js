
import "./ComponentBlock.css";
import {BrowserRouter as Router} from "react-router-dom";
import {Link} from "react-router-dom";
import React ,{ Component} from 'react';
import GeneralItem from "../../Containers/GenericComponenets/GeneralItem";
import * as itemType from "../../Constants/itemType";


  const ComponentBlock = ({details,ComponentName,description}) => {
    
    var num=0;
    let renderedName = "";
    let renderedSubname = "";
    let roundImgOrNot = false;
    
    const Results = details.map(result => {
      
      switch (details[num].type) {
        case itemType.SONG:
          roundImgOrNot=false;
          break;
  
        case itemType.ARTIST:
          roundImgOrNot=true;
          break;
  
        case itemType.ALBUM:
          roundImgOrNot=false;
          break;
  
        case itemType.PLAYLIST:
          roundImgOrNot=false;
          break;
  
        
  
        default:
          renderedName = "";
          renderedSubname = "";
          roundImgOrNot=false;
          break;
      }
      
      num++;
    
      return (
        <GeneralItem
          image={result.url}
          name={result.title}
          subname={result.subtitle}
          roundimage={roundImgOrNot}
          key={result.id}
          id={result.id}
          type={result.type}
        />
       
    )
      }
    )
    
  
    

return ( 
  <div className="component-block">
    <h1 className="header">{ComponentName}</h1>
    <p className="header-description">{description}</p>

    {Results}
   
  </div>
)
}


export default ComponentBlock;