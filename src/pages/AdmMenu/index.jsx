import { Footer } from "../../components/Footer";
import { Container } from "./styles";
import { ButtonMenu } from "../../components/ButtonMenu";
import { ExitMenu } from "../../components/Icons/ExitMenu";
import { SearchMenu } from "../../components/Icons/SearchMenu";

export function AdmMenu() {
  return(
    <Container>
      <aside>
        <div className="menu">
          <ExitMenu/>
          <h1>Menu</h1>
        </div>
          <div className="search-container">
            <input type="text" id="searchInput" placeholder="Busque por pratos ou ingredientes"/>
            <div id="searchResults" className="search-results"></div>
            <SearchMenu/>
        </div>
        <ButtonMenu title="Novo prato"/>
        <ButtonMenu title="Sair"/>
      </aside>

      <Footer/>
    </Container>
  )
}