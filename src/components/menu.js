import React, {Component} from 'react'
import MenuItem from './menuItem'
import pizzaData from '../pizzaData'

class Menu extends 
    Component{
        render(){
        const pizzas = pizzaData.map((pizza) => {
            return(
            <MenuItem name={pizza.name} description={pizza.description} image={pizza.image} price={pizza.price} />
            )
    })
            return(
                <div className='menu' id="menu">
                <h1>Menu</h1>
                <div className='menu-container'>
                    {pizzas}
                </div>


        </div>
        )
        }
    }
export default Menu