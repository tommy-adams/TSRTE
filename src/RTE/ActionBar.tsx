import React from "react";
import Button from "./common/Button";

import { TextStyles } from "./index";

import { FaBold, FaItalic, FaStrikethrough, FaUnderline } from "react-icons/fa";

interface Props {
  styles: TextStyles,
  setStyles: Function
};

const ActionBar = ({ styles, setStyles }: Props) => {
  return (
    <div className="flex space-x-2">
      <Button
        selected={styles.bold}
        onSelect={() => setStyles({ ...styles, bold: !styles.bold })}
      >
        <FaBold />
      </Button>
      <Button
        selected={styles.italic}
        onSelect={() => setStyles({ ...styles, italic: !styles.italic })}
      >
        <FaItalic />
      </Button>
      <Button
        selected={styles.underline}
        onSelect={() => setStyles({ ...styles, underline: !styles.underline, strike: false })}
      >
        <FaUnderline />
      </Button>
      <Button
        selected={styles.strike}
        onSelect={() => setStyles({ ...styles, strike: !styles.strike, underline: false })}
      >
        <FaStrikethrough />
      </Button>
      <Button
        selected={styles.h1}
        onSelect={() => setStyles({ ...styles, h1: !styles.h1, h4: false })}
      >
        <span className="font-bold">H1</span>
      </Button>
      <Button
        selected={styles.h4}
        onSelect={() => setStyles({ ...styles, h4: !styles.h4, h1: false })}
      >
        <span className="font-bold">H4</span>
      </Button>
    </div>
  );
};

export default ActionBar;