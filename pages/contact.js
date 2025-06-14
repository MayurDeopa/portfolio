import { useState } from "react";
import styles from '../styles/Contact.module.css'
import MiniSpinner from "../components/MiniSpinner"
import { postData } from "../lib/postUserDetails";

const Contact =()=>{
    const [isLoading , setIsLoading]  = useState(false)
    const [contactInfo, setContactInfo] = useState({
        name:"",
        email:"",
        message:""
    })
    const [isSubmitted,setIsSubmitted] = useState(false)
    const [submitMessage, setSubmitMessage] = useState("")
    const submit =async(e)=>{
        e.preventDefault()
        setIsSubmitted(false)
        setIsLoading(true)
        const res = await postData(contactInfo)
        setSubmitMessage(res.message)
        setIsLoading(false)
        setIsSubmitted(true)
    }
    return (
        <div className="page">
            <div className={styles.contact_page}>
                <form className={styles.form} style={{animation:"riseFadeIn 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) forwards"}} >
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
            {isSubmitted
            ?
            <div className={styles.submitted}>
                {submitMessage}
            </div>
            :
            ""}
        </div>
    )
}

export default Contact;