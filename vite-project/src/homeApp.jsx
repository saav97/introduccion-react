
const nombre = {
    nombre:"Alejadnro",
    apellido:"Arriagada"
};


const getSuma = (a, b)=>{
    return a+b;
}


export const App = (props) => {

    return (
        <>
            <h1>{props.title}</h1>
            <p>{props.resp}</p>
        </>
    );
}
