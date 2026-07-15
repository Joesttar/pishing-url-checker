const checkDomainAge = async (domain) => {
    const response = await fetch(`https://rdap.org/domain/${domain}`);
    const jsonResponse = await response.json();

    const eventoRegistro = jsonResponse.events.find((evento => evento.eventAction === 'registration'));
    
    if (eventoRegistro){
        const fechaRegistro = new Date(eventoRegistro.eventDate);
        const fechaHoy = new Date();
        const calcular = fechaHoy - fechaRegistro;
        const calcularDia = Math.floor(calcular / 86400000); 
    
        return {
            diasAntiguedad: calcularDia,
            fechaRegistro: eventoRegistro.eventDate
        }
    }
    return {
        diasAntiguedad: null,
        fechaRegistro: null
    }
}

export default checkDomainAge;