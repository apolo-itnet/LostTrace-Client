export const myPostPromise  = async (email) => {
  const res = await fetch(`http://localhost:5000/posts?email=${email}`);
  const data = await res.json();
  console.log("API Response", data);
  return data; 

};