import { useState, useEffect } from "react";
import style from "./Emojis.module.css";
import PropTypes from "prop-types";
import EmojisBox from "../EmojisBox";
import { FilterEmoji } from "../utils/FilterEmoji";
import Empty from "../Empty";

const Emojis = ({ emojisData, searchText }) => {
  const [filteredEmoji, setFilteredEmojis] = useState([]);

  useEffect(() => {
    setFilteredEmojis(
      FilterEmoji({
        emojisData,
        searchText,
      })
    );
  }, [emojisData, searchText]);

  if (filteredEmoji.length > 0) {
    return (
      <div className={style.emojisGrid}>
        {filteredEmoji.map((data, index) => (
          <EmojisBox key={index} title={data.title} symbol={data.symbol} />
        ))}
      </div>
    );
  } else{
    return(
      <Empty text="Opps not found. Try another keywords!" />
    )
  }
};

Emojis.propTypes = {
  emojisData: PropTypes.array,
  searchText: PropTypes.string,
};

export default Emojis;
