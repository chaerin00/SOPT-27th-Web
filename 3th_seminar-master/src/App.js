import {useState} from "react";
import SearchInput from "./document/SearchInput";
import SearchResult from "./document/SearchResult";
import {getUserAPI} from "./lib/api";
import './App.css';


function App() {
  const [ userState, setUserState ] = useState({
    status:"idle",
    user:null,
  });

  const getUser = async (username)=>{
    setUserState({...userState, status:"pending"});
    try {
      const data=await getUserAPI(username);
      console.log(data);
      setUserState({status:"resolved",user:data});
    } catch(error){
      setUserState({status:"rejected",user:null});
      console.error(error);
    }
  };


  return (
    <div className="search-wrapper">
      <SearchInput onSubmit={getUser}></SearchInput>
      <SearchResult a={userState}></SearchResult>
    </div>
  );
}

export default App;
