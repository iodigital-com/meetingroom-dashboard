import { NextApiRequest, NextApiResponse } from 'next';
import axios, { Method } from 'axios';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, url, data, headers } = req.body;

  if (!url) {
    res.status(400).json({ error: 'URL is required' });
    return;
  }

  try {
    const response = await axios({
      method: method as Method,
      url: url,
      data: data,
      headers: headers,
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};

export default handler;
