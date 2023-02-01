import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/NavBar/index";
import Container from "./components/Container";
import Empty from "./components/Empty";
import Emojis from "./components/Emojis";
import Input from "./components/Input";

function App() {
  const [emojisData, setEmojisData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    async function FetchEmoji() {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://run.mocky.io/v3/fe964130-70d0-430f-b839-e55081423c28`
        );
        setEmojisData(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        setError(true);
      }
    }
    FetchEmoji();
  }, []);

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <Container>
        <Navbar />
        <Input onChange={handleSearchText} value={searchText} />
        {loading && <Empty text="Loading......" />}
        {error && <Empty text="Eror Not Found" />}
        {emojisData.length > 0 && (
          <Emojis emojisData={emojisData} searchText={searchText} />
        )}
      </Container>
    </>
  );
}

export default App;
