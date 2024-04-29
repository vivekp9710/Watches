import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import { login } from "../../../Redux/features/auth/authSlice";
import axios from "axios";
import { useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
import { BE_URL } from "../../../config";
import { Button } from "reactstrap";

export default function LoginForm() {
     let [data,setData]= useState({
        email:"",
        password:"",
    });
    const {
        register,
        handleSubmit,
        
        formState: { errors },
    } = useForm();
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onSubmit = (data) => {
        axios.post(`${BE_URL}/user/signin`,data).then((resData)=>{
        dispatch(login(resData.data));
        console.log("-----",resData.data);
        setData({
            email:"",
            password:"",
        });
        if(resData.data.data.userType ==="admin"){

            navigate("/admin/dashboard");
        }else{
            navigate("/");
        }
    }).catch((error)=>{
        console.log("error",error);
            toast.error(error.message);
        });
        
    };
   
    return (

        <>
            <div className="d-flex justify-content-center ">

                <form style={{ backgroundColor: "lightblue" }} onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-25 gap-2 p-4 border-1 rounded-3 m-3">
                    <label htmlFor="email">Email</label>
                    <input
                    {...register("email", { required: true })} 
                    onChange={(e)=>setData({...data,email:e?.target?.value})}
                    value={data?.email}
                    className="p-1 border-0 rounded-3" 
                    id="email" 
                    placeholder="Enter your Email" />
                    <label htmlFor="password">Password</label>
                    <input 
                    {...register("password", { required: true })} 
                    onChange={(e)=>setData({...data,password:e?.target?.value})}
                    value={data?.password} 
                    className="p-1 border-0 rounded-3"
                     id="password"
                      placeholder="Enter your password" />
                    {errors.name && <span>This field is required</span>}
                    <Link to={"/signup"}>Create new account</Link>
                    {/* <input className="mt-4 p-1 border-0 rounded-3" type="submit" /> */}
                    <Button color="danger" className="w-100">submit</Button>
                    
                </form>

            </div>
            {/* <ToastContainer limit={1} /> */}
        </>
    );
}



// let arr = [
    //     {
    //         email: "vivekpatel@gmail.com",
    //         password: "9710",
    //     },
    //     {
    //         email: "akshit@gmail.com",
    //         password: "6335",
    //     },
    // ];
    
        // let matchdata = arr.find((e) => {
        //     return e.email === data.email;
        // });
        // if (matchdata) {
        //     localStorage.setItem("user", JSON.stringify(data));
        //     // alert("login succese...!");
        //     toast.warn("login succese...!", {
        //         position: "top-center",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "dark",
        //         transition: "zoom",
        //     });
        // } else {
        //     alert("user not found...!");
        // }


    //  name:  "vivek",
    //     email: "vivek123@gmail.com",
    //     number: "9879596873",
    //     password: "123456",
    //     age: 23,
    //     address: [
    //       {
    //         add:"A-10 anupam bunglows",
    //         city: "surat",
    //         state: "gujrat",
    //         pinCode: "395007",
    //       },
    //     ], 