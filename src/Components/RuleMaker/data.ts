import { RestaurantNames } from "Constants/General"
import { IInputRow } from "./types"

export const inputTableRows: IInputRow[] = [
  {
    id: 0,
    alligator: true,
    bunny: false,
    cat: false,
    restaurant: RestaurantNames.APPLEBEES,
  },
  {
    id: 1,
    alligator: false,
    bunny: true,
    cat: true,
    restaurant: RestaurantNames.BURGERKING,
  },
  {
    id: 2,
    alligator: true,
    bunny: false,
    cat: false,
    restaurant: RestaurantNames.CHILLIS,
  },
]

export const restaurantList = [
  { title: RestaurantNames.APPLEBEES },
  { title: RestaurantNames.BURGERKING },
  { title: RestaurantNames.CHILLIS },
]

export const inputTableDummyRow: IInputRow = {
  restaurant: restaurantList[0].title,
}
