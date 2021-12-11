import React, { useState } from "react";
import ActionBar from "./ActionBar";

export interface TextStyles {
  fontSize: number,
  bold: boolean,
  underline: boolean,
  italic: boolean,
  strike: boolean,
  orderedList: boolean,
  unorderedList: boolean
};

const RTE = () => {
  const [styles, setStyles] = useState<TextStyles>({
    fontSize: 12,
    bold: false,
    underline: false,
    italic: false,
    strike: false,
    orderedList: false,
    unorderedList: false
  });

  return (
    <div>
      <ActionBar styles={styles} setStyles={setStyles} />
      <div contentEditable="true" className={`input 
        ${styles.bold ? "font-bold" : ""} 
        ${styles.italic ? "italic" : ""} 
        ${styles.underline ? "underline" : ""} 
        ${styles.strike ? "line-through" : ""}
      `}/>
    </div>
  );
};

export default RTE;