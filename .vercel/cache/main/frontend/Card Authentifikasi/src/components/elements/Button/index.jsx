const Button = (props) => {
    const {children, className = "bg-black"} = props;
    return (
        <button
            className={`h-10 px-6 font-semibold text-white bg-orange-500 rounded-2xl hover:bg-orange-600 transition-colors ${className}`}
            type = "submit"
        
        >
            {children}
        </button>
    )
        
}

export default Button