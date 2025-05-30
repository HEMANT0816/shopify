from models.users_models import User
from flask import request, jsonify
import bcrypt, jwt, os, datetime
from app import app, db
from routes.emailbot import Email_Routes
class Login_Routes:
    def Login(self):
        if request.method == 'POST':
            user = User.query.filter_by(email=request.get_json()['email']).first()
            # print(user.id)
            if not user:
                return jsonify({'message': "No user found with that email"}), 404
            if bcrypt.checkpw(request.get_json()['password'].encode(), user.password.encode()):
                token = jwt.encode({"id": user.id, "iat":datetime.datetime.utcnow(),"exp":datetime.datetime.utcnow() + datetime.timedelta(minutes=10)}, os.environ.get('JWT_TOKEN'), algorithm="HS256")
                # print(jwt.decode(token,os.environ.get('JWT_TOKEN'),algorithms=["HS256"]))
                # token2 = jwt.encode({"id": user.id}, os.environ.get('JWT_TOKEN'), algorithm="HS256")
                # print(token)
                # print(token2)
                # session['user-id'] = user.id
                # session['jwt'] = jwt.encode({"id":user.id},app.config['SECRET_KEY'],algorithm="HS256")
                # session['login'] = True
                # session.modified = True
                # if jwt.decode(token2,os.environ.get('JWT_TOKEN'),algorithms=["HS256"]):
                #     print(jwt.decode(token2,os.environ.get('JWT_TOKEN'),algorithms=["HS256"], options={"verify_exp": True}))
                    # print(user.id)
                    # print(jwt.encode({"id":user.id},app.config['SECRET_KEY'],algorithm="HS256"))
                    # print(user.uuid)
                    # Email_Routes().SendOTP(session.get('user-id'),session.get('jwt'))
                return jsonify({'message': "Login successful", "id": user.id, "token": token, "login": True}), 200
                    # return jsonify({'message': "Login successful","id":user.id,"token":session['jwt'],"login":True}),200
                # else:
                #     return jsonify({"message":"JWT Invalid!"},403)
            return jsonify({'message': "Incorrect Password"}), 403
        return jsonify({'message': "Invalid request"}), 404

    def Logout(self):
        if request.method == 'POST':
            session.pop('user-id', None)
            session.pop('jwt', None)
            session.pop('user_id', None)
            session.pop('otp_time', None)
            session.pop('otp', None)
            session['login'] = False
            session.modified = True
            # print(session)
            return jsonify({'message': "Logout successful"}), 200
        return jsonify({'message': "Invalid request"}), 404
