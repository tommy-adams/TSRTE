import React, { useState, useEffect } from "react";
import ActionBar from "./ActionBar";

export interface TextStyles {
  fontSize: number,
  bold: boolean,
  underline: boolean,
  italic: boolean,
  strike: boolean,
  h1: boolean,
  h4: boolean,
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
    h1: false,
    h4: false,
    orderedList: false,
    unorderedList: false
  });
  const [textClass, setTextClass] = useState<string>("input");

  useEffect(() => {
    setTextClass(`input 
    ${styles.bold ? "font-bold" : ""} 
    ${styles.italic ? "italic" : ""} 
    ${styles.underline ? "underline" : ""} 
    ${styles.strike ? "line-through" : ""} 
    ${styles.h1 ? "h1" : ""} 
    ${styles.h4 ? "h4" : ""}
  `);
  }, [styles]);

  return (
    <div>
      <ActionBar styles={styles} setStyles={setStyles} />
      <div contentEditable="true" className={textClass} />
    </div>
  );
};

export default RTE;