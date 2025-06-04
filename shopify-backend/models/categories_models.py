from . import db
class Category(db.Model):
	__tablename__='categories'
	id = db.Column(db.Integer, primary_key=True)
	uuid = db.Column(db.String(255))
	name = db.Column(db.String(255))
	created = db.Column(db.String(255))

	products = db.relationship('Product', backref = db.backref('ProductsOfCategory'), viewonly=True)
	subcategory = db.relationship('Subcategory', backref = db.backref('SubcategoryOfCategory'), viewonly=True)
	def __repr__(self):
		return '<Category %r>' % self.id
