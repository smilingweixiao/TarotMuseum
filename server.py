import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI


client = OpenAI()

app = Flask(__name__)
CORS(app) 

client.api_key = os.getenv("OPENAI_API_KEY")


@app.route('/send-to-gpt', methods=['POST'])
def send_to_gpt():
    data = request.get_json()
    message = data.get("message")
    image_base64 = data.get("imageBase64")

    if not message or not image_base64:
        return jsonify({"error": "Missing message or imageBase64"}), 400

    try:
        completion  = client.chat.completions.create(
            model="gpt-4.1-nano",
            messages=[
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": f"請你仔細地描繪這張塔羅牌的圖畫內容，並且根據塔羅牌的圖案意象，與正逆位各自的含意，逐步回答以下問題: {message}。此外，不需要要求使用者給予更詳細的問題或是背景資訊。"
                        },
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": image_base64
                            }
                        }
                    ]
                }
            ]
        )

        return jsonify({"ai_ans": completion.choices[0].message.content})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)
