from flask import Flask
from flask_restful import Resource, Api
from resources.menu import Menu, MenuUnique
from sql_alchemy import db
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:docker@localhost/faketicias'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
api = Api(app)


api.add_resource(Menu, '/menu')
api.add_resource(MenuUnique, '/menu/<string:id>')

@app.before_first_request
def create_database():
  db.create_all()


if __name__ == '__main__':
    db.init_app(app)
    app.run(debug=True)


