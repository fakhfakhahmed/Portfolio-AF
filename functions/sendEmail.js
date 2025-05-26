// Serverless function to send emails using SendGrid
const sgMail = require('@sendgrid/mail');

exports.handler = async (event, context) => {
  // Set CORS headers for preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ message: 'Successful preflight call' })
    };
  }

  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  // Parse the body
  let data;
  try {
    data = JSON.parse(event.body);
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid request body' })
    };
  }

  // Validate required fields
  if (!data.name || !data.email || !data.message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Missing required fields' })
    };
  }

  // Set the API key
  // NOTE: In production, you should set this as an environment variable
  // process.env.SENDGRID_API_KEY in your Netlify dashboard
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || 'YOUR_SENDGRID_API_KEY');

  // Create the email message
  const msg = {
    to: 'fakhfakh.ahmeed@gmail.com', // Your email
    from: 'noreply@yourportfolio.com', // A verified sender in your SendGrid account
    subject: data.subject || 'New Message from Portfolio Contact Form',
    text: `
      Name: ${data.name}
      Email: ${data.email}
      
      Message:
      ${data.message}
    `,
    html: `
      <strong>Name:</strong> ${data.name}<br />
      <strong>Email:</strong> ${data.email}<br /><br />
      <strong>Message:</strong><br />
      ${data.message.replace(/\n/g, '<br />')}
    `
  };

  // Send the email
  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ message: 'Email sent successfully' })
    };
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Return a simplified error message to the client
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ 
        message: 'Error sending email',
        error: error.message 
      })
    };
  }
};
