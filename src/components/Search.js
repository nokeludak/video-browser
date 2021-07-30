import React, {useState} from "react"; 


const Search = ({ onSearch }) => {
const [title, setTitle] = useState("");

  const  onSearchChanged = event => {
      setTitle(event.target.value)
      
    };
   const  onSubmit = event => {
       event.preventDefault()
      onSearch(title);
      console.log(title);
     };
    
      return (
        <>
          <form onSubmit={onSubmit} className="search-form">
               <div className="ui action input">
                    <input  id="video-search"
                type="text"
                value={title}
                onChange={onSearchChanged}
                placeholder="Search..."/>
                    <button type ="submit" className="ui icon button">
                        <i aria-hidden="true" 
                        className="search icon"></i></button></div>
          </form>
        </>
      );
    }
  
  
  export default Search;