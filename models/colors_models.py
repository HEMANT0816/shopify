from . import db
class Color(db.Model):
	__tablename__='colors'
	id = db.Column(db.Integer, primary_key=True)
	uuid = db.Column(db.String(255))
	name = db.Column(db.String(255))
	created = db.Column(db.String(255))
	
	images = db.relationship('Image', backref = db.backref('ImagesOfColor'), viewonly=True)
	def __repr__(self):
		return '<Color %r>' % self.id
