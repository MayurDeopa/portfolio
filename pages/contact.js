import { useState } from "react";
import styles from '../styles/Contact.module.css'
import { postData } from "./lib/postUserDetails";
import MiniSpinner from "../components/MiniSpinner"

const Contact =()=>{
    const [isLoading , setIsLoading]  = useState(false)
    const [contactInfo, setContactInfo] = useState({
        name:"",
        email:"",
        message:""
    })
    const submit =async(e)=>{
        setIsLoading(true)
        e.preventDefault()
        const res = await postData(contactInfo)
        setIsLoading(false)
        console.log(res)
    }
    return (
        <div className="page">
            <form className={styles.form}>
                <section className={styles.sections}>
                    <p>Name</p>
                    <input type='text' onChange={(e)=>setContactInfo({...contactInfo,name:e.target.value})} className={styles.input}/>
                </section>
                <section className={styles.sections}>
                    <p>Email</p>
                    <input type='email' onChange={(e)=>setContactInfo({...contactInfo,email:e.target.value})} className={styles.input}/>
                </section>
                <section className={styles.sections}>
                    <p>Message</p>
                    <textarea onChange={(e)=>setContactInfo({...contactInfo,message:e.target.value})} className={styles.message}/>
                </section>
                {isLoading?<MiniSpinner/>:<button  className={styles.submit} onClick={(e)=>submit(e)}>Submit</button>}
            </form>
        </div>
    )
}

export default Contact;