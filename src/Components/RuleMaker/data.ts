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
    cat: false,
    restaurant: RestaurantNames.BURGERKING,
  },
  {
    id: 2,
    alligator: true,
    bunny: false,
    cat: true,
    restaurant: RestaurantNames.CHILLIS,
  },
  {
    id: 3,
    alligator: false,
    bunny: false,
    cat: true,
    restaurant: RestaurantNames.DOUNTSHOPPE,
  },
]

export const restaurantList = [
  { title: RestaurantNames.APPLEBEES },
  { title: RestaurantNames.BURGERKING },
  { title: RestaurantNames.CHILLIS },
  { title: RestaurantNames.DOUNTSHOPPE },
]

export const inputTableDummyRow: IInputRow = {
  restaurant: restaurantList[0].title,
}
