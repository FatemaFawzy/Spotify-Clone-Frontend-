import React from "react";
import ItemSearched from "./ItemSearched";
import "./AllSearchResults.css";


const AllSearchResults = ({results,type,searchfieldvalue}) => {

  const roundImgOrNot=type==="Artists"?true:false;
  
 const Results =results.map( result => (
   <ItemSearched
        image={result.url}
        name={result.title}
        subname={result.title}
        roundimage={roundImgOrNot}
        key={result.id}
        />)

        // <ItemSearched
        // image={result.image.url}
        // name={result.title}
        // subname={result.title}
        // roundimage={roundImgOrNot}
        // key={result.id}
        // />)
 )


  return(

    <div className="result-typed-search">
      <h2>Showing {type} for "{searchfieldvalue}"</h2>
      {Results}
    </div>
  )



}





export default AllSearchResults;