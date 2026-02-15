import { Link } from "react-router-dom";
import { getBooks } from "../../data/data";
import { useEffect } from "react";
const Books = () => {
  useEffect(() => {
    document.title = "کتاب ها "
  }, []);
  const books = getBooks();

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <Link
              to={`/Books/${book.number}`}
              key={book.number}
              className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative">
                <img
                  src={book.image || "https://via.placeholder.com/300x200"}
                  alt={book.name}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{book.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{book.author || "نامشخص"}</p>
                <p className="text-gray-600 text-sm mb-2">{book.due || "نامشخص"}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;
