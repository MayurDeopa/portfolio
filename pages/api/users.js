import dbConnect from '../../lib/dbConnect'
import userEmails from '../../lib/models/users'


export default async function handler (req, res) {
    const { method } = req
  
    await dbConnect
  
    switch (method) {
      case 'GET':
        try {
          const users = await userEmails.find({})
          res.status(200).json({ success: true, data: users })
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
      case 'POST':
        try {
          const user = await userEmails.create(req.body)
          res.status(201).send({ success: true})
        } catch (error) {
          res.status(400).send({ success: false,err:error })
        }
        break
      default:
        res.status(400).json({ success: false })
        break
    }
  }