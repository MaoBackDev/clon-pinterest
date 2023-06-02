const d = document;
const w = window;

function responsiveMedia(id, mq, mc, dc) {

    let breakpoint = w.matchMedia(mq);  // almacena los cambios de pantalla

    const responsive = (e) => {

        // retorna un booleano si es true carga el menú para desktop caso contrario carga el menú mobile
        if(e.matches){
            d.getElementById(id).innerHTML = dc;
        }else {
            d.getElementById(id).innerHTML = mc;
        }
        // console.log(e.matches)
    }

    // escucha los cambios de tamaño en la pantalla
    breakpoint.addListener(responsive);
    responsive(breakpoint)
}

d.addEventListener('DOMContentLoaded', (e) => {
    responsiveMedia(
        'nav', 
        '(min-width: 850px)', 

        `<li class="menu-item">
            <a href="https://www.pinterest.com" target="_blank" rel="noopener">
                <img src="./assets/logo.png" alt="Pinterest Logo">
            </a>
        </li>
            
        <li class="menu-item mobile-submenu" id="home-mobile">
            <a href="#">
                Inicio&blacktriangledown;
            </a>
            <ul>
                <li><a href="">Inicio</a></li>
                <li><a href="">Hoy</a></li>
                <li><a href="">Crear</a></li>
            </ul>
        </li>`, 

        `<li class="menu-item">
            <a href="https://www.pinterest.com" target="_blank" rel="noopener">
                <img src="./assets/logo.png" alt="Pinterest Logo">
            </a>
        </li>

        <li class="menu-item" id="home-desktop">
            <a href="#">
                Inicio 
            </a>
        </li>

        <li class="menu-item"><a href="">Hoy</a></li>

        <li class="menu-item desktop-submenu">
            <a href="#">
                Crear &blacktriangledown;
            </a>
            <ul>
                <li><a href="">Crea un Idea Pin</a></li>
                <li><a href="">Crea Pin</a></li>
            </ul>
        </li>`
    )
})

responsiveMedia(
    'menu-index', 
    '(min-width: 768px)', 
    `<button class="btn btn-login">Iniciar Sesión</button>`, 
    `<a href="#">Información</a>
    <a href="#">Empresa</a>
    <a href="#">Blog</a>
    <a href="profile.html" target="_blank" class="btn btn-login">Iniciar Sesión</a>
    <button class="btn btn-register">Regístrate</button>`
)

