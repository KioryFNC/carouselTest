import { Container } from "./styles";
import { ButtonMenu } from "../../components/ButtonMenu";
import { Footer } from "../../components/Footer";
import { SearchMenu } from "../../components/Icons/SearchMenu";
import { ExitMenu } from "../../components/Icons/ExitMenu";

export function Menu() {
  return (
    <Container>
      <aside>
        <div className="menu">
          <ExitMenu/>
          <button>Menu</button>
        </div>
          <div className="searchContainer">
            <input type="text" id="searchInput" placeholder="Busque por pratos ou ingredientes"/>
            <SearchMenu/>
        </div>
        <ButtonMenu title="Sair"/>
      </aside>
      <Footer/>
    
    </Container>
  )
} 