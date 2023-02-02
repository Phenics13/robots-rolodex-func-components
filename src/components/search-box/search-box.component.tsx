import { ChangeEventHandler } from 'react';

import './search-box.styles.css';

type SearchBoxProps = {
  className: string;
  placeholder: string | undefined;
  onSearchChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = ({ className, placeholder, onSearchChange }: SearchBoxProps) => {
  return (
    <div className="search-box">
      <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onSearchChange}
      />
    </div>
  );
}

export default SearchBox;