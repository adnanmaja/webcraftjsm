import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
    const { label, name } = props;
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