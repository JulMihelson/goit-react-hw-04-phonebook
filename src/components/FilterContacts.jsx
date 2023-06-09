import React from 'react';
const FilterContacts = () => {
  const handleChange = event => {
    onChange(event.target.value);
  };
  return (
    <div>
      <label>
        Filter contacts by name:
        <input type="text" onChange={handleChange} />
      </label>
    </div>
  );
};

export default FilterContacts;
