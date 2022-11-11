import React from 'react'
import * as C from './styles';


export const NotFoundError = () => {
  return (
    <C.Container>
      <C.p> Oh no! It wasn't found here. Maybe search for something else?</C.p>
    </C.Container>
  )
}
