import log from '../../assets/img/ds.svg';
import './styles.css';
function Header() {
    return(
        <header>
        <div className="dsmeta-logo-container">
            <img src={log}alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>
              Desenvolvido por
              <a href="Semana Spring React"> Alan Rodrigues /Projeto Semana Spring React /Nelio Alves </a>
            </p>
        </div>
    </header>
    )
   }
   
   export default Header;
   //<a href="https://www.instagram.com/devsuperior.ig">@devsuperior.ig</a>