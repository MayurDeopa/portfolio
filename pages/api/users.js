import userEmail from '../../lib/model/user'
import dbConnect from '../../lib/dbConnect'

export default async function handler (req, res) {
    const { method } = req
  
    await dbConnect()
  
    switch (method) {
      case 'GET':
        try {
          const users = await userEmail.find({})
          res.status(200).json({ success: true, data: users })
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
      case 'POST':
        try {
          const user = await userEmail.create(req.body)
          res.status(201).json({ success: true, data: user, message:"you message has been sent" })
        } catch (error) {
          res.status(400).json({ success: false , error:error})
        }
        break
      default:
        res.status(400).json({ success: false })
        break
    }
  }