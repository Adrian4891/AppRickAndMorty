import style from "./searchBar.module.css"
import {useState} from "react";

export default function SearchBar(props) {

  const [inpValue, setInputValue] = useState("");
  const {onSearch} = props;

  const inputChange=(e)=>{ 
     setInputValue(e.target.value);
   }
   const sumbmitValue = (event) =>{
      event.preventDefault();
      onSearch(inpValue);
      setInputValue("");
   }

   return (
      <form className={style.searchaBar} onSubmit={sumbmitValue}>
         <input 
         id="inp"
         type='search' 
         placeholder="Busca por nombre"
         className={style.inpSearch} 
         onChange={inputChange} value={inpValue}
         />
         <button>Buscar</button>
      </form>
   );
}
