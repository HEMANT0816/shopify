import uuid, bcrypt

print(uuid.uuid4().hex)

# text = "password"
# hashed = bcrypt.hashpw(text.encode(), salt = bcrypt.gensalt())
# print(hashed.decode())
# text2 = "password2"

# print(bcrypt.checkpw(text.encode(), hashed.encode()))

# password=bcrypt.hashpw(request.get_json()['password'].encode(), salt = bcrypt.gensalt()),
