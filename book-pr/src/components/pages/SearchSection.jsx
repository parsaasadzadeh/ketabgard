import { useState } from "react";

const SearchSection = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("همه دسته‌بندی‌ها");
  const [author, setAuthor] = useState("همه نویسندگان");

  const handleSearch = () => {
    onSearch({
      text: input,
      category,
      author,
    });
  };

  return (
    <section className="py-12 bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            کتاب مورد نظر خود را پیدا کنید
          </h2>
          <p className="text-indigo-100">
            جستجوی پیشرفته در میان هزاران عنوان کتاب
          </p>
        </div>

        <div className="search-box bg-white rounded-xl p-4 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="عنوان کتاب، نویسنده یا ناشر..."
                className="w-full p-4 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <i
                data-feather="search"
                className="absolute right-4 top-4 text-gray-400"
              ></i>
            </div>
            <button
              onClick={handleSearch}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-lg font-medium transition flex items-center justify-center"
            >
              <i data-feather="search" className="ml-2"></i>
              جستجو
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="p-2 border rounded-lg text-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option>همه دسته‌بندی‌ها</option>
              <option>ادبیات</option>
              <option>تاریخ</option>
              <option>علمی</option>
              <option>رمان</option>
            </select>

            <select
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="p-2 border rounded-lg text-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option>همه نویسندگان</option>
              <option>صادق هدایت</option>
              <option>محمود دولت‌آبادی</option>
              <option>رضا امیرخانی</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
