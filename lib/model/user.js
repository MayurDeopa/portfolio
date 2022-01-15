import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  message:{
    type:String,
    required:true
  }
})
mongoose.models ={}

const userEmail =  mongoose.models.User || mongoose.model('mails', UserSchema)

module.exports = userEmail;
