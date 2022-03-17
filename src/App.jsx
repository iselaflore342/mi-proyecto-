const App = () => {
  const persona = {
  nombre: "miriam isela ",
  apellido: "flores antonio",
  edad: 22,
  direccion:{
  calle: "avenida carranza entre guerrero y mutualismos",
  numExt: 30,
  numint: "",
  ciudad: "san juan bautista tuxtepec",
  }
  };

  const contactoPersona = {
  telefono: "287 1452484",
  email: "isc18350307@gmail.com",
  web: "www.thesimpsons.com",
  };

  const infoPersona = {...persona,...contactoPersona, empresa: "Disney"};
  infoPersona.apodo = "Bart";

  infoPersona.telefono = "555 555 5555";

  console.table(infoPersona);

  const{edad, nombre, apellido}= persona;
  const{calle, numExt, numint,ciudad,} = persona.direccion;
  const humanos = ["ambrocio", "marina","francisco javier", "jorge axel "];
  const[padre, madre, hermano1, hermano2]= humanos;
  const mascotas = ["Santa's helper", "show ball"]
  const familia =[...humanos,...mascotas, "Milhouse"]
  console.log(familia) 
  
  return (
  <div className="App">
  <h1>{`Mi nombre es ${nombre} ${apellido} y tengo ${edad} años y vivo en la  ${calle} numero ${numExt},${ciudad}`}</h1>
  <br />
  {"Mi familia la conforman:"}
  <ul>
  <li>{`Mi padre: ${padre}`}</li>
  <li>{`Mi madre: ${madre}`}</li>
  <li>{`Mis hermanos: ${hermano1} y ${hermano2}`}</li>
  </ul>
  </div>
  );
  }
  export default App;
  