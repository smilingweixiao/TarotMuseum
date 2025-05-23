import axios from 'axios'

async function getImageBase64(path: string): Promise<string> {
  const response = await fetch(path)
  const blob = await response.blob()

  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })
}

export async function sendToGPT(message: string, imagePath: string) {
  const base64Image = await getImageBase64(imagePath)

  const response = await axios.post('http://127.0.0.1:5000/send-to-gpt', {
    message: message,
    imageBase64: base64Image,
  })

  return response.data.ai_ans
}
