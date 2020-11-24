from flask_restful import Resource
from models.Menu import MenuModel

from models.Recipe import RecipeModel


class Menu(Resource):

    def get(self):

        menu = [food.json() for food in MenuModel.query.all()]

        return menu, 200


class MenuUnique(Resource):
    def get(self, id):
        # check if food already exists
        menu_item = MenuModel.query.filter_by(id = id).first()

        if menu_item:
            menu_item = menu_item.json()
            return menu_item, 200

        # if food does not exists return error 404
        return {'message': 'Sorry! Food does not found!'}, 404