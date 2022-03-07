import React, {useState} from "react";
import NavBar from "../../components/NavBar/NavBar";
import classes from "./Login.module.scss"
import {login} from "../../utils/apiUtils";
import {useHistory} from "react-router-dom";
import ILogin from "../../interfaces/ILogin";

const Login = () => {
    const [userData,setUserData] = useState<ILogin>({
        email:'',
        password:'',
    });
    const [warning, setWarning] = useState({
        shown: false,
        message: '',
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        const value = event.target.value;
        setUserData({
            ...userData,
            [event.target.name]: value
        })
    }
    const history = useHistory();
    const handleSubmit = async (event:any)=>{
        event.preventDefault();
        try{
            const loginResponse = await login({email:userData.email,password:userData.password});
            if(loginResponse.status === 200){
                const token = loginResponse.data.token;
                localStorage.setItem('token',token);
                history.push('/');
            }
        }catch (error:any){
            if(error.response){
                if(error.response.status !== 200){
                    setWarning({
                        shown: true,
                        message: 'Incorrect account or password',
                    });
                }
            }
        }
    }

    return(
        <>
            <NavBar/>
            <div className={classes.container}>
                <form onSubmit={handleSubmit}>
                    <h3 style={{textAlign:'center'}}>Login</h3>
                    <div className={classes.formGroup}>
                        <label>Email</label>
                        <input type="email" name="email" value={userData.email} onChange={handleChange} className={classes.formControl} placeholder="Email"/>
                    </div>
                    <div className={classes.formGroup}>
                        <label>Password</label>
                        <input type="password" name="password" value={userData.password} onChange={handleChange} className={classes.formControl} placeholder="Password"/>
                    </div>
                    <button type="submit" className={classes.button}>Submit</button>
                    {warning.shown?<p>{warning.message}</p>:null}
                </form>
            </div>

        </>
    )
}
export default Login;
