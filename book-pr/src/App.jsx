import Booklist from "./components/Book/Booklist.jsx"
import Books from "./components/Book/Books.jsx";
import SearchSection from "./components/pages/SearchSection.jsx";
import { useState, useEffect } from "react";


const App = () => {

  const [searchQuery, setSearchQuery] = useState({ text: "", category: "همه دسته‌بندی‌ها", author: "همه نویسندگان" });
  useEffect(() => {
    document.title = "کتاب گرد جستجوی کتاب ها";
  }, []);
  return (
    <>
      <SearchSection onSearch={(query) => setSearchQuery(query)} />
      {searchQuery.text && <Booklist query={searchQuery} />}
      <Books />
    </>
  )
}


export default App;
