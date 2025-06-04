from flask import request, jsonify
from models.images_models import Image
from models.products_models import Product
from models.colors_models import Color
from __main__ import app, db
import uuid, datetime, os
import cloudinary
import cloudinary.uploader
from cloudinary.utils import cloudinary_url

# Configuration       
cloudinary.config( 
    cloud_name = "dartvbrgp", 
    api_key = "967566316529773", 
    api_secret = os.environ.get("CLOUDINARY_API_SECRET_KEY"), # Click 'View API Keys' above to copy your API secret
    secure=True
)

class Image_Routes:
	def images(self):
		if request.method == 'GET':
			images = Image.query.all()
			if not images:
				return jsonify({'message': "No images found"}), 404

			response = []
			for image in images:
				response.append({
					"id": image.id,
					"uuid": image.uuid,
					"path": image.path,
					"filename": image.filename,
					"product_id": image.product_id,
					"color_id": image.color_id,
					"created": image.created,
					"imageorder": image.imageorder,
					"deleted": image.deleted
					})
			return jsonify(response)

		if request.method == 'POST':
			# Method 1: Uploading Single file using request.files
			# file = request.files.get('file')
			# f_filename = 'assets/product_images/'+file.filename
			# file.save(f_filename)
			
			# Method 2: Uploading multiple files using request.files.getlist('files')
			# JSON data is not used for uploding files, so we can ignore it here instead we are using form data
			# all_files = []
			# data = request.form.to_dict()
			# files = request.files.getlist('files')
			# for i in files:
			# 	f_filename = 'assets/product_images/'+i.filename
			# 	i.save(f_filename)

			# 	new_image = Image	(
			# 			uuid=uuid.uuid4().hex,
			# 			path='assets/product_images/'+i.filename,
			# 			product_id=data['product_id'],
			# 			color_id=data['color_id'],
			# 			created=datetime.datetime.now().strftime("%A, %d %B %Y %I:%M %p")
			# 		)
			# 	all_files.append(new_image)

			# db.session.add_all(all_files)
			# db.session.commit()

			# Method 3: Uploading Multiple files using cloudinary

			products = Product.query.all()
			colors = Color.query.all()
			images = Image.query.all()
			files = request.files.getlist('files')
			data = request.form.to_dict()
			all_files = []
			product_ids = []
			color_ids = []
			image_color_ids = []
			count = 1

			for product in products:
				product_ids.append(product.id)
			for color in colors:
				color_ids.append(color.id)
			for image in images:
				image_color_ids.append(image.color_id)

			if int(data['product_id']) in product_ids:
				if int(data['color_id']) in color_ids:
					if int(data['color_id']) not in image_color_ids:
						for i in files:
							upload_result = cloudinary.uploader.upload(i)

							new_image = Image(
								uuid=uuid.uuid4().hex,
								path=upload_result["secure_url"],
								filename=i.filename,
								product_id=data['product_id'],
								color_id=data['color_id'],
								created=datetime.datetime.now().strftime("%A, %d %B %Y %I:%M %p"),
								imageorder=count,
								deleted=0
							)
							all_files.append(new_image)
							count = count + 1
						db.session.add_all(all_files)
						db.session.commit()
						return jsonify({'message': "Images added successfully."}), 200					

					return jsonify({'message': "Images for this product and color already exist."}),404
				else:
					return jsonify({'message': "Invalid color_id"}), 404
			else:
				return jsonify({'message': "Invalid product_id"}), 404

			# if 'product_id' not in data or data['product_id'] not in product_ids:
			# 	return jsonify({'message': "Invalid product_id"}), 400
			# if 'color_id' not in data or data['color_id'] not in color_ids:
			# 	return jsonify({'message': "Invalid color_id"}), 400
			# if not files:
			# 	return jsonify({'message': "No files found"}), 400
			# if len(files) > 10:
			# 	return jsonify({'message': "You can upload a maximum of 10 files at a time"}), 400
			# if len(files) == 0:
			# 	return jsonify({'message': "No files found"}), 400
			# if len(files) > 10:
			# 	return jsonify({'message': "You can upload a maximum of 10 files at a time"}), 400
			# if len(files) < 1:
			# 	return jsonify({'message': "You must upload at least one file"}), 400

			return jsonify({'message': "image added successfully."}), 200
	def image(self, image_id, extended=False):
		if request.method == 'GET':
			image = Image.query.get_or_404(image_id)
			response = {}
			response['id']= image.id
			response['uuid']= image.uuid
			response['path']= image.path
			response['product_id']= image.product_id
			response['color_id']= image.color_id
			if extended:
				response["products"] = []
				response["products"].append({
					'id': image.products.id,
					'uuid': image.products.uuid,
					'title': image.products.title,
					'description': image.products.description,
					'price': image.products.price,
					'quantity': image.products.quantity,
					'size': image.products.size,
					'category_id': image.products.category_id,
					'created': image.products.created,
					'deleted': image.products.deleted
					})

			if extended:
				response["category"] = []
				response["category"].append({
					'id': image.products.categories.id,
					'uuid': image.products.categories.uuid,
					'name': image.products.categories.name,
					'created': image.products.categories.created
					})

			if extended:
				response["colors"] = []
				response["colors"].append({
					'id': image.colors.id,
					'uuid': image.colors.uuid,
					'name': image.colors.name
					})

			return jsonify(response)

		if request.method == 'PATCH':
			image = Image.query.get_or_404(image_id)
			if 'uuid' in request.get_json():
				image.uuid = request.get_json()['uuid']
			if 'path' in request.get_json():
				image.path = request.get_json()['path']
			if 'product_id' in request.get_json():
				image.product_id = request.get_json()['product_id']
			if 'color_id' in request.get_json():
				image.color_id = request.get_json()['color_id']
			if 'created' in request.get_json():
				image.created = request.get_json()['created']
			db.session.commit()

			return jsonify({'message': "image updated successfully."}), 200

		if request.method=='DELETE':
				image = Image.query.get_or_404(image_id)
				db.session.delete(image)
				db.session.commit()
				return jsonify({'message': "image deleted successfully."}), 200

