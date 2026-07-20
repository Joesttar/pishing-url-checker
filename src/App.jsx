import { useState } from 'react';
import UrlInput from './components/UrlInput'; 
import DomainAgeChecker from './components/DomainAgeChekcer';
import { levenshteinDistance } from './utils/levenshteinDistance';

function App() {
  const [urlInput, setUrlInput] = useState('');
  const handleUrlChange = (newUrl) => {
    setUrlInput(newUrl)
  };

  return (
    <div>
     <p>Phishing URL Checker</p>
     <UrlInput url={urlInput} onUrlChange={handleUrlChange}/>
     <DomainAgeChecker url={urlInput}/>

    </div>
  )
}

export default App