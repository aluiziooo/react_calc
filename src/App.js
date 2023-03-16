import './App.css';

function Button(a){

  if (a.valor=="0"){
    return <button style={{width:150}}>{a.valor}</button>
  }
  if (a.valor=="="){
    return <button style={{height:80, position:'absolute'}}>{a.valor}</button>
  }
  return(
    <button >{a.valor}</button>
  );
}


function App() {
  return (
    <div className="calculadora">
      <div className='visor'>
        <div className='visor_internal'>
        </div>
      </div>
      <div className='row1'>
      <Button valor="|"/>
      <Button valor="/"/>
      <Button valor="*"/>
      <Button valor="-"/>
      </div>
      <div className='row2'>
      <Button valor="7"/>
      <Button valor="8"/>
      <Button valor="9"/>
      <Button valor="+"/>
      </div>
      <div className='row3'>
        <Button valor="4"/>
        <Button valor="5"/>
        <Button valor="6"/>
        <Button valor="."/>
      </div>
      <div className='row4'>
        <Button valor="1"/>
        <Button valor="2"/>
        <Button valor="3"/>
        <Button valor="="/>
      </div>
      <div>
        <Button valor="0" />
        <Button valor=","/>
      </div>
    </div>
  );
}

export default App;
