import React, { useEffect, useState } from 'react'
import css from '../layout/layout.module.scss'
import Header from '../header/Header'
import Card from '../card/Card'
import axios from 'axios'
import * as FaIcons from 'react-icons/fa'
import { URL_POKEMON } from '../../../api/apiRest'

export default function LayoutHome() {

  const [arrayPokemon, setArrayPokemon] = useState([])
  const [globalPokemon, setGlobalPokemon] = useState([])
  const [xpage, setXpage] = useState(1)
  const [search,setSearch] = useState("")


  useEffect(() => {
    const api = async() => {

      const limit = 15
      const xp = (xpage - 1) * limit
      const apiPoke = await axios.get(`${URL_POKEMON}/?offset=${xp}limit`)

      setArrayPokemon(apiPoke.data.results);
    }

    api()
    getGlobalPokemons()
  }, [xpage])
  


const getGlobalPokemons = async () => {
  const res = await axios.get(`${URL_POKEMON}?offset=0&limit=1000`)

  const promises = res.data.results.map( (pokemon) =>{
    return pokemon
  })

  const results = await Promise.all(promises)
  setGlobalPokemon(results)

}


const filterPokemon = search?.length > 0 
? globalPokemon?.filter(pokemon => pokemon?.name?.includes(search))
: arrayPokemon


const obtenerSearch = (e) => {
  console.log(e)
  const texto = e.toLowerCase()
  setSearch(texto)
  setXpage(1)
}



  return (
    <div className={css.layout}>
        <Header obtenerSearch={obtenerSearch} />

        <section className={css.section_pagination}>
          <div className={css.div_pagination}>
            <span className={css.item_izquierdo}
              onClick={() => {
              if (xpage == 1) {
                return console.log("No puedes ir atras")
              } 
                setXpage(xpage - 1)
              }}
            >

            <FaIcons.FaAngleLeft />
            </span>
            <span className={css.item}> {xpage} </span>
            <span className={css.item}> DE </span>
            <span className={css.item}> 
              {Math.round(globalPokemon?.length / 15)} 
            </span> 
            <span 
              className={css.item_derecho}
              onClick={() => {
                if (xpage == 67) {
                  return console.log("No hay mas paginas")
                } 
                setXpage(xpage + 1)
              }}
            >
              {" "}
              <FaIcons.FaAngleRight />
            </span>
          </div>
        </section>


        <div className={css.card_content}>
          {filterPokemon.map((card, index) => {
            return <Card  key={index} card={card} />;
          })}

        </div>

    </div>
  )
}
