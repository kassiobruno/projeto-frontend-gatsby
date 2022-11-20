import React from 'react'
import {GiEarthAmerica} from 'react-icons/gi'
import {MdAirplanemodeActive, MdTimer} from 'react-icons/md'
import {FaMoneyCheck} from 'react-icons/fa'

export const StatsData = [
  {
    icon:  (<GiEarthAmerica />),
    title: "Mais de 100 destinos",
    desc: "Viaje para mais de 100 lugares únicos",
  },
  {
    icon:  (<MdAirplanemodeActive  />),
    title: "1 milhão de viagens realizadas",
    desc: "Mais de 1 milhão de viagens completas no último ano",
  },
  {
    icon:  (<MdTimer />),
    title: "Suporte rápido",
    desc: "Acesse nosso time de suporte 24/7",
  },
  {
    icon:  (<FaMoneyCheck />),
    title: "Melhores negócios",
    desc: "Nós oferecemos os melhores preços",
  }
]