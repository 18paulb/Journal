import { NextRequest, NextResponse } from 'next/server'

import axios from "axios";

export const GET = async (request) => {
    const searchParams = request.nextUrl.searchParams
    const date = searchParams.get('date')

    try {
        // Wait for the response to be received
        const response = await axios.get(
            `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${process.env.NASA_API_KEY}`
        );

        // Return the response as a JSON string for the Response object
        return new NextResponse(JSON.stringify(response.data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
