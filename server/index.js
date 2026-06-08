import express from 'express'
import cors from 'cors'
import Anthropic from '@anthropic-ai/sdk'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
app.use(cors())
app.use(express.json())

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

// Proxy endpoint — frontend calls this instead of Anthropic directly
app.post('/api/claude', async (req, res) => {
    try {
        const { messages, max_tokens = 1000 } = req.body
        const response = await client.messages.create({
            model: 'claude-sonnet-4-20250514',
            max_tokens,
            messages
        })
        res.json(response)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: err.message })
    }
})

// Serve built frontend in production
app.use(express.static(path.join(__dirname, '../client/dist')))
app.get('*', (_, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))