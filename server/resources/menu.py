from flask import Response
from flask_restful import Resource, reqparse
from models.Menu import MenuModel
from sql_alchemy import db
from models.Recipe import RecipeModel


class Menu(Resource):

    args = reqparse.RequestParser()

    args.add_argument('name', type=str, nullable=False, help='This field is required')
    args.add_argument('price', type=str, nullable=False, help='This field is required')
    args.add_argument('description', type=str, nullable=False, help='This field is required')

    args_menu = reqparse.RequestParser()
    args_menu.add_argument('menu', nullable=False, type=dict, help='This field is required', action='append')

    def get(self):

        menu = [food.json() for food in MenuModel.query.all()]

        return menu, 200

    def post(self):

        data = self.args.parse_args()

        menu_item = MenuModel(**data)

        has_item_already_in_menu = menu_item.query.filter_by(name = menu_item.name).first()

        if has_item_already_in_menu:
            return {'message': 'Item is already registered'}, 405
        try:
            db.session.add(menu_item)
            db.session.commit()
        except:
            return {'message': 'Internal error while trying create new Item'}, 500

        data_menu = self.args_menu.parse_args()

        id = menu_item.json()['id']

        for recipe in data_menu['menu']:
            recipe_item = RecipeModel(id, **recipe)
            try:
                db.session.add(recipe_item)
                db.session.commit()
            except:
                return {'message': 'Internal error while trying create new recipe item'}, 500

        return Response(status=201)



class MenuUnique(Resource):
    def get(self, id):
        # check if food already exists
        menu_item = MenuModel.query.filter_by(id = id).first()

        if menu_item:
            menu_item = menu_item.json()
            return menu_item, 200

        # if food does not exists return error 404
        return {'message': 'Sorry! Food does not found!'}, 404