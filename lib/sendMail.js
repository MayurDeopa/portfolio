const nodemailer = require('nodemailer')

const mailSender = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"nekolanding@gmail.com",
        pass:"cicada3301@2001"
    }
})


const send =(payload)=>{
    mailSender.sendMail({
        from:"nekolanding@gmail.com",
        to:"mayurdeopa13@gmail.com",
        subject:`New message from ${payload.name}`,
        text:`from ${payload.email},${payload.message}`
    },(err)=>{
        if(err){
            return err
        }
        else{
            return {message:payload}
        }
    })
}

module.exports = send;


