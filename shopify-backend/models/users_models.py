from . import db
class User(db.Model):
	__tablename__='users'
	id = db.Column(db.Integer, primary_key=True)
	uuid = db.Column(db.String(255))
	firstname = db.Column(db.String(255))
	lastname = db.Column(db.String(255))
	avatar = db.Column(db.String(255))
	email = db.Column(db.String(255))
	password = db.Column(db.String(255))
	address = db.Column(db.String(255))
	created = db.Column(db.String(255))
	deleted = db.Column(db.Integer)
	flag = db.Column(db.Integer)

	reviews = db.relationship('Review', backref = db.backref('ReviewsOfUser'), viewonly=True)
	wishlists = db.relationship('Wishlist', backref = db.backref('WishlistsOfUser'))
	def __repr__(self):
		return '<User %r>' % self.id
