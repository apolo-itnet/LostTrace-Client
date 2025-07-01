//GET ALL POST
export const getAllPosts = async () => {
  const res = await fetch("https://lost-trace.vercel.app/posts")
  const data = await res.json()
  return data
}


//GET POSTS BY ID
export const getPostById = async (id) => {
  const res = await fetch(`https://lost-trace.vercel.app/posts/${id}`)
  const data = await res.json()
  return data
}