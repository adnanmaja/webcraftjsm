import InputForm from "../elements/Input";
import Button from "../elements/Button";


const FormLogin = () => {
    return (
         <form action = "">
          <InputForm
            label = "Email"
            type = "email"
            placeholder = "example@gmail.com"
            name = "email"
          />

          <InputForm
            label = "Password"
            type = "password"
            placeholder = "******"
            name = "password"
          />
          
          <Button className="bg-orange-500 w-full">Login</Button>
        </form>
    )
}

export default FormLogin;