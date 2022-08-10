import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Search = styled.span`
  color: white;
  display: flex;
  position: relative;
  align-items: center;
  svg {
    height: 25px;
  }
`;

const Input = styled(motion.input)`
  transform-origin: left center;
  position: absolute;
  border: 1px solid white;
  padding: 5px 10px;
  background-color: transparent;
  color: white;
  font-size: 16px;
  border-radius: 5px;
`;

function SearchBox() {
  const [searchOpen, setSearchOpen] = useState(false);
  const inputAnimation = useAnimation();
  const toggleSearch = () => {
    if (searchOpen) {
      inputAnimation.start({
        scaleX: 0,
      });
    } else {
      inputAnimation.start({ scaleX: 1 });
    }
    setSearchOpen((prev) => !prev);
  };
  return (
    <Search>
      <Input
        animate={inputAnimation}
        initial={{ scaleX: 0 }}
        transition={{ type: "linear" }}
        placeholder="Search ID..."
      />
      <motion.svg
        onClick={toggleSearch}
        animate={{ x: searchOpen ? 160 : 0 }}
        transition={{ type: "linear" }}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        ></path>
      </motion.svg>
    </Search>
  );
}
export default SearchBox;
