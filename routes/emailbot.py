from email import encoders
from email.mime.base import MIMEBase
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import os
from jwt import algorithms
from models.users_models import User
from flask import request, jsonify
import smtplib, time, random
from itsdangerous import URLSafeTimedSerializer
from datetime import datetime, timedelta
# from __main__ import app, db, session
from __main__ import app, db
# from routes.login_routes import Login_Routes
import jwt
class Email_Routes:
    def WelcomeEmail(self, email, name, extended=False):
        msg = MIMEMultipart()
        with open("assets/templates/index.html", "r") as file:
            html_content = file.read()
        
        content = "Hey {}. It's great to have you on board. Welcome to Shopify - E-Commerce Platform - the best bank to open your account. We hope you have a great time here.".format(name)
        msg['Subject'] = 'Shopify - E-Commerce Platform'
        msg['From'] = "jinay.c.kothari@gmail.com"
        msg['To'] = email
        msg.attach(MIMEText(content,'plain'))
        # msg.attach(MIMEText(str(time.strftime("%H:%M:%S")),'plain'))
        # print("server yet to start")
        server = smtplib.SMTP("smtp.gmail.com", 587)
        # print("Server Started")
        server.ehlo()
        # print("ehlo")
        server.starttls()
        # print("tls started")
        server.ehlo()
        # print("ehlo")
        server.login(os.environ.get("MAIL_USER"), os.environ.get('NEW_SMTP_MAIL_PASSWORD'))
        # print("logged in")
        server.send_message(msg)
        # print("email sent")
        server.quit()

        return jsonify({'message': "Email Sent Successfully."}), 200
    def SendOTP(self, user_id, token, extended=False):
        # print("user_id",user_id)
        # print("token",token)
        if session.get('login') == True:
        # print(session['user-id'])
        # print(Login_Routes().Login()[0].__dict__)
        # print("USER-ID",session['user-id'])
        # print("user_id",session['user_id'])
            try:
                pass
            # print("NONE")
            # print(jwt.decode(token,app.config['SECRET_KEY'],algorithms=["HS256"]))
            # print(jwt.decode(token,app.config['SECRET_KEY'],algorithms=["HS256"]))
            except:
                return jsonify({"message":"Invalid JWT Token!"}), 403
            emails = []
            if (request.method == 'GET' or request.method == 'POST') and user_id != None:
                user = User.query.get_or_404(user_id)
                emails.append(user.email)
            temp = random.randint(000000,999999)
            msg = MIMEMultipart()
            content = "Your otp for AAPKI APNA BANK Login is {}. Please don't share it with anyone.".format(temp)
            msg['Subject'] = 'AAB - AAPKI APNA BANK'
            msg['From'] = "jinay.c.kothari@gmail.com"
            # mails = ['jinay.c.kothari@gmail.com']
            msg['To'] = emails[0]
            # msg['cc'] = 'jinaykothari90@gmail.com'
            # msg['bcc'] = "jinay.c.kothari@gmail.com"
            msg.attach(MIMEText(content,'plain'))
            # filename = "ST Certificate and Index.pdf"
            # attachment = open("/Users/jinay/Downloads/ST Certificate and Index.pdf", "rb")
            # part = MIMEBase('application', 'octet-stream')
            # part.set_payload((attachment).read())
            # encoders.encode_base64(part)
            # part.add_header('Content-Disposition', "attachment; filename= %s" % filename)
            # msg.attach(part)
            msg.attach(MIMEText(str(time.strftime("%H:%M:%S")),'plain'))
            session['otp'] = temp
            session['user_id'] = user_id
            session['otp_time'] = datetime.now().minute + 5
            # print("server yet to start")
            server = smtplib.SMTP("smtp.gmail.com", 587)
            # print("Server Started")
            server.ehlo()
            # print("ehlo")
            server.starttls()
            # print("tls started")
            server.ehlo()
            # print(os.environ.get('NEW_SMTP_MAIL_PASSWORD'))
            server.login(os.environ.get("MAIL_USER"), os.environ.get('NEW_SMTP_MAIL_PASSWORD'))
            # print("logged in")
            server.send_message(msg)
            # print("email sent")
            server.quit()
            return jsonify({'message': "OTP Sent Successfully."}), 200
        else:
            return jsonify({'message': "Please Login before sending OTP."}), 200

    def VerifyOTP(self, extended=False):
        if request.method == 'POST':
            otp = request.get_json()['otp']
            print(session['otp'])
            # print(otp)
            # print(session['otp'])
            # print(session)
            # print(session['otp_time'])
            # print(datetime.now().minute)
            # print(datetime.now().minute)
            if session['otp'] == otp:
                return jsonify({'message': "OTP Verified Successfully. ",'id':session.get('user-id')}), 200
            else:
                return jsonify({'message': "OTP Verification Failed "}), 400

#             # -------------------------------------------------------- END OF THE PROGRAM --------------------------------------------------
