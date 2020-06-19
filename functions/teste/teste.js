const axios = require('axios');

async function getPage(){
  return axios.post('https://api.netlify.com/build_hooks/5eed171277c5fc019b2b52d3');
}

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  await getPage();
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Build Iniciada` })
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
