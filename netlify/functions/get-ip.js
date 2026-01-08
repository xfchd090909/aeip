const axios = require('axios');

exports.handler = async (event, context) => {
  // 定义 API 地址和 Token
  const API_URL = 'https://api.ipinfo.io/lite/me?token=1a1c0409a4aaca';

  try {
    const response = await axios.get(API_URL);
    
    // 返回获取到的 JSON 数据，并允许前端跨域访问（同源则无需担心）
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // 允许前端调用
      },
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "无法获取 IP 数据" }),
    };
  }
};
