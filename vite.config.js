import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'

function serveVideosPlugin() {
  const videosDir = path.resolve(import.meta.dirname, 'videos')
  return {
    name: 'serve-videos',
    configureServer(server) {
      server.middlewares.use('/videos', (req, res, next) => {
        const file = path.join(videosDir, req.url)
        if (fs.existsSync(file)) {
          const stat = fs.statSync(file)
          const range = req.headers.range
          if (range) {
            const [start, end] = range.replace(/bytes=/, '').split('-').map(Number)
            const chunkEnd = end || Math.min(start + 10 ** 6, stat.size - 1)
            res.writeHead(206, {
              'Content-Range': `bytes ${start}-${chunkEnd}/${stat.size}`,
              'Accept-Ranges': 'bytes',
              'Content-Length': chunkEnd - start + 1,
              'Content-Type': 'video/mp4',
            })
            fs.createReadStream(file, { start, end: chunkEnd }).pipe(res)
          } else {
            res.writeHead(200, { 'Content-Type': 'video/mp4', 'Content-Length': stat.size })
            fs.createReadStream(file).pipe(res)
          }
        } else {
          next()
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), serveVideosPlugin()],
})
