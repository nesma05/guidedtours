import type { NextApiRequest, NextApiResponse } from 'next'
import { toursDets,tours } from '../../utils/constants'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ toursDets,tours })
}