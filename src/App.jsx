import './App.css';
import { useState } from 'react';
import UrlInput from './components/UrlInput'; 
import DomainAgeChecker from './components/DomainAgeChekcer';


function App() {
  const [urlInput, setUrlInput] = useState('');
  const handleUrlChange = (newUrl) => {
    setUrlInput(newUrl)
  };

  return (
    <div className='app-container'>
     <h1 className='titulo'>Phishing URL Checker</h1>
     <p className='descripcion'>Analiza una URL sospechosa y detecta señales de phishing antes de hacer clic.</p>
     <div className='tarjeta'>
     <UrlInput url={urlInput} onUrlChange={handleUrlChange}/>
     <DomainAgeChecker url={urlInput}/>
     </div>
    </div>
  )
}

export default App