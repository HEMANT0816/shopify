from . import db
class Image(db.Model):
	__tablename__='images'
	id = db.Column(db.Integer, primary_key=True)
	uuid = db.Column(db.String(255))
	path = db.Column(db.String(255))
	product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
	color_id = db.Column(db.Integer, db.ForeignKey('colors.id'))
	created = db.Column(db.String(255))
	imageorder = db.Column(db.Integer)
	deleted = db.Column(db.Integer)
	
	products = db.relationship('Product', backref = db.backref('ProductOfImage'))
	colors = db.relationship('Color', backref = db.backref('ColorOfImage'))
	def __repr__(self):
		return '<Image %r>' % self.id
