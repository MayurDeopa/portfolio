import { useState } from "react";
import styles from '../styles/Contact.module.css'
import MiniSpinner from "../components/MiniSpinner"
import { postData } from "../lib/postUserDetails";
import {FaCheck} from 'react-icons/fa'
import { set } from "mongoose";

const Contact =()=>{
    const [isLoading , setIsLoading]  = useState(false)
    const [contactInfo, setContactInfo] = useState({
        name:"",
        email:"",
        message:""
    })
    const [isSubmitted,setIsSubmitted] = useState(false)
    const submit =async(e)=>{
        e.preventDefault()
        setIsSubmitted(false)
        setIsLoading(true)
        const res = await postData(contactInfo)
        setIsLoading(false)
        setIsSubmitted(true)
    }
    return (
        <div className="page">
            <div className={styles.contact_page}>
            <form className={styles.form}>
                <section className={styles.sections}>
                    <p>Name</p>
                    <input type='text' onChange={(e)=>setContactInfo({...contactInfo,name:e.target.value})} className={styles.input} required/>
                </section>
                <section className={styles.sections}>
                    <p>Email</p>
                    <input type='email' onChange={(e)=>setContactInfo({...contactInfo,email:e.target.value})} className={styles.input} required/>
                </section>
                <section className={styles.sections}>
                    <p>Message</p>
                    <textarea onChange={(e)=>setContactInfo({...contactInfo,message:e.target.value})} className={styles.message} required/>
                </section>
                {isLoading?<MiniSpinner/>:<button  className={styles.submit} onClick={(e)=>submit(e)}>Submit</button>}
            </form>
            </div>
            {isSubmitted
            ?
            <div className={styles.submitted}>
                Submitted
                <FaCheck/>
            </div>
            :
            ""}
        </div>
    )
}

export default Contact;