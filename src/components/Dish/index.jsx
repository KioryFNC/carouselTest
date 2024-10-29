// src/components/Dish/index.jsx
import { useState } from 'react';
import { Container } from './styles';
import { ButtonMain } from '../ButtonMain';
import { CiHeart } from 'react-icons/ci';
import { ButtonAdd } from '../ButtonAdd';

export function Dish({ dish }) {
  const { imageSrc, title, price, description } = dish; // Desestruturação do objeto dish
  const [isFavorited, setIsFavorited] = useState(false);
  
  const handleFavoriteClick = () => {
    setIsFavorited((prevState) => !prevState);
  };

  return (
    <Container $isFavorited={isFavorited}>
      <div className="card">
        <CiHeart 
          className='ci-heart' 
          onClick={handleFavoriteClick} 
        />
        <img src={imageSrc} alt={title} />
        <h3>{title}</h3>
        <p className="price">R${price}</p>
        <p className="description">{description}</p>
        <div className='buttons'>
          <ButtonAdd />
          <ButtonMain title="incluir" />
        </div>
      </div>
    </Container>
  );
}
