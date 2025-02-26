import React, { useEffect, useState } from 'react';
import css from '../card/card.module.scss';
import axios from 'axios';
import { URL_ESPECIES, URL_EVOLUCIONES, URL_POKEMON } from '../../../api/apiRest';

export default function Card({ card }) {
  const [itemPokemon, setItemPokemon] = useState({});
  const [especiePokemon, setEspeciePokemon] = useState({});
  const [evoluciones, setEvoluciones] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiPokemon = await axios.get(`${URL_POKEMON}/${card.name}`);
      setItemPokemon(apiPokemon.data);
      
      const urlEspecie = card.url.split("/")[6];
      const apiEspecie = await axios.get(`${URL_ESPECIES}/${urlEspecie}`);
      setEspeciePokemon({
        url_especie: apiEspecie.data.evolution_chain,
        data: apiEspecie.data
      });
    };
    fetchData();
  }, [card]);

  useEffect(() => {
    const fetchEvoluciones = async () => {
      if (!especiePokemon?.url_especie) return;
  
      const urlEvolucion = especiePokemon.url_especie.url.split("/")[6];
      const apiEvoluciones = await axios.get(`${URL_EVOLUCIONES}/${urlEvolucion}`);
      const evolutionsArray = [];
  
      const getPokemonImage = async (id) => {
        const response = await axios.get(`${URL_POKEMON}/${id}`);
        return response?.data?.sprites?.other['official-artwork']?.front_default;
      };
  
      const processEvolutions = async (chain) => { // Cambia esta línea
        if (!chain) return;
  
        const id = chain.species.url.split("/")[6];
        const img = await getPokemonImage(id); // Aquí está el await
        evolutionsArray.push({ img, name: chain.species.name });
  
        if (chain.evolves_to.length > 0) {
          await processEvolutions(chain.evolves_to[0]); // Asegúrate de usar await aquí también
        }
      };
  
      await processEvolutions(apiEvoluciones.data.chain); // Asegúrate de usar await
      setEvoluciones(evolutionsArray);
    };
    fetchEvoluciones();
  }, [especiePokemon]);

  // Formateo del ID
  let pokeId = itemPokemon?.id?.toString().padStart(3, '0');

  return (
    <div className={css.card}>
      <img
        className={css.img_poke}
        src={itemPokemon?.sprites?.other['official-artwork']?.front_default}
        alt='pokemon'
      />
      <div className={`bg-${especiePokemon?.data?.color?.name} ${css.sub_card}`}>
        <strong className={css.id_card}>#{pokeId}</strong>
        <strong className={css.name_card}>{itemPokemon.name}</strong>
        <h4 className={css.altura_poke}>Altura: {itemPokemon.height}0 cm</h4>
        <h4 className={css.peso_poke}>Peso: {itemPokemon.weight} Kg</h4>
        <h4 className={css.habitat_poke}>Habitat: {especiePokemon?.data?.habitat?.name}</h4>

        <div className={css.div_stats}>
          {itemPokemon?.stats?.map((sta, index) => (
            <h6 key={index} className={css.item_stats}>
              <span className={css.name}>{sta.stat.name}</span>
              <progress value={sta.base_stat} max={110}></progress>
              <span className={css.numero}>{sta.base_stat}</span>
            </h6>
          ))}
        </div>

        <div className={css.div_type_color}>
          {itemPokemon?.types?.map((ti, index) => (
            <h6 key={index} className={`color-${ti.type.name} ${css.color_type}`}>
              {ti.type.name}
            </h6>
          ))}
        </div>

        <div className={css.div_evolucion}>
          {evoluciones.map((evo, index) => (
            <div key={index} className={css.item_evo}>
              <img src={evo.img} alt='evo' className={css.img} />
              <h6>{evo.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}