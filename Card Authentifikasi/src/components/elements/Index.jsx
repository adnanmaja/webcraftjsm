import React from "react";
import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
    const { label, name, type, placeholder } = props;
    return (
        <div className="mb-5">
            <Label htmlFor={name}>{label}</Label>
            <Input 
                {...props}
            />
        </div>
    )
}   

export default InputForm;