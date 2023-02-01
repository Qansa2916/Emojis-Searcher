import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import style from "./EmojisBox.module.css";
import classNames from "classnames";

const EmojisBox = ({ title, symbol }) => {
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setSelected(false), 1000);
    return () => clearTimeout(timer);
  }, [selected]);

  return (
    <div
      onClick={() => {
        navigator.clipboard.writeText(symbol);
        setSelected(true);
      }}
      className={classNames(style.emojiBox, { [style.selected]: selected })}
    >
      <p
        className={style.emoji}
        dangerouslySetInnerHTML={{
          __html: `&#${symbol.codePointAt(0)}`,
        }}
      />

      <p className={style.title}>{selected ? 'Copied!' :title}</p>
    </div>
  );
};

EmojisBox.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string,
};

export default EmojisBox;
