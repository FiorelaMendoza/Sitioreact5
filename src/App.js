import logo from './logo.svg';
import './App.css';
import C01componente from './components/C01componente';
import Variable from './components/C04variable';
import MatrizOperaciones from './components/C07matrizOperaciones';
import AppForm from './components/AppForm';


function App() {
  return (
    <div style={{background:"yellow", width:"350px", padding:"10px", TextAlign:"center"}}>
      <h1>app.js</h1>
      <AppForm></AppForm>
      <i class="large material-icons">insert_chart</i>

      <p>1. Juan Manuel 23 Masculino --------x A</p>
      <p>2. Jose Victor 25 Masculino----- x B</p>
      <p>3. Carlos Andres 56 Masculino........xC </p>
    </div>
  );

}
<i class="large material-icons">insert_chart</i>
export default App;