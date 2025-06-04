from flask import request, jsonify
from models.wishlists_models import Wishlist
from __main__ import app, db
import uuid, datetime
class Wishlist_Routes:
	def wishlists(self):
		if request.method == 'GET':
			wishlists = Wishlist.query.all()
			if not wishlists:
				return jsonify({'message': "No wishlists found"}), 404

			response = []
			for wishlist in wishlists:
				response.append({
					"id": wishlist.id,
					"uuid": wishlist.uuid,
					"user_id": wishlist.user_id,
					"product_id": wishlist.product_id,
					"flag": wishlist.flag,
					"created": wishlist.created
					})
			return jsonify(response)

		if request.method == 'POST':
			new_wishlist = Wishlist	(
				uuid=uuid.uuid4().hex,
				user_id=request.get_json()['user_id'],
				product_id=request.get_json()['product_id'],
				flag=0,
				created=datetime.datetime.now().strftime("%A, %d %B %Y %I:%M %p")
				)
			db.session.add(new_wishlist)
			db.session.commit()
			return jsonify({'message': "wishlist added successfully."}), 200
	def wishlist(self, wishlist_id, extended=False):
		if request.method == 'GET':
			wishlist = Wishlist.query.get_or_404(wishlist_id)
			response = {}
			response['id']= wishlist.id
			response['uuid']= wishlist.uuid
			response['user_id']= wishlist.user_id
			response['product_id']= wishlist.product_id
			response['flag']= wishlist.flag
			response['created']= wishlist.created
			if extended:
				response["users"] = []
				response["users"].append({
					'id': wishlist.users.id,
					'uuid': wishlist.users.uuid,
					'firstname': wishlist.users.firstname,
					'lastname': wishlist.users.lastname,
					'avatar': wishlist.users.avatar,
					'email': wishlist.users.email,
					'password': wishlist.users.password,
					'address': wishlist.users.address,
					'created': wishlist.users.created,
					'deleted': wishlist.users.deleted,
					'flag': wishlist.users.flag
					})

			if extended:
				response["products"] = []
				response["products"].append({
					'id': wishlist.products.id,
					'uuid': wishlist.products.uuid,
					'title': wishlist.products.title,
					'description': wishlist.products.description,
					'price': wishlist.products.price,
					'quantity': wishlist.products.quantity,
					'size': wishlist.products.size,
					'category_id': wishlist.products.category_id,
					'created': wishlist.products.created,
					'deleted': wishlist.products.deleted
					})

			if extended:
				response["category"] = []
				response["category"].append({
					'id': wishlist.products.categories.id,
					'uuid': wishlist.products.categories.uuid,
					'name': wishlist.products.categories.name,
					'created': wishlist.products.categories.created
					})

			return jsonify(response)

		if request.method == 'PATCH':
			wishlist = Wishlist.query.get_or_404(wishlist_id)
			if 'uuid' in request.get_json():
				wishlist.uuid = request.get_json()['uuid']
			if 'user_id' in request.get_json():
				wishlist.user_id = request.get_json()['user_id']
			if 'product_id' in request.get_json():
				wishlist.product_id = request.get_json()['product_id']
			if 'flag' in request.get_json():
				wishlist.flag = request.get_json()['flag']
			if 'created' in request.get_json():
				wishlist.created = request.get_json()['created']
			db.session.commit()

			return jsonify({'message': "wishlist updated successfully."}), 200

		if request.method=='DELETE':
				wishlist = Wishlist.query.get_or_404(wishlist_id)
				db.session.delete(wishlist)
				db.session.commit()
				return jsonify({'message': "wishlist deleted successfully."}), 200
