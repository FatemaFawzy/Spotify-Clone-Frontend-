import React from "react";
import BrowseItem from "./BrowseItem";
import "./SearchContent.css";


const SearchContent = () => (

    <div className="before-typed-search">

        <h2>Your top genres</h2>

        <BrowseItem 
       header="Pop" 
       color= "rgb(143,176,147)" 
       image="https://t.scdn.co/images/d355f48a90b64c25b6e004179a596e51.jpeg"
       special="true" />


        <h2>Browse all</h2>
       <BrowseItem 
       header="Podcast" 
       color= "rgb(188,119,27)" 
       image="https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" />

       <BrowseItem 
       header="Made for you" 
       color= "rgb(123,150,162)" 
       image="https://t.scdn.co/images/68433b0ee5b5465b8e926c42b84cbcdb.jpeg" />








       
        </div>
);

export default SearchContent;