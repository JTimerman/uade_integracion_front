export default (url, method, body) => {
  let payload;

  if (method === "POST" || method === "PUT") {
    payload = {
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    };
  }

  return fetch(url, {
    method,
    ...payload
  }).then(response => {
    if (response.status === 401) {
      return Promise.reject();
    } else {
      return response.json();
    }
  });
};
