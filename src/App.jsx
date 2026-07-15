import { useState } from 'react';
import  checkDomainAge  from './utils/checkDomainAge'

checkDomainAge('google.com').then(resultado => console.log(resultado));

function App() {

  return (
    <div>
     <p>Pishing URL Checker</p>
    </div>
  )
}

export default App
