from flask import request, jsonify
from models.subcategories_models import Subcategory
from __main__ import app, db
import uuid, datetime
class Subcategory_Routes:
	def subcategories(self):
		if request.method == 'GET':
			subcategories = Subcategory.query.all()
			if not subcategories:
				return jsonify({'message': "No subcategories found"}), 404

			response = []
			for subcategory in subcategories:
				response.append({
					"id": subcategory.id,
					"uuid": subcategory.uuid,
					"name": subcategory.name,
					"category_id": subcategory.category_id,
					"created": subcategory.created
					})
			return jsonify(response)

		if request.method == 'POST':
			new_subcategory = Subcategory	(
				uuid=uuid.uuid4().hex,
				name=request.get_json()['name'],
				category_id=request.get_json()['category_id'],
				created=datetime.datetime.now().strftime("%A, %d %B %Y %I:%M %p")
				)
			db.session.add(new_subcategory)
			db.session.commit()
			return jsonify({'message': "subcategory added successfully."}), 200
	def subcategory(self, subcategory_id, extended=False):
		if request.method == 'GET':
			subcategory = Subcategory.query.get_or_404(subcategory_id)
			response = {}
			response['id']= subcategory.id
			response['uuid']= subcategory.uuid
			response['name']= subcategory.name
			response['category_id']= subcategory.category_id
			response['created']= subcategory.created
			if extended:
				response["categories"] = []
				response["categories"].append({
					'id': subcategory.categories.id,
					'uuid': subcategory.categories.uuid,
					'name': subcategory.categories.name,
					'created': subcategory.categories.created
					})

			return jsonify(response)

		if request.method == 'PATCH':
			subcategory = Subcategory.query.get_or_404(subcategory_id)
			if 'uuid' in request.get_json():
				subcategory.uuid = request.get_json()['uuid']
			if 'name' in request.get_json():
				subcategory.name = request.get_json()['name']
			if 'category_id' in request.get_json():
				subcategory.category_id = request.get_json()['category_id']
			if 'created' in request.get_json():
				subcategory.created = request.get_json()['created']
			db.session.commit()

			return jsonify({'message': "subcategory updated successfully."}), 200

		if request.method=='DELETE':
				subcategory = Subcategory.query.get_or_404(subcategory_id)
				db.session.delete(subcategory)
				db.session.commit()
				return jsonify({'message': "subcategory deleted successfully."}), 200
