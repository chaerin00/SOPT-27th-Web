import React from "react";

function SearchInput({onSubmit}){
    const [input,setInput] = React.useState("");
    const inputRef = React.useRef();

    const handleChange=(e)=>{
        setInput(e.target.value);
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        onSubmit(input);
        setInput("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Github 프로필"
                value={input}
                onChange={handleChange}
                ref={inputRef}/>
        </form>
    );
}

export default SearchInput;