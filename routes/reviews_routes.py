from flask import request, jsonify
from models.reviews_models import Review
from __main__ import app, db
import uuid, datetime
class Review_Routes:
	def reviews(self):
		if request.method == 'GET':
			reviews = Review.query.all()
			if not reviews:
				return jsonify({'message': "No reviews found"}), 404

			response = []
			for review in reviews:
				response.append({
					"id": review.id,
					"uuid": review.uuid,
					"review": review.review,
					"user_id": review.user_id,
					"stars": review.stars,
					"created": review.created
					})
			return jsonify(response)

		if request.method == 'POST':
			new_review = Review	(
				uuid=uuid.uuid4().hex,
				review=request.get_json()['review'],
				user_id=request.get_json()['user_id'],
				stars=request.get_json()['stars'],
				created=datetime.datetime.now().strftime("%A, %d %B %Y %I:%M %p")
				)
			db.session.add(new_review)
			db.session.commit()
			return jsonify({'message': "review added successfully."}), 200
	def review(self, review_id, extended=False):
		if request.method == 'GET':
			review = Review.query.get_or_404(review_id)
			response = {}
			response['id']= review.id
			response['uuid']= review.uuid
			response['review']= review.review
			response['user_id']= review.user_id
			response['stars']= review.stars
			response['created']= review.created
			if extended:
				response["users"] = []
				response["users"].append({
					'id': review.users.id,
					'uuid': review.users.uuid,
					'firstname': review.users.firstname,
					'lastname': review.users.lastname,
					'avatar': review.users.avatar,
					'email': review.users.email,
					'password': review.users.password,
					'address': review.users.address,
					'created': review.users.created,
					'deleted': review.users.deleted,
					'flag': review.users.flag
					})

			return jsonify(response)

		if request.method == 'PATCH':
			review = Review.query.get_or_404(review_id)
			if 'uuid' in request.get_json():
				review.uuid = request.get_json()['uuid']
			if 'review' in request.get_json():
				review.review = request.get_json()['review']
			if 'user_id' in request.get_json():
				review.user_id = request.get_json()['user_id']
			if 'stars' in request.get_json():
				review.stars = request.get_json()['stars']
			if 'created' in request.get_json():
				review.created = request.get_json()['created']
			db.session.commit()

			return jsonify({'message': "review updated successfully."}), 200

		if request.method=='DELETE':
				review = Review.query.get_or_404(review_id)
				db.session.delete(review)
				db.session.commit()
				return jsonify({'message': "review deleted successfully."}), 200
