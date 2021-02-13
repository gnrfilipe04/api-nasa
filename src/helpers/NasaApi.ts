export async function fetchAllImages(start_date) {
  const token = process.env.NEXT_PUBLIC_NASA_TOKEN
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?start_date=${start_date}&api_key=${token}`
  )
  return response.json()
}
