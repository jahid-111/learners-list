
import './App.css'
import Cover from './components/Cover'
import Footer from './components/Footer'
import Main from './components/Main'
import Navbar from './components/Navbar'

function App() {
 

  return (
    <div className=' '> 
       
     <header className=' px-2 sm:px-20 mx-auto bg-green-800'>
        <Navbar></Navbar>
<hr />
        <Cover></Cover>
     </header>

    <Main></Main>
    
    <Footer></Footer>
     
    </div>
  )
}

export default App
