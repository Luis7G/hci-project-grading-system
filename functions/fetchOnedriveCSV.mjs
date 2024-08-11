import fetch from 'node-fetch';

export async function handler(event, context) {
  const url = "https://epnecuador-my.sharepoint.com/:u:/g/personal/luis_guingla_epn_edu_ec/EUzQ3RckYxVEu0LzQn3KRA0B_5gmJYyKUxUbXDMT9kr6gw?e=07doJG&download=1";
  try {
    const response = await fetch(url);
    const contentType = response.headers.get("content-type");
    console.log("Content Type:", contentType);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    if (contentType && contentType.includes("text/csv")) {
      const data = await response.text();
      return {
        statusCode: 200,
        body: data
      };
    } else {
      const errorData = await response.text();
      console.error("Received HTML instead of CSV:", errorData);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to fetch CSV, received HTML instead" })
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}
