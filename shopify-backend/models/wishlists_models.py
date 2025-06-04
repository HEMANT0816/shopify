from . import db
class Wishlist(db.Model):
	__tablename__='wishlists'
	id = db.Column(db.Integer, primary_key=True)
	uuid = db.Column(db.String(255))
	user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
	product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
	flag = db.Column(db.Integer)
	created = db.Column(db.String(255))

	users = db.relationship('User', backref = db.backref('UserOfWishlist'), viewonly=True)
	products = db.relationship('Product', backref = db.backref('ProductOfWishlist'), viewonly=True)
	def __repr__(self):
		return '<Wishlist %r>' % self.id
