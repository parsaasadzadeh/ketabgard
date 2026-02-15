
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'



const books = [
  {
    number: 1,
    image: img1,
    name: "کتاب هدف",
    due: "1404/5/2",
    author: "صادق هدایت",
    category: "ادبیات",
    description: "",
  },
  {
    number: 2,
    image: img2,
    name: "تاریخ ایران",
    due: "1404/6/10",
    author: "محمود دولت‌آبادی",
    category: "تاریخ",
    description: "",
  },
  {
    number: 3,
    image: img3,
    name: "علم و فناوری",
    due: "1404/7/5",
    author: "رضا امیرخانی",
    category: "علمی",
    description: "",
  },
  {
    number: 4,
    image: img4,
    name: "رمان عاشقانه",
    due: "1404/5/20",
    author: "صادق هدایت",
    category: "رمان",
    description: "",
  },
  {
    number: 5,
    image: img5,
    name: "ادبیات معاصر",
    due: "1404/8/1",
    author: "محمود دولت‌آبادی",
    category: "ادبیات",
    description: "",
  },
  {
    number: 6,
    image: img6,
    name: "فلسفه و زندگی",
    due: "1404/6/15",
    author: "رضا امیرخانی",
    category: "علمی",
    description: "",
  },
  {
    number: 7,
    image: img7,
    name: "تاریخ جهان",
    due: "1404/7/25",
    author: "صادق هدایت",
    category: "تاریخ",
    description: "",
  },
  {
    number: 8,
    image: img1,
    name: "رمان پلیسی",
    due: "1404/8/10",
    author: "محمود دولت‌آبادی",
    category: "رمان",
    description: "",
  },
];

export const getBooks = () => {
  return books;
};


export const getBook = (number) => {
  return books.find(book => book.number === number)
}