from flask import request, jsonify
from models.categories_models import Category
from __main__ import app, db
class Category_Routes:
	def categories(self):
		if request.method == 'GET':
			categories = Category.query.all()
			if not categories:
				return jsonify({'message': "No categories found"}), 404

			response = []
			for category in categories:
				response.append({
					"id": category.id,
					"uuid": category.uuid,
					"name": category.name,
					"created": category.created
					})
			return jsonify(response)

		if request.method == 'POST':
			new_category = Category	(
				uuid=request.get_json()['uuid'],
				name=request.get_json()['name'],
				created=request.get_json()['created']
				)
			db.session.add(new_category)
			db.session.commit()
			return jsonify({'message': "category added successfully."}), 200
	def category(self, category_id, extended=False):
		if request.method == 'GET':
			category = Category.query.get_or_404(category_id)
			response = {}
			response["id"] = category.id
			response["uuid"] = category.uuid
			response["name"] = category.name
			response["created"] = category.created
			if extended:
				response["products"] = []
				for product in category.products:
					response["products"].append({
						'id': product.id,
						'uuid': product.uuid,
						'title': product.title,
						'description': product.description,
						'price': product.price,
						'quantity': product.quantity,
						'size': product.size,
						'category_id': product.category_id,
						'created': product.created,
						'deleted': product.deleted
						})

			if extended:
				response["subcategories"] = []
				for subcategory in category.subcategories:
					response["subcategories"].append({
						'id': subcategory.id,
						'uuid': subcategory.uuid,
						'name': subcategory.name,
						'category_id': subcategory.category_id,
						'created': subcategory.created
						})

			return jsonify(response)

		if request.method == 'PATCH':
			category = Category.query.get_or_404(category_id)
			if 'uuid' in request.get_json():
				category.uuid = request.get_json()['uuid']
			if 'name' in request.get_json():
				category.name = request.get_json()['name']
			if 'created' in request.get_json():
				category.created = request.get_json()['created']
			db.session.commit()

			return jsonify({'message': "category updated successfully."}), 200

		if request.method=='DELETE':
				category = Category.query.get_or_404(category_id)
				db.session.delete(category)
				db.session.commit()
				return jsonify({'message': "category deleted successfully."}), 200
