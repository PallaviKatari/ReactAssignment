import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    email:yup.string().email("Invalid email").required("Email is required"),
    password:yup.string().min(6,"Password must be atleast 6 characters").required("Password is required")
})

function ReactHookForm()
{
 
    const {register,handleSubmit,formState:{errors}}=useForm(
        {
            resolver:yupResolver(schema)
        }
    );

    const onSubmit=(data)=>console.log(data);

    return(
        <form onSubmit={handleSubmit(onSubmit)}>

            <input {...register("email")} placeholder="Email"/>
            <p>{errors.email?.message}</p>

            <input type="password" {...register("password")} placeholder="Password"/>
            <p>{errors.password?.message}</p>

            <button type="submit">Login</button>

        </form>
    )
}

export default ReactHookForm;