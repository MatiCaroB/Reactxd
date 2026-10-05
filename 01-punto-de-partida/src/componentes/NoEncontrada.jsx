import { useLocation } from "react-router"

function NoEncontrada(){
    const ubicacion = useLocation()
    return(
        <main>
        <h1 className='h1'>Error 404</h1>
        <p>No encontramos nada en <code>{ubicacion.pathname}</code></p>
        </main>
    )
}
export default NoEncontrada