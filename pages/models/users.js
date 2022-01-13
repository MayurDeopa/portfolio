import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    message:{
        type:String
    }
})

mongoose.models = {};

const userEmails =mongoose.model.mails || mongoose.model('mails',UserSchema)

module.exports = userEmails;