Phishing URL Checker

Aplicación web que analiza una URL y detecta señales de phishing antes de que el usuario haga clic, combinando datos de dominio en tiempo real con algoritmos de detección de similitud.

Demo

🔗 Link a la demo en vivo https://pishing-url-checker.vercel.app 

Características

Analiza una URL y evalúa 4 señales de riesgo:


Antigüedad del dominio: consulta cuándo se registró el dominio vía RDAP. Dominios con menos de 21 días de antigüedad se marcan como sospechosos, ya que los sitios de phishing suelen registrarse muy poco antes de la campaña de ataque.
HTTPS: detecta si el sitio no usa conexión segura.
Acortadores de URL: identifica si el dominio es un acortador conocido (bit.ly, tinyurl.com, etc.), comúnmente usado para ocultar el destino real de un enlace.
Typosquatting: compara el dominio contra una lista de marcas conocidas (PayPal, Google, Amazon, Microsoft, Facebook) usando el algoritmo de distancia de Levenshtein, para detectar dominios que imitan visualmente a una marca real (ej. paypa1.com en vez de paypal.com).


Algoritmo: Distancia de Levenshtein

Implementado desde cero (sin librerías externas) usando programación dinámica. Calcula el número mínimo de ediciones (inserciones, eliminaciones o sustituciones de caracteres) necesarias para transformar un string en otro.

Un dominio se marca como sospechoso de typosquatting si su distancia respecto a una marca conocida es mayor a 0 (no es el dominio real) pero menor o igual a 2 (muy similar).

Stack técnico


React (hooks: useState)
Vite como bundler y entorno de desarrollo
RDAP (Registration Data Access Protocol) para consultar la fecha de registro de dominios, sin necesidad de API key
CSS puro para estilos


Arquitectura

src/
  components/
    UrlInput.jsx           # Input controlado de la URL
    DomainAgeChecker.jsx   # Orquesta el análisis: antigüedad, HTTPS, acortadores y typosquatting
  utils/
    extractDomain.js       # Extrae y limpia el dominio de una URL completa
    checkDomainAge.js      # Consulta la antigüedad del dominio vía RDAP
    levenshteinDistance.js # Algoritmo de distancia de edición (programación dinámica)
  App.jsx                  # Estado central (lifting state up) y composición de componentes

La lógica de negocio (utils/) está separada de los componentes de presentación (components/), y el estado de la URL vive en App.jsx, compartido entre componentes mediante props (lifting state up).

Correr el proyecto localmente

bashgit clone https://github.com/Joesttar/pishing-url-checker.git
cd phishing-url-checker
npm install
npm run dev

Autor

Joe García — LinkedIn · GitHub
