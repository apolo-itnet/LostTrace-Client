export const myPostPromise = async (email, status = "active") => {
  const url = `https://lost-trace.vercel.app/posts?email=${email}&status=${status}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
