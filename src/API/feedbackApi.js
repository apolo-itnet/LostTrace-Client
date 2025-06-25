//GET ALL FEEDBACK
export const getAllFeedback = async () => {
  const res = await fetch("http://localhost:5000/feedback")
  const data = await res.json()
  return data
}