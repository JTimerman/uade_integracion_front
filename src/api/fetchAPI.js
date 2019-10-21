export default (url, method, body) => {
  if (method == "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};