import { useState } from 'react'
import Card from './Card.jsx'
import './App.css'
import logo from './assets/pokemonlogo.png'
import pikachu from './assets/pikachu.jpg'
import squirtle from './assets/squirtle.jpg'
import bulbasaur from './assets/bulbasaur.jpeg'
import charmender from './assets/charmender.jpg'
import charizard from './assets/charizard.jpg'

function App() {
  const [count, setCount] = useState(0)

  let pokemon1 = {
    image: pikachu,
    name: 'Pikachu',
    description: "Pikachu is an electric-type Pokémon12. It is a yellow rodent-like creature with large ears and two red pouches on its cheeks that it uses to attack with electricity"
  }
  let pokemon2 = {
    image: squirtle,
    name: 'Squirtle',
    description: "Squirtle is a bipedal, reptilian Pokémon. It has a blue body with purple eyes, a light brown belly, and a tough red-brown shell on its back. "
  }
  let pokemon3 = {
    image: bulbasaur,
    name: 'Bulbasaur',
    description: "Bulbasaur is a small, mainly turquoise amphibian Pokémon with red eyes and a green bulb on its back."
  }
  let pokemon4 = {
    image: charmender,
    name: 'Charmender',
    description: "Charmander is a Fire type Pokémon introduced in Generation 1. Charmander is a bipedal, reptilian Pokémon. Most of its body is colored orange"
  }
  let pokemon5 = {
    image: charizard,
    name: 'Charizard',
    description: "Charizard is a large dragon-like Pokémon, mainly orange in color. It has two large wings, the underside of which are turquoise. Like Charmander and Charmeleon, it has a flame at the end of its tail."
  }
  return (
    <>
     <div className="flex flex-col items-center h-full">
        <div className="logo h-48  ">
          <img src={logo} alt="" className='h-full'/>
        </div>
        <div className="cardList mt-8 grid grid-cols-3 gap-8">

          <Card obj={pokemon1}/>
          <Card obj={pokemon2}/>
          <Card obj={pokemon3}/>
          <Card obj={pokemon4}/>
          <Card obj={pokemon5}/>
          <Card obj={pokemon1}/>
          <Card obj={pokemon2}/>
          <Card obj={pokemon3}/>
          <Card obj={pokemon4}/>
          <Card obj={pokemon5}/>
        </div>
      </div>
    </>
  )
}

export default App
