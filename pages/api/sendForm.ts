// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message } = req.body

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASS,
    },
  })

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: 'tangierguidedtour@gmail.com',
      subject: `Email from Tangier Guided Tour`,
      html: `<p>You have a new contact form submission</p>
      <p><strong>Name: </strong> ${name} </p>
      <p><strong>Email: </strong> ${email} </p>
      <p><strong>Message: </strong> ${message} </p><br>`,
    })

    console.log('Message Sent')
  } catch (err) {
    console.log(err)
  }

  res.status(200).json(req.body)
}
