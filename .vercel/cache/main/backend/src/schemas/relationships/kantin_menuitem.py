from schemas.kantin import KantinResponse
from schemas.menuitem import MenuItemResponse
from typing import List

class KantinWithMenuResponse(KantinResponse):
    menu_items: List[MenuItemResponse]