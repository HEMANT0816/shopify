from flask import request, jsonify
from models.products_models import Product
from __main__ import app, db
import uuid, datetime
class Product_Routes:
	def products(self):
		if request.method == 'GET':
			products = Product.query.all()
			if not products:
				return jsonify({'message': "No products found"}), 404

			response = []
			for product in products:
				response.append({
					"id": product.id,
					"uuid": product.uuid,
					"title": product.title,
					"description": product.description,
					"price": product.price,
					"quantity": product.quantity,
					"size": product.size,
					"category_id": product.category_id,
					"created": product.created,
					"deleted": product.deleted
					})
			return jsonify(response)

		if request.method == 'POST':
			new_product = Product	(
				uuid=uuid.uuid4().hex,
				title=request.get_json()['title'],
				description=request.get_json()['description'],
				price=request.get_json()['price'],
				quantity=request.get_json()['quantity'],
				size=request.get_json()['size'],
				category_id=request.get_json()['category_id'],
				created=datetime.datetime.now().strftime("%A, %d %B %Y %I:%M %p"),
				deleted=0
				)
			db.session.add(new_product)
			db.session.commit()
			return jsonify({'message': "product added successfully."}), 200
	def product(self, product_id, extended=False):
		if request.method == 'GET':
			product = Product.query.get_or_404(product_id)
			response = {}
			response["id"] = product.id
			response["uuid"] = product.uuid
			response["title"] = product.title
			response["description"] = product.description
			response["price"] = product.price
			response["quantity"] = product.quantity
			response["size"] = product.size
			response["category_id"] = product.category_id
			response["created"] = product.created
			response["deleted"] = product.deleted
			if extended:
				response["images"] = []
				for image in product.images:
					response["images"].append({
						'id': image.id,
						'uuid': image.uuid,
						'path': image.path,
						'product_id': image.product_id,
						'color_id': image.color_id
						})

			if extended:
				response["wishlists"] = []
				for wishlist in product.wishlists:
					response["wishlists"].append({
						'id': wishlist.id,
						'uuid': wishlist.uuid,
						'user_id': wishlist.user_id,
						'product_id': wishlist.product_id,
						'flag': wishlist.flag,
						'created': wishlist.created
						})

			if extended:
				response["categories"] = []
				response["categories"].append({
					'id': product.categories.id,
					'uuid': product.categories.uuid,
					'name': product.categories.name,
					'created': product.categories.created
					})

			return jsonify(response)

		if request.method == 'PATCH':
			product = Product.query.get_or_404(product_id)
			if 'uuid' in request.get_json():
				product.uuid = request.get_json()['uuid']
			if 'title' in request.get_json():
				product.title = request.get_json()['title']
			if 'description' in request.get_json():
				product.description = request.get_json()['description']
			if 'price' in request.get_json():
				product.price = request.get_json()['price']
			if 'quantity' in request.get_json():
				product.quantity = request.get_json()['quantity']
			if 'size' in request.get_json():
				product.size = request.get_json()['size']
			if 'category_id' in request.get_json():
				product.category_id = request.get_json()['category_id']
			if 'created' in request.get_json():
				product.created = request.get_json()['created']
			if 'deleted' in request.get_json():
				product.deleted = request.get_json()['deleted']
			db.session.commit()

			return jsonify({'message': "product updated successfully."}), 200

		if request.method=='DELETE':
				product = Product.query.get_or_404(product_id)
				db.session.delete(product)
				db.session.commit()
				return jsonify({'message': "product deleted successfully."}), 200
