//GET ALL POST
export const getAllPosts = async () => {
  const res = await fetch("http://localhost:5000/posts")
  const data = await res.json()
  return data
}


//GET POSTS BY ID
export const getPostById = async (id) => {
  const res = await fetch(`http://localhost:5000/posts/${id}`)
  const data = await res.json()
  return data
}