# card

Check out on netifly : https://task21-cardcomp.netlify.app/

I have first made a template of how i want my card to look like.
 And i have also made a grid container for all these cards to come in 3 columns only.

 This is the template for card--
 
        <div 
        className="cards h-96 w-96  flex justify-center items-center
                   bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-1">

            <div className="inside h-full w-full bg-slate-900 flex flex-col justify-center items-center p-3 ">
                        
                <div className="image h-44 w-44 border-2 border-solid border-b-gray-500 mb-3">
                    <img src=" " alt="..." className='h-full w-full'/>
                </div>
                <h1>Pikachu</h1>
                <h3 className='text text-center'>Electric Pokemon</h3>
            </div>
        </div>


I made a grid container for cards to be in 3 columns--

        <div className="flex flex-col items-center h-full">
                <div className="logo h-48  ">
                     <img src={logo} alt="" className='h-full'/>
                </div>
                <div className="cardList mt-8 grid grid-cols-3 gap-8">

                    <Card/>
                
                </div>
            </div>

Then i put props in it--


        <div 
        className="cards h-96 w-96  flex justify-center items-center
                   bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-1">

            <div className="inside h-full w-full bg-slate-900 flex flex-col justify-center items-center p-3 ">
                        
                <div className="image h-44 w-44 border-2 border-solid border-b-gray-500 mb-3">
                    <img src={obj.image} alt="" className='h-full w-full'/>
                </div>
                <h1>{obj.name}</h1>
                <h3 className='text text-center'>{obj.description}</h3>
            </div>
        </div>


I made an object to store information about a pokemon and the duplicated this template for other pokemons--

 let pokemon1 = {
    image: pikachu,
    name: 'Pikachu',
    description: "Pikachu is an electric-type Pokémon12. It is a yellow rodent-like creature with large ears and two red pouches on its cheeks that it uses to attack with electricity"
  }


  And lastly i put it all together by giving object as a prop to card--

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
