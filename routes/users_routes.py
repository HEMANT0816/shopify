from flask import request, jsonify
from models.users_models import User
from __main__ import app, db
import uuid, datetime, bcrypt
class User_Routes:
	def users(self):
		if request.method == 'GET':
			users = User.query.all()
			if not users:
				return jsonify({'message': "No users found"}), 404

			response = []
			for user in users:
				response.append({
					"id": user.id,
					"uuid": user.uuid,
					"firstname": user.firstname,
					"lastname": user.lastname,
					"avatar": user.avatar,
					"email": user.email,
					"password": user.password,
					"address": user.address,
					"created": user.created,
					"deleted": user.deleted,
					"flag": user.flag
					})
			return jsonify(response)

		if request.method == 'POST':
			users = User.query.filter_by(email=request.get_json()['email']).first()
			if not users:
				new_user = User	(
					uuid=uuid.uuid4().hex,
					firstname=request.get_json()['firstname'],
					lastname=request.get_json()['lastname'],
					avatar=request.get_json()['avatar'],
					email=request.get_json()['email'],
					password=bcrypt.hashpw(request.get_json()['password'].encode(), bcrypt.gensalt()).decode('utf-8'),
					address=request.get_json()['address'],
					created=datetime.datetime.now().strftime("%A, %d %B %Y %I:%M %p"),
					deleted=0,
					flag=0
				)
				db.session.add(new_user)
				db.session.commit()
				return jsonify({'message': "user added successfully."}), 200
			else:
				return jsonify({'message': "user already exists."}), 400
	def user(self, user_id, extended=False):
		if request.method == 'GET':
			user = User.query.get_or_404(user_id)
			response = {}
			response["id"] = user.id
			response["uuid"] = user.uuid
			response["firstname"] = user.firstname
			response["lastname"] = user.lastname
			response["avatar"] = user.avatar
			response["email"] = user.email
			response["password"] = user.password
			response["address"] = user.address
			response["created"] = user.created
			response["deleted"] = user.deleted
			response["flag"] = user.flag
			if extended:
				response["reviews"] = []
				for review in user.reviews:
					response["reviews"].append({
						'id': review.id,
						'uuid': review.uuid,
						'review': review.review,
						'user_id': review.user_id,
						'stars': review.stars,
						'created': review.created
						})

			if extended:
				response["wishlists"] = []
				for wishlist in user.wishlists:
					response["wishlists"].append({
						'id': wishlist.id,
						'uuid': wishlist.uuid,
						'user_id': wishlist.user_id,
						'product_id': wishlist.product_id,
						'flag': wishlist.flag,
						'created': wishlist.created
						})

			return jsonify(response)

		if request.method == 'PATCH':
			user = User.query.get_or_404(user_id)
			if 'uuid' in request.get_json():
				user.uuid = request.get_json()['uuid']
			if 'firstname' in request.get_json():
				user.firstname = request.get_json()['firstname']
			if 'lastname' in request.get_json():
				user.lastname = request.get_json()['lastname']
			if 'avatar' in request.get_json():
				user.avatar = request.get_json()['avatar']
			if 'email' in request.get_json():
				user.email = request.get_json()['email']
			if 'password' in request.get_json():
				user.password = request.get_json()['password']
			if 'address' in request.get_json():
				user.address = request.get_json()['address']
			if 'created' in request.get_json():
				user.created = request.get_json()['created']
			if 'deleted' in request.get_json():
				user.deleted = request.get_json()['deleted']
			if 'flag' in request.get_json():
				user.flag = request.get_json()['flag']
			db.session.commit()

			return jsonify({'message': "user updated successfully."}), 200

		if request.method=='DELETE':
				user = User.query.get_or_404(user_id)
				db.session.delete(user)
				db.session.commit()
				return jsonify({'message': "user deleted successfully."}), 200
