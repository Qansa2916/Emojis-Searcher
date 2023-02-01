export const FilterEmoji = ({
  emojisData,
  searchText = "",
  maxResults = 20,
}) => {
  const filteredEmoji = emojisData.filter((emoji) => {
    if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }
    if (emoji.keywords.includes(searchText.toLowerCase())) {
      return true;
    }

    return false
  });

  return filteredEmoji.splice(0, maxResults)

};
