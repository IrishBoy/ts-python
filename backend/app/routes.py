from flask import Blueprint, request, jsonify
import os
import psycopg2
import requests

main = Blueprint("main", __name__)



@main.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'POST, OPTIONS, GET, PATCH, PUT, DELETE')
    return response


@main.route("/sendEmail", methods=["POST"])
def send_email():
    data = request.json
    email = data.get("email")
    print(email)
    send_to_telegram(email)
    return jsonify({"status": "Email sent to Telegram"}), 200

def send_to_telegram(email):
    bot_token = os.environ["TELEGRAM_BOT_TOKEN"]
    chat_id = os.environ["TELEGRAM_CHAT_ID"]
    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    payload = {
        "chat_id": chat_id,
        "text": f"New email submitted: {email}"
    }
    requests.post(url, json=payload)
