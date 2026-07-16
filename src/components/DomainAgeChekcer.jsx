import { useState } from "react";
import  extractDomain  from '../utils/extractDomain';
import  checkDomainAge from '../utils/checkDomainAge';

const DomainAgeChecker = ({url}) => {
    const [resultado, setResultado] = useState(null);
    const [cargando, setCargando] = useState(false);

    const handleAnalizar = async () => {
        setCargando(true)

        const dominio = extractDomain(url)
        const consultar = await checkDomainAge(dominio);

        setResultado(consultar);
        setCargando(false);
    }
    return (
        <div>
            <button onClick={handleAnalizar}>Verificar URL</button>
            {cargando && <p>Verificando</p>}
            {resultado && resultado.diasAntiguedad && <p>Este dominio tiene {resultado.diasAntiguedad} dias de antiguedad</p>}
            {resultado && resultado.diasAntiguedad &&  resultado.diasAntiguedad <= 21 && <p>Dominio muy reciente, señales de Phishing</p>}
        </div>
    )
}

export default DomainAgeChecker;