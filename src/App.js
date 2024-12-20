import './App.css';


//import our components
import Show from './components/Show'
import Edit from './components/Edit';
import Create from './components/Create';


//importamos el enrutador
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Show/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
