
import { useEffect } from "react"
const Contact = () => {
    useEffect(() => {
        document.title = " تماس با ما";
    }, []);
    return (
        <section className="w-full py-16 px-6 text-center">

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
                پشتیبانی
            </h2>
            <p className="text-gray-600 text-lg mb-8">
                کاربر گرامی شما می‌توانید از طریق پشتیبانی آنلاین، ایمیل{" "}
                <span className="font-semibold text-blue-600">
                    parsa@gmail.com
                </span>{" "}
                یا شماره تماس{" "}
                <span className="font-semibold text-blue-600">099999999</span> با ما
                در ارتباط باشید.
            </p>


            <div className="bg-blue-50 border border-blue-200 rounded-2xl max-w-5xl mx-auto p-6 text-blue-600 text-md leading-relaxed mb-16">
                کاربر گرامی ساعات پاسخگویی به تماس تلفنی از ساعت 9 صبح تا 5 بعد از ظهر و از شنبه تا
                پنج‌شنبه می‌باشد. پاسخگویی به پیام‌های آنلاین همه روزه و از ساعت 9 صبح تا 9 شب می‌باشد.
                در صورت در دسترس نبودن پشتیبانی، پیام خود را بگذارید تا در اسرع وقت بررسی کرده و پاسخ آن را
                برایتان ارسال کنیم.
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">

                <div className="flex flex-col items-center bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition-shadow">
                    <i className="fas fa-phone text-indigo-500 text-3xl mb-4"></i>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">شماره تماس</h3>
                    <p className="text-gray-600 text-lg">000 0000 8888</p>
                </div>


                <div className="flex flex-col items-center bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition-shadow">
                    <i className="fas fa-envelope text-indigo-500 text-3xl mb-4"></i>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">ایمیل</h3>
                    <p className="text-gray-600 text-lg">parsa@gmail.com</p>
                </div>


                <div className="flex flex-col items-center bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition-shadow">
                    <i className="fas fa-headset text-indigo-500 text-3xl mb-4"></i>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">پشتیبانی آنلاین</h3>
                    <p className="text-gray-600 text-lg">
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
