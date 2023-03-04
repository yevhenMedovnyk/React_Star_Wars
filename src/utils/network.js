export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.log(res.status);
      return false;
    }
    return await res.json();
  } catch (error) {
    console.error("fetch error.", error.message);
    return false;
  }
};

export const makeConcurrentRequest = async (url) => {
  const res = await Promise.all(
    url.map((res) => {
      return fetch(res).then((res) => res.json());
    }),
  );
  return res;
};
