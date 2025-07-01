//GET ALL FEEDBACK
export const getAllFeedback = async () => {
  const res = await fetch("https://lost-trace.vercel.app/feedback")
  const data = await res.json()
  return data
}