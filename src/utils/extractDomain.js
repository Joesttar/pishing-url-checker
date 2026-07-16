const extractDomain = (urlCompleta) => {
    try {
    const url = new URL(urlCompleta);
    const dominio = url.hostname;
    const dominioLimpio = dominio.replace('www.', '');
    return dominioLimpio;
    } catch {
        return null
    }
}

export default extractDomain;