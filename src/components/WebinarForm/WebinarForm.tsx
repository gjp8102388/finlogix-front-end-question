import classes from "./WebinarForm.module.scss"
import IWebinar from "../../interfaces/IWebinar";
import React, {useState} from "react";
import Select from "react-select";
import {useDispatch} from "react-redux";
import {doFavPost} from "../../utils/apiUtils";

interface Props {
    webinarList: [],
}

interface SelectedOption {
    label: string,
    value: number
}

const isSelectOption = (v: any): v is SelectedOption => {
    if ((v as SelectedOption).value !== undefined) return v.value
    return false
}

const WebinarForm = (props: Props) => {
    const dispatch = useDispatch();
    const webinarList = props.webinarList;
    const [isSubmit, setIsSubmit] = useState(false);
    const topicList = webinarList ?
        webinarList.map((webinar: IWebinar) => {
            const container = {
                label: webinar.title,
                value: webinar.id
            };
            return container
        }) : [];
    const [selectedWebinar, setSelectedWebinar] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const submit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmit(true)
        await doFavPost(selectedWebinar);
        window.alert('Your registration is successful!');
        window.location.reload();
        return setIsSubmit(false);
    }
    // @ts-ignore
    return (
        <div className={classes.container}>
            <div className={classes.form}>
                <div className={classes.header}>
                    <div className={classes.title}>Register for a Webinar now</div>
                    <div className={classes.text}>Please fill in the form below and you will be contacted by one of our professional business experts.</div>
                </div>
                <div className={classes.formGroup}>
                    <form onSubmit={submit}>
                        <label className={classes.label}>Topic</label>
                        <Select options={topicList} name="title" onChange={(v) => {
                            if (isSelectOption(v)) {
                                setSelectedWebinar(v.value)
                            }
                        }} className={classes.select}/>
                        <label className={classes.label}>First Name</label>
                        <input value={firstName} name="firstName" type="text" className={classes.formControl}
                               onChange={(e) => setFirstName(e.target.value)}/>
                        <label className={classes.label}>Last Name</label>
                        <input value={lastName} name="lastName" type="text" className={classes.formControl}
                               onChange={(e) => setLastName(e.target.value)}/>
                        <label className={classes.label}>Email</label>
                        <input value={email} name="email" type="email" className={classes.formControl}
                               onChange={(e) => setEmail(e.target.value)}/>
                        <button type="submit" className={classes.submitButton}
                                disabled={selectedWebinar === 0 || firstName.length === 0 || lastName.length === 0 || email.length === 0 || isSubmit}>Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default WebinarForm
