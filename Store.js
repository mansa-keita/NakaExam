import { createStore } from 'redux';


const initialState = {
    favorites: [
        {
            id: 1,
            name: "Burger",
            image: require("./assets/buga.jpg"),
            Details: " The patty is usually seasoned with salt and pepper, and may also contain other flavorings such as Worcestershire sauce, garlicpickles, cheese, and condiments such as ketchup, mustard, or mayonnaise are preparedOnce the patty is cooked, it is placed on the bottom half of the bun and topped with the prepared toppings and condiments. The top half of the bun is then placed on top of the burger, completing the sandwic, or onion "
      
          },
          {
            id: 2,
            name: "Pizza",
            image: require("./assets/pizza.jpg"),
            Details: " The patty is usually seasoned with salt and pepper, and may also contain other flavorings such as Worcestershire sauce, garlicpickles, cheese, and condiments such as ketchup, mustard, or mayonnaise are preparedOnce the patty is cooked, it is placed on the bottom half of the bun and topped with the prepared toppings and condiments. The top half of the bun is then placed on top of the burger, completing the sandwic, or onion "
      
          },
          {
            id: 3,
            name: "Fish",
            image: require("./assets/fish.jpg"),
            Details: " The patty is usually seasoned with salt and pepper, and may also contain other flavorings such as Worcestershire sauce, garlicpickles, cheese, and condiments such as ketchup, mustard, or mayonnaise are preparedOnce the patty is cooked, it is placed on the bottom half of the bun and topped with the prepared toppings and condiments. The top half of the bun is then placed on top of the burger, completing the sandwic, or onion "
      
          },
          {
            id: 4,
            name: "Super",
            image: require("./assets/super.webp"),
            Details: " The patty is usually seasoned with salt and pepper, and may also contain other flavorings such as Worcestershire sauce, garlicpickles, cheese, and condiments such as ketchup, mustard, or mayonnaise are preparedOnce the patty is cooked, it is placed on the bottom half of the bun and topped with the prepared toppings and condiments. The top half of the bun is then placed on top of the burger, completing the sandwic, or onion "
      
          },
          {
            id: 5,
            name: "Bread",
            image: require("./assets/bread.jpg"),
            Details: " The patty is usually seasoned with salt and pepper, and may also contain other flavorings such as Worcestershire sauce, garlicpickles, cheese, and condiments such as ketchup, mustard, or mayonnaise are preparedOnce the patty is cooked, it is placed on the bottom half of the bun and topped with the prepared toppings and condiments. The top half of the bun is then placed on top of the burger, completing the sandwic, or onion "
      
          },
          {
            id: 6,
            name: "Vigitables",
            image: require("./assets/viigitables.jpg"),
            Details: " The patty is usually seasoned with salt and pepper, and may also contain other flavorings such as Worcestershire sauce, garlicpickles, cheese, and condiments such as ketchup, mustard, or mayonnaise are preparedOnce the patty is cooked, it is placed on the bottom half of the bun and topped with the prepared toppings and condiments. The top half of the bun is then placed on top of the burger, completing the sandwic, or onion "
      
          },
          {
            id: 7,
            name: "Yasa",
            image: require("./assets/yasa.jpg"),
            Details: " The patty is usually seasoned with salt and pepper, and may also contain other flavorings such as Worcestershire sauce, garlicpickles, cheese, and condiments such as ketchup, mustard, or mayonnaise are preparedOnce the patty is cooked, it is placed on the bottom half of the bun and topped with the prepared toppings and condiments. The top half of the bun is then placed on top of the burger, completing the sandwic, or onion "
      
          }
    ],
    
}


function reducer(state = initialState, action){
    switch(action.type){
        case 'ADD_Favarite':
            return{
                ...state,
                favorites: [...state.favorites, action.payload],
            }

            case 'REMOVE_FAVORITE':
                return {
                  ...state,
                  favorites: state.favorites.filter(f => f !== action.payload),
                };
              default:
                return state;
    }
}




const store = createStore(reducer);

export default store;