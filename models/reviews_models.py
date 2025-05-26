from . import db
class Review(db.Model):
	__tablename__='reviews'
	id = db.Column(db.Integer, primary_key=True)
	uuid = db.Column(db.Integer)
	review = db.Column(db.String)
	user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
	stars = db.Column(db.Integer)
	created = db.Column(db.String(255))

	users = db.relationship('User', backref = db.backref('UserOfReview'))
	def __repr__(self):
		return '<Review %r>' % self.id
