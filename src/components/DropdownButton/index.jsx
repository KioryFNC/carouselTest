import React, { useState } from 'react';
import { Button, DropdownContainer, DropdownOption } from './styles';

export function DropDownButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Abrir Opções');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      <Button onClick={toggleDropdown}>{selectedOption}</Button>
      {isOpen && (
        <DropdownContainer>
          <DropdownOption onClick={() => handleOptionClick('Refeições')}>Refeições</DropdownOption>
          <DropdownOption onClick={() => handleOptionClick('Pratos Principais')}>Pratos Principais</DropdownOption>
          <DropdownOption onClick={() => handleOptionClick('Bebidas')}>Bebidas</DropdownOption>
        </DropdownContainer>
      )}
    </div>
  );
}
