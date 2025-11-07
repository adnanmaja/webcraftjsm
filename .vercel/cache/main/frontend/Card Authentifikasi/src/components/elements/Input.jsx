const Input = ({ type, placeholder, name, value, onChange, required }) => {
    return (
        <input 
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className="text-sm border rounded-full w-full py-2 px-3 text-slate-700" 
        />
    )
}

export default Input;