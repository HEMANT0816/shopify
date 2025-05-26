from flask import request, jsonify
from models.colors_models import Color
from __main__ import app, db
import uuid, datetime
class Color_Routes:
	def colors(self):
		if request.method == 'GET':
			colors = Color.query.all()
			if not colors:
				return jsonify({'message': "No colors found"}), 404

			response = []
			for color in colors:
				response.append({
					"id": color.id,
					"uuid": color.uuid,
					"name": color.name,
					"created": color.created
					})
			return jsonify(response)

		if request.method == 'POST':
			new_color = Color	(
				uuid=uuid.uuid4().hex,
				name=request.get_json()['name'],
				created=datetime.datetime.now().strftime("%A, %d %B %Y %I:%M %p")
				)
			db.session.add(new_color)
			db.session.commit()
			return jsonify({'message': "color added successfully."}), 200
	def color(self, color_id, extended=False):
		if request.method == 'GET':
			color = Color.query.get_or_404(color_id)
			response = {}
			response["id"] = color.id
			response["uuid"] = color.uuid
			response["name"] = color.name,
			response["created"] = color.created
			if extended:
				response["images"] = []
				for image in color.images:
					response["images"].append({
						'id': image.id,
						'uuid': image.uuid,
						'path': image.path,
						'product_id': image.product_id,
						'color_id': image.color_id
						})

			return jsonify(response)

		if request.method == 'PATCH':
			color = Color.query.get_or_404(color_id)
			if 'uuid' in request.get_json():
				color.uuid = request.get_json()['uuid']
			if 'name' in request.get_json():
				color.name = request.get_json()['name']
			if 'created' in request.get_json():
				color.created = request.get_json()['created']
			db.session.commit()

			return jsonify({'message': "color updated successfully."}), 200

		if request.method=='DELETE':
				color = Color.query.get_or_404(color_id)
				db.session.delete(color)
				db.session.commit()
				return jsonify({'message': "color deleted successfully."}), 200
