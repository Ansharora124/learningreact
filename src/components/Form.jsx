import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
export const Form =()=>{
    

const schema=yup.object().shape({
    fullName: yup.string().required("your full name is required"),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18)

});
const { register , handleSubmit,formState:{errors} } = useForm({
    resolver: yupResolver(schema),
});

     const onSubmit=(data)=>{   
console.log(data);
     };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="full name" {...register("fullName")}/>
            <p>{errors.fullName?.message}</p>
            <input type="text" placeholder="email" {...register("email")} />
            <input type="text" placeholder="age" {...register("age")} />
           
            <input type="submit" />
        </form>
    );
}