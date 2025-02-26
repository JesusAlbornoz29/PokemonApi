import React from 'react'
import * as FaIcons from 'react-icons/fa'
import css from '../header/header.module.scss'


export default function Header({obtenerSearch}) {

    const retornarSearch = (busqueda) => {
        obtenerSearch(busqueda)
    }

  return (
    <nav className={css.header}>
        <div className={css.div_header}>
            <div className={css.div_logo}>
                <img src="/src/assets/pokemon.png" alt="logo" />
            </div>
            <div className={css.div_search}>
                <input
                    placeholder="Busqueda"
                    type="search"
                    onChange={(e) => retornarSearch(e.target.value)}
                />
                <FaIcons.FaSearch className={css.search_icon} /> {/* Icono dentro del input */}
            </div>
        </div>
    </nav>
  )
}
