import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from '../utils/searchSlice'

const Head = () => {
  const [serachQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false)

  const searchCache = useSelector((store) => store.search)

  const dispatch = useDispatch()

   // applying debouncing to search here
    // make api call for every key press
    // but if diffrence bw 2 api calls is < 200ms then decline the api call


    /**
     * KeyPress - A
     * 
     * render the component
     * useEffect()
     * start timer => make api call after 200ms
     * 
     * KeyPress - AR
     * destroy the component (useEffect return method)
     * render the component
     * useEffect()
     * start timer => make api call after 200ms
     * 
     * settimeout(200) -make api call
     * 
     */

    /**
     * searchCache = {
     *      iphone : ["Iphone11", "iphone12"]
     * }
     * searchQuery = iphone
     * searchCache[serachQuery]  = ["Iphone11", "iphone12"]
     * 
     */
  useEffect(() => {
  
    const timer = setTimeout(() => {
      if(searchCache[serachQuery]) {
        setSuggestions(searchCache[serachQuery])
      } else {
        getSearchSuggestions()
      }
      
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [serachQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + serachQuery);
    const json = await data.json();
    setSuggestions(json[1])
    
    //update cache
    dispatch(cacheResults({
      [serachQuery] : json[1],
    }))
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 cursor-pointer"
          alt="menu"
          src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
        />

        <a href="/">
          <img
            className="h-10 mx-2"
            alt="icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/1024px-YouTube_Logo_%282013-2017%29.svg.png"
          />
        </a>
      </div>

      <div className="col-span-10 px-10">
        <div>
        <input
          className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          value={serachQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          onFocus={ () => setShowSuggestions(true)}
          onBlur={ () => setShowSuggestions(false)}
        />

        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>

        </div>
        { (showSuggestions && suggestions.length >=1) &&
          (
            <div className="absolute bg-white py-2 px-5 w-[31.5rem] shadow-lg rounded-lg border border-grey-100">
          <ul>
            {
            suggestions.map(suggestion => 
            <li key={suggestion} className="py-2 shadow-sm hover:bg-gray-100">🔍 {suggestion}
            </li>)
            }  
          </ul>
        </div>
          )
        }
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
        />
      </div>
    </div>
  );
};

export default Head;
