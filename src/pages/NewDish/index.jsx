import { HeaderAdm } from "../../components/HeaderAdm";
import { Footer } from "../../components/Footer";
import { ButtonBack } from "../../components/ButtonBack";
import { Container } from "./styles";
import { DropDownButton } from "../../components/DropdownButton"
import { TagConfig } from "../../components/TagConfig"

import { FaPlus } from "react-icons/fa6";
import { MdOutlineFileUpload } from "react-icons/md";

export function NewDish() {
  return(
    <Container>
        <HeaderAdm/>
      <main>
        <ButtonBack className='back'/>
        <h2>Novo prato</h2>
        <div className="allContent">
          <div className="div1">
            <p>Imagem do prato</p>
            <button className="ImgDish">
              <div className="ImgDishIcon">
                <div>
                  <MdOutlineFileUpload />
                </div>
              </div>  
              <span>Selecione uma imagem</span>
            </button>
          </div>

          <div className="name">
            <p>Nome</p>
            <div className="search-container">
                <input type="text" id="searchInput" placeholder="Ex.. Maria Antonieta"/>
              <div id="searchResults" className="search-results"></div>
            </div>
          </div>

          <div className="categoria">
            <p>Categoria</p>
              <DropDownButton/>
          </div>
          
          <div className="ingredientes">
            <p>Ingredientes</p>
              <div className="configtag">
                <TagConfig title="Pão de naan"/>
                <TagConfig title="cebola"/>
                <button className="add">Adicionar <FaPlus/></button>
              </div>
          </div>  

          <div className="preco">
            <p>Preço</p>
              <div className="price">
                <p>R$00,00</p>
              </div>
          </div>

          <div className="descricao">
            <p>Descrição</p>
            <div className="description">
              <textarea id="descriptionInput" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"></textarea>
              <div id="searchResults" className="search-results"></div>
            </div>
          </div>
          <button className="save">Salvar alterações</button>
        </div>
      </main>
        <Footer/>
    </Container>
    )
  }