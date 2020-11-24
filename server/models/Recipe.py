from sql_alchemy import db


class RecipeModel(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    menu_id = db.Column(db.Integer, db.ForeignKey('menu.id'), nullable=False)
    name = db.Column(db.String(16), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)



    def __init__(self, id, menu_id, name, quantity, menu):
        self.id = id
        self.menu_id = menu_id
        self.name = name
        self.quantity = quantity
        self.menu = menu

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

