import next from 'next'
import { createServer } from './http-server'

const port = parseInt(process.env.PORT ?? '5000', 10)
const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(async () => {
  const server = await createServer(handle)
  server.listen(port)

  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? 'development' : 'production'
    }`
  )
})
