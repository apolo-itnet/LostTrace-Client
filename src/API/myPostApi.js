export const myPostPromise = async (email, status = "active") => {
  const res = await fetch(`http://localhost:5000/posts?email=${email}&status=${status}`);
  const data = await res.json();
  return data; 
};

