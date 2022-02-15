import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddContacts from './Components/AddContacts';
import EditContacts from './Components/EditContacts';
// import EditContacts from './Components/EditContacts';
import ViewContacts from './Components/ViewContacts';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <ViewContacts />} />
        <Route path="/add" element={<AddContacts />} />
        <Route path="/add/:id" element={<AddContacts />} />
        <Route path="*" element={<EditContacts />}/>
      </Routes>
      </BrowserRouter>
    {/* <Dtable /> */}
    </div>
  );
}

export default App;
