import { useEffect } from "react"



export const Message = () => {
  
  useEffect(() => {

    const onMouseMove = ({x, y}) => {
      const coords = { x, y };
      console.log(coords);
    }

    window.addEventListener( 'mousemove', onMouseMove)
    
    return () => {
      window.removeEventListener( 'mousemove', onMouseMove)
    }
  }, []);
  
  
  return (
    
    <>
        <h3>Usuario ya existe</h3>
    </>

  )
}


// window.addEventListener( 'mousemove', (event) =>{  
//   console.log(event.x, event.y )
// })

  // funcion para saber las cordenadas del raton
