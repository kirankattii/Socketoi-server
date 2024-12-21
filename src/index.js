import express from 'express'
import authRouter from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './lib/db.js'
import cookieParser from 'cookie-parser'
import { app, server } from './lib/socket.js'



dotenv.config()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: "https://socketio-client-azure.vercel.app",
  credentials: true
}))

app.get('/', (req, res) => {
  res.send("Wokring")
})
app.use('/api/auth', authRouter)
app.use('/api/messages', messageRoutes)

const PORT = process.env.PORT || 5001

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
  connectDB()
})


// 