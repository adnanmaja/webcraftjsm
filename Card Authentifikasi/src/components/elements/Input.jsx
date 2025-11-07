import React from "react";
const Input = (props) => {
    const { type, placeholder, name } = props;
    return (
        <input 
            {...props}
            className="text-sm border rounded-full w-full py-2 px-3 text-slate-700" 
            
        />
    )
}

export default Input;