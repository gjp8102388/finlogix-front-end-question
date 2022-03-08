import React, {useState} from "react";
import classes from "./Login.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../actions/userAction";
import {RootState} from "../../store";
import IUserState from "../../interfaces/IUserState";
import {useHistory} from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userLogin = useSelector<RootState, IUserState>(
        (state: RootState) => state.userLogin
    )
    const {loading, error} = userLogin;
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        await dispatch(login({email, password}));
        history.push('/')
    }
    return (
        <>
            <div className={classes.container}>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <h3 style={{textAlign: 'center', fontSize: '24px'}}>Login</h3>
                    <div className={classes.formGroup}>
                        <label className={classes.label}>Email</label>
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className={classes.formControl} placeholder="Email"/>
                    </div>
                    <div className={classes.formGroup}>
                        <label className={classes.label}>Password</label>
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className={classes.formControl} placeholder="Password"/>
                    </div>
                    <button type="submit" disabled={!(email.length > 0 && password.length > 0) || loading} className={classes.button}>Submit</button>
                    {error ? <p style={{textAlign: 'center', color: "red"}}>{error.toString()}</p> : null}
                </form>
            </div>

        </>
    )
}
export default Login;
