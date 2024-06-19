import { ProjectService } from "../../lib/services"

export default async function handler (req, res) {
    const { method } = req
  
    switch (method) {
      case 'GET':
        try {
          const data = await ProjectService.getProject()
          res.status(200).json({ success: true, data: data })
        } catch (error) {
          res.status(400).json({ success: false,data:error })
        }
        break
     
      default:
        res.status(400).json({ success: false })
        break
    }
  }