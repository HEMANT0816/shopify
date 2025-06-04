from . import db
class Product(db.Model):
	__tablename__='products'
	id = db.Column(db.Integer, primary_key=True)
	uuid = db.Column(db.String(255))
	title = db.Column(db.String(255))
	description = db.Column(db.String(255))
	price = db.Column(db.Integer)
	quantity = db.Column(db.Integer)
	size = db.Column(db.Integer)
	category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))
	created = db.Column(db.String(255))
	deleted = db.Column(db.Integer)

	images = db.relationship('Image', backref = db.backref('ImagesOfProduct'), viewonly=True)
	wishlists = db.relationship('Wishlist', backref = db.backref('WishlistsOfProduct'), viewonly=True)
	categories = db.relationship('Category', backref = db.backref('CategoryOfProduct'), viewonly=True)
	def __repr__(self):
		return '<Product %r>' % self.id
