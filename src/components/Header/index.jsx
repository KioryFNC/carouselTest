import * as Element from "./styles";
import polygon from '../../assets/Polygon.jpg';
import { Hamburguer } from "../Icons/Hamburger";
import { SvgOrder } from "../Icons/SvgOrder";
import { Input } from "../Input";
import { IoMdSearch } from "react-icons/io";
import { IoReturnDownBack } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [ navOpen, setNavOpen ] = useState(false);

  return (
    <Element.Root>
      <Element.ToggleNavbar onClick={() => setNavOpen(!navOpen)}>
        <Hamburguer />
      </Element.ToggleNavbar>

      <Element.Navigation open={navOpen}>
        <Link to='/newdish'>
          Novo prato
        </Link>
      </Element.Navigation>
      
      <Element.Logo>
        <img src={polygon} />
        <h1>food explorer</h1>
      </Element.Logo>

      <Element.Search>
        <Input
          className="custom-input"
          placeholder="Busque por pratos ou ingredientes"
          type="text"
          icon={IoMdSearch}
        />
      </Element.Search>

      <Element.Order>
        <button className="lastSvg">
          <SvgOrder/>
          <p>pedidos</p>
        </button>
      </Element.Order>

      <Element.SignOut>
        <IoReturnDownBack/>
      </Element.SignOut>

    </Element.Root>
  )
}