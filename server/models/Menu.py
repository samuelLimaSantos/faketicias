from sql_alchemy import db
from models.Recipe import RecipeModel


class MenuModel(db.Model):
    __tablename__ = 'menu'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), nullable=False)
    price = db.Column(db.String(15), nullable=False)
    description = db.Column(db.String(256), nullable=False)
    menu = db.relationship(RecipeModel, backref=db.backref('menu', lazy=True))


    def __init__(self, name, price, description):
        self.name = name
        self.price = price
        self.description = description


    def json(self):

        return {
            'id': self.id,
            'name': self.name,
            'price': str(self.price),
            'description': self.description,
            'menu': [self.format_recipe(recipe.id, recipe.name, recipe.quantity) for recipe in self.menu]

        }

    def format_recipe(self, id, name, quantity):
        return {
            "id": id,
            "name": name,
            "quantity": quantity
        }

