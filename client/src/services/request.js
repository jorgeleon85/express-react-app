const request = async (url, config, data) => {
  const response = await fetch(url, {
    method: config.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw Error(`Error: ${response.status}: ${response.statusText}`);
  }
  return response.json();
};

export default request;
