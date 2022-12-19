export const baseUrl = "http://localhost:3333/";

export const getRequestOption = (method, data, token) => {
  // const body = data !== {} ?  {body: data} : null
  let options = {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: token,
    },
    // ...{...body || data},
    // body: JSON.stringify(data),
  };
  options = data ? { ...options, body: JSON.stringify(data) } : options;
  return options;
};

export const sendRequest = async (url, requestOption) => {
  try {
    const response = await fetch(url, requestOption);
    return await response.json();
  } catch (error) {
    throw Error(error);
  }
};
