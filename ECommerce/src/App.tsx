import './App.css'
import Home from './pages/home'
import { CartProvider } from './utils/cardContext';

function App() {

  return (
    <>
      <CartProvider>
        <Home/>
      </CartProvider>
    </>
  )
}

export default App
