
const App = () => {
  const miObjeto = {
      nombre: "miriam isela ",
      apPaterno: "flores",
      apMaterno:"antonio",
      edad:"21",
  };
  const atributo = "apPaterno";
return (
    <div className="App">
    <h1>{`mi nombre es ${miObjeto.nombre} ${miObjeto.apPaterno} ${miObjeto.apMaterno} y tengo ${miObjeto.edad} años`}</h1>
    <h1></h1>
</div>
);


};

export default App;
