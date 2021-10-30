import nc from 'next-connect'
import cors from 'cors'

const handler = nc()
  .use(cors())
  .get((req, res) => {
    res.send('Hello world from GET')
  })
  .post((req, res) => {
    res.json({ hello: 'Hello, World from POST' })
  })
  .put(async (req, res) => {
    res.end('Hello, World from PUT')
  })

export default handler
