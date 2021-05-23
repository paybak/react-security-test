import './App.css';

const App = () =>{
  const badString = "javascript:alert('Hacked');"
  const anothBadString = "<img onerror='alert(\"Hacked Again !\");' src='invalid-image'/>"
  return (
    <div className="App">
      <a href={badString}>Check my website yo </a>

      <div dangerouslySetInnerHTML={{"__html": anothBadString}}></div>


    </div>
  );
}

export default App;
