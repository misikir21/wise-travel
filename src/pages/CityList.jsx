import React from 'react'
import styles from './CityList.module.css'
import Spinner from './Spinner'
import Cityitem from './Cityitem'

export default function CityList(cites,isloading) {
 if (isloading) return <Spinner />
  return (
    <ul className={styles.CityList}>
    {city.map(city=>
    <Cityitem city={city} key={city.id}/>)}
    </ul>
  )
}
