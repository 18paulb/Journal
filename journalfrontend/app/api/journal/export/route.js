export async function POST(request) {
  // Get the request body
  const body = await request.json();

  // Process the data
  // For example:
  console.log('Received data:', body);

  // Return a response
  return Response.json({
    message: 'Data received successfully',
    data: body,
  });
}
