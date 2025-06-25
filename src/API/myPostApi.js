export const myPostPromise = async (email, status = "active") => {
  const url = `http://localhost:5000/posts?email=${email}&status=${status}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
