import React, { useState } from "react";
import PropTypes from 'prop-types';

export function AddCategory({ setCategories }) {
  const [inputValue, setinputValue] = useState(''); //Sino es undefined y da error cuando cambia inputValue

  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //props.setCategories('CatNew');  => Esto es si recibis desde parametro sin desestructurar props, pero normalemtne se desestrucutra
    if (inputValue.trim().length > 0) {
      setCategories((cats) => [inputValue, ...cats]);
      setinputValue('');
      //console.log('submit hecho');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

//export default AddCategory;