from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__, static_folder='assets', static_url_path='/assets/product_images')
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:Root-123@localhost/e-commerce'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

@app.route("/")
def home():
	return {"success":"true"}

@app.route("/categories", methods = ['GET', 'POST'])
def Categories_App():
		from routes.categories_routes import Category_Routes
		return Category_Routes().categories()

@app.route("/colors", methods = ['GET', 'POST'])
def Colors_App():
		from routes.colors_routes import Color_Routes
		return Color_Routes().colors()

@app.route("/images", methods = ['GET', 'POST'])
def Images_App():
		from routes.images_routes import Image_Routes
		return Image_Routes().images()

@app.route("/products", methods = ['GET', 'POST'])
def Products_App():
		from routes.products_routes import Product_Routes
		return Product_Routes().products()

@app.route("/reviews", methods = ['GET', 'POST'])
def Reviews_App():
		from routes.reviews_routes import Review_Routes
		return Review_Routes().reviews()

@app.route("/subcategories", methods = ['GET', 'POST'])
def Subcategories_App():
		from routes.subcategories_routes import Subcategory_Routes
		return Subcategory_Routes().subcategories()

@app.route("/users", methods = ['GET', 'POST'])
def Users_App():
		from routes.users_routes import User_Routes
		return User_Routes().users()

@app.route("/wishlists", methods = ['GET', 'POST'])
def Wishlists_App():
		from routes.wishlists_routes import Wishlist_Routes
		return Wishlist_Routes().wishlists()

@app.route("/categories/<int:category_id>", methods = ['GET', 'PATCH', 'DELETE'])
def categories_App(category_id):
		from routes.categories_routes import Category_Routes
		return Category_Routes().category(category_id, True if request.args.get('extended') else False)

@app.route("/colors/<int:color_id>", methods = ['GET', 'PATCH', 'DELETE'])
def colors_App(color_id):
		from routes.colors_routes import Color_Routes
		return Color_Routes().color(color_id, True if request.args.get('extended') else False)

@app.route("/images/<int:image_id>", methods = ['GET', 'PATCH', 'DELETE'])
def images_App(image_id):
		from routes.images_routes import Image_Routes
		return Image_Routes().image(image_id, True if request.args.get('extended') else False)

@app.route("/products/<int:product_id>", methods = ['GET', 'PATCH', 'DELETE'])
def products_App(product_id):
		from routes.products_routes import Product_Routes
		return Product_Routes().product(product_id, True if request.args.get('extended') else False)

@app.route("/reviews/<int:review_id>", methods = ['GET', 'PATCH', 'DELETE'])
def reviews_App(review_id):
		from routes.reviews_routes import Review_Routes
		return Review_Routes().review(review_id, True if request.args.get('extended') else False)

@app.route("/subcategories/<int:subcategory_id>", methods = ['GET', 'PATCH', 'DELETE'])
def subcategories_App(subcategory_id):
		from routes.subcategories_routes import Subcategory_Routes
		return Subcategory_Routes().subcategory(subcategory_id, True if request.args.get('extended') else False)

@app.route("/users/<int:user_id>", methods = ['GET', 'PATCH', 'DELETE'])
def users_App(user_id):
		from routes.users_routes import User_Routes
		return User_Routes().user(user_id, True if request.args.get('extended') else False)

@app.route("/wishlists/<int:wishlist_id>", methods = ['GET', 'PATCH', 'DELETE'])
def wishlists_App(wishlist_id):
		from routes.wishlists_routes import Wishlist_Routes
		return Wishlist_Routes().wishlist(wishlist_id, True if request.args.get('extended') else False)

@app.route("/signup", methods = ['POST'])
def signup_App():
		from routes.emailbot import Email_Routes
		return Email_Routes().WelcomeEmail("jinay.c.kothari@gmail.com","Jinay Kothari")
		

if __name__ == '__main__':
	app.run(host='0.0.0.0', debug=True, port=3000)
