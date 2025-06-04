from . import db
class Subcategory(db.Model):
	__tablename__='subcategories'
	id = db.Column(db.Integer, primary_key=True)
	uuid = db.Column(db.String(255))
	name = db.Column(db.String(255))
	category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))
	created = db.Column(db.String(255))

	categories = db.relationship('Category', backref = db.backref('CategoryOfSubcategory'), viewonly=True)
	def __repr__(self):
		return '<Subcategory %r>' % self.id
