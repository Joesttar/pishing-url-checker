import { useState } from "react";
import  extractDomain  from '../utils/extractDomain';
import  checkDomainAge from '../utils/checkDomainAge';
import { levenshteinDistance } from "../utils/levenshteinDistance";

const DomainAgeChecker = ({url}) => {
    const [resultado, setResultado] = useState(null);
    const [cargando, setCargando] = useState(false);
    const [esHttps, setEsHttps] = useState(null);
    const [esAcortador, setEsAcortador] = useState(null)
    const [posibleTyposquatting, setPosibleTyposquatting] = useState(null)

    const handleAnalizar = async () => {
        setCargando(true)

        const dominio = extractDomain(url);
        const consultar = await checkDomainAge(dominio);
        const calcularHttps = url.startsWith('https://');
        const acortadores = ['bit.ly',
                'tinyurl.com',
                't.co',
                'goo.gl',
                'ow.ly',
                'is.gd',
                'buff.ly',
                'cutt.ly',
                'rebrand.ly',
                'shorturl.at',
                'tiny.cc',
                'rb.gy',
                'lc.cx']
        const Acortador = acortadores.includes(dominio)
        
        const coicidencias = ['paypal.com', 'google.com', 'amazon.com', 'microsoft.com', 'facebook.com']
        const resolverCoicidencias = coicidencias.find(coicidencia => {
        const distancias = levenshteinDistance(dominio, coicidencia)
            return distancias > 0 && distancias <= 2;
        })
        
        setResultado(consultar);
        setEsHttps(calcularHttps);
        setEsAcortador(Acortador);
        setPosibleTyposquatting(resolverCoicidencias)
        setCargando(false);
    }
    return (
        <div>
            <button onClick={handleAnalizar}>Verificar URL</button>
            {cargando && <p>Verificando</p>}
            {resultado && posibleTyposquatting && <p>Este dominio se parece sospechosamente a {posibleTyposquatting}</p>}
            {resultado && esAcortador && <p>Cuidado nombre de la pagina acortado!</p>}
            {resultado && !esHttps && <p>Este sitio no usa HTTPS</p>}
            {resultado && resultado.diasAntiguedad && <p>Este dominio tiene {resultado.diasAntiguedad} dias de antiguedad</p>}
            {resultado && resultado.diasAntiguedad &&  resultado.diasAntiguedad <= 21 && <p>Dominio muy reciente, señales de Phishing</p>}
        </div>
    )
}

export default DomainAgeChecker;