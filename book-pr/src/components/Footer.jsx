
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            <div>
              <div className="flex items-center space-x-2 space-x-reverse mb-4">
                <i className="fas fa-book w-8 h-8 text-indigo-400"></i>
                <h3 className="text-xl font-bold">کتاب‌گرد</h3>
              </div>
              <p className="text-gray-400 mb-4">
                پلتفرم هوشمند جستجو و خرید کتاب با بهترین قیمت و کیفیت
              </p>
              <div className="flex space-x-4 space-x-reverse">
                <a
                  href="#"
                  className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
                >
                  <i className="fab fa-instagram w-5 h-5 text-white"></i>
                </a>
                <a
                  href="#"
                  className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
                >
                  <i className="fab fa-twitter w-5 h-5 text-white"></i>
                </a>
                <a
                  href="#"
                  className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
                >
                  <i className="fab fa-telegram-plane w-5 h-5 text-white"></i>
                </a>
              </div>
            </div>



            <div>
              <h4 className="font-bold text-lg mb-4">لینک‌های مفید</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/Questions" className="text-gray-400 hover:text-white transition">
                    سوالات متداول
                  </Link>
                </li>
                <li>
                  <Link to="/Contact" className="text-gray-400 hover:text-white transition">
                    تماس با ما
                  </Link>
                </li>
                <li>
                  <Link to="/About" className="text-gray-400 hover:text-white transition">
                    درباره ما
                  </Link>
                </li>
                <li>
                  <Link to="/Books" className="text-gray-400 hover:text-white transition">
                    کتاب ها
                  </Link>
                </li>
              </ul>
            </div>



            <div>
              <h4 className="font-bold text-lg mb-4">خبرنامه</h4>
              <p className="text-gray-400 mb-4">
                با عضویت در خبرنامه از جدیدترین کتاب‌ها و تخفیف‌ها مطلع شوید
              </p>
              <div className="flex flex-row-reverse">
                <button className="bg-indigo-600 hover:bg-indigo-700 px-4 rounded-l-lg flex items-center justify-center">
                  <i className="fas fa-paper-plane text-white w-5 h-5"></i>
                </button>
                <input
                  type="email"
                  placeholder="آدرس ایمیل"
                  className="bg-gray-700 text-white p-3 rounded-r-lg w-full focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>


          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 1404 کتاب‌گرد. تمام حقوق محفوظ است.
            </p>
            <div className="flex space-x-6 space-x-reverse mt-4 md:mt-0">
              <img
                src="https://img.icons8.com/color/48/000000/visa.png"
                alt="Visa"
                className="h-8"
              />
              <img
                src="https://img.icons8.com/color/48/000000/mastercard.png"
                alt="Mastercard"
                className="h-8"
              />
              <img
                src="https://img.icons8.com/color/48/000000/paypal.png"
                alt="Paypal"
                className="h-8"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
