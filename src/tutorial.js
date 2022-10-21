//import sintax
import { useState, useEffect } from 'react';
import './App.css';


//Functional Component with arrow functions
// const Person = (props) => {
//   return (
//     <div>
//       <h1>Name: {props.name}</h1>
//       <h2>Apellido: {props.apellido}</h2>
//       <h2>Edad: {props.edad}</h2>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Danielona';
//   const isNameShowing = false;

//   return (
//    <div className='App'>
//       {/* <h1> Hello, {isNameShowing ? name : <> <h1>No</h1> <h2>Invitado</h2> </>  }</h1> */}


//         {/* Props Example : Argumentos que se pasan entre componentes */}<Person
//         name='Paola Itzel'
//         apellido='Araujo'
//         edad= {5+5}
//       />
//       <Person
//         name='Daniela'
//         apellido='Araujo'
//         edad= '5'
//       />

//    </div>
//   )
// }


// // Hook State , usado por react para representar una pieza de informacion acerca del estado
// // actual del componente, es manejado por el componente mismo
// const App = () => {
//array destructuring
//   const [counter, setCounter] = useState(0);


//   return (
//     <div className='App'>
//       <button onClick={ () => setCounter( (prevCount) => prevCount - 1 )  }>-</button>
//       <h1>{counter}</h1>
//       <button onClick={ () => setCounter( (prevCount) => prevCount + 1 )  }>+</button>
//     </div>
//   )
// }

// Hook useEffect , El Hook de efecto te permite llevar a cabo efectos secundarios en componentes funcionales
const App = () => {

    //Nunca modificar el estado manualmente, es decir, counter no debe asignarse o redeclararse, siempre es modificado con setCounter
    const [counter, setCounter] = useState(0);

    useEffect( () => {
        alert("Haz cambiado el counter a " + counter);
    }, [counter]);

    return (
        <div className='App'>
            <button onClick={ () => setCounter( (prevCount) => prevCount - 1 )  }>-</button>
            <h1>{counter}</h1>
            <button onClick={ () => setCounter( (prevCount) => prevCount + 1 )  }>+</button>
        </div>
    )

}



export default App;


