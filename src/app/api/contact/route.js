import { NextResponse } from 'next/server';
import got from 'got';

export async function POST(req) {
  try {
    // Parse the incoming request body
    const body = await req.json();

    const data = await got
      .post('https://api.sendinblue.com/v3/contacts', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'api-key': process.env.SENDINBLUE_KEY
        },
        json: body
      })
      .json();

    // Return the response data
    return NextResponse.json(data);
  } catch (error) {
    // Extract error message if available
    const errorRes = error.response
      ? JSON.parse(error.response.body)
      : { message: 'Something Went Wrong' };
    return NextResponse.json({ message: errorRes.message, code: 400 }, { status: 400 });
  }
}
