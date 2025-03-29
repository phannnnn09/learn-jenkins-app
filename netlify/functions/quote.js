// netlify/functions/quote.js

exports.handler = async function(event, context) {
    return {
      statusCode: 200,
      body: JSON.stringify({ quote: "Jenkins is deploying me!" })
    };
  };
  