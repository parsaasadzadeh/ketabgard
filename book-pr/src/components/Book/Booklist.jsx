import { getBooks } from "../../data/data";
import { Link } from "react-router-dom";

const Booklist = ({ query }) => {
  const books = getBooks();

  const filteredBooks = books.filter(book => {
    const matchesText = book.name.toLowerCase().includes(query.text.toLowerCase());
    const matchesCategory = query.category === "همه دسته‌بندی‌ها" || book.category === query.category;
    const matchesAuthor = query.author === "همه نویسندگان" || book.author === query.author;
    return matchesText && matchesCategory && matchesAuthor;
  });

  if (filteredBooks.length === 0) {
    return <h1 className="text-red-500 text-xl mt-4 text-center">کتاب مورد نظر پیدا نشد</h1>;
  }

  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredBooks.map((book) => (
        <Link
          key={book.number}
          to={`/Books/${book.number}`}
          className="book-card block bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition"
        >
          <h3 className="text-lg font-bold text-gray-800 mb-1">{book.name}</h3>
          <p className="text-gray-600 mb-1">نویسنده: {book.author}</p>
          <p className="text-gray-500 text-sm mb-2">تاریخ انتشار: {book.due}</p>
          <span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
            {book.category}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Booklist;
