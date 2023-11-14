import './App.css'
import Button from './components/button';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  return (
    <>
    <Sidebar />
    <Button value='badge' type='submit' />
    <div className=''>
     <Header /> 
    </div>
    </>
  )
}

export default App