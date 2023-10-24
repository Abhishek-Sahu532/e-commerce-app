import React, { Fragment, useState } from "react";
import "./Search.css";
import { Metadata } from "../Metadata";
import {useNavigate} from 'react-router-dom'

const Search = () => {
  const [keyword, setKeyword] = useState("");

const navigate = useNavigate()

  const searchSubmitHandler =  (e) => {
    e.preventDefault();
 
    console.log("keywordFromSearchComp", keyword)
    
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } 
    else {
      navigate("/products");
    }
  };

  return (
    <Fragment>
      <Metadata title="Search a Product" />
      <form  onSubmit={searchSubmitHandler} className="searchBox">
        <input
          type="text"
          placeholder="Search a Product"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default Search;
