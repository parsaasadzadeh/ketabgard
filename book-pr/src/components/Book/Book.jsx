import { useParams } from "react-router-dom";
import { getBook } from "../../data/data";
import { useEffect } from "react";
const Book = () => {

    const params = useParams();
    const book = getBook(parseInt(params.bookId));
    useEffect(() => {
        if (book) {
            document.title = `کتاب: ${book.name}`;
        } else {
            document.title = "کتاب پیدا نشد";
        }
    }, [book]);

    if (!book) {
        return (
            <div className="text-red-500 text-center mt-20 text-xl font-bold">
                کتاب پیدا نشد!
            </div>
        );
    }

    const dueDates = book.due.split(',');

    return (
        <div className="min-h-screen  flex items-center justify-center p-6" dir="rtl">
            <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col-reverse md:flex-row-reverse">


                <div className="md:w-1/2 p-8 flex flex-col justify-center text-right">
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-4">درباره کتاب</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        {book.description || "توضیحاتی درباره کتاب موجود نیست."}
                    </p>
                </div>


                <div className="md:w-1/2 p-8 flex flex-col items-center justify-center space-y-6">
                  
                    <div className="w-full h-64 relative overflow-hidden rounded-2xl shadow-lg">
                        <img
                            src={book.image || "https://via.placeholder.com/400x300"}
                            alt={book.name}
                            className="w-full h-full object-cover"
                        />
                    </div>


                    <div className="w-full grid grid-cols-1 gap-4 text-right">
                        <div className="bg-white p-4 rounded-xl shadow-md">
                            <span className="font-semibold text-gray-700">نام کتاب:</span>
                            <span className="text-purple-600 font-bold"> {book.name}</span>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-md">
                            <span className="font-semibold text-gray-700">شماره کتاب:</span>
                            <span className="text-purple-600 font-bold"> {book.number}</span>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-md">
                            <span className="font-semibold text-gray-700">تاریخ‌ها:</span>
                            <ul className="list-disc list-inside mt-1 text-gray-600">
                                {dueDates.map((date, index) => (
                                    <li key={index}>{date}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Book;
