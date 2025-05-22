'use server'
import OpenAI from 'openai'
const apiKey = import.meta.env.VITE_OPENAI_API_KEY

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
  const openai = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true })

  const base64Image = await getImageBase64(imagePath)

  const response = await openai.chat.completions.create({
    model: 'gpt-4.1-nano',
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: `請你仔細地描繪這張塔羅牌的圖畫內容，並且根據塔羅牌的圖案意象，與正逆位各自的含意，逐步回答以下問題: ${message}。此外，不需要要求使用者給予更詳細的問題或是背景資訊。`,
          },
          {
            type: 'image_url',
            image_url: {
              url: `${base64Image}`,
            },
          },
        ],
      },
    ],
  })

  console.log(response.choices[0].message.content)
  return response.choices[0].message.content
}
