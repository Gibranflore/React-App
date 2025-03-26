import {memo} from 'react'

export const Small = memo(({value}) => {
  console.log('Me Volvi a re dibujar :( ')
  return (
    <small>{value}</small>
  )
})
