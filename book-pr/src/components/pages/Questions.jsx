import { useNavigate } from "react-router-dom";
import { useEffect } from "react"
const Questions = () => {
    useEffect(() => {
        document.title = "سوالات متداول";
    }, []);
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    };

    return (
        <div className="gradient-bg min-h-screen p-4 relative">

            <div className="fixed top-10 left-10 w-2 h-2 bg-yellow-300 rounded-full sparkle z-10"></div>
            <div
                className="fixed top-20 right-20 w-3 h-3 bg-pink-300 rounded-full sparkle z-10"
                style={{ animationDelay: "0.5s" }}
            ></div>
            <div
                className="fixed bottom-20 left-20 w-2 h-2 bg-blue-300 rounded-full sparkle z-10"
                style={{ animationDelay: "1s" }}
            ></div>
            <div
                className="fixed bottom-10 right-10 w-3 h-3 bg-green-300 rounded-full sparkle z-10"
                style={{ animationDelay: "1.5s" }}
            ></div>
            <div
                className="fixed top-1/2 left-5 w-2 h-2 bg-purple-300 rounded-full sparkle z-10"
                style={{ animationDelay: "2s" }}
            ></div>
            <div
                className="fixed top-1/3 right-5 w-2 h-2 bg-orange-300 rounded-full sparkle z-10"
                style={{ animationDelay: "2.5s" }}
            ></div>


            <div className="max-w-4xl mx-auto py-8">

                <div className="text-center mb-12">
                    <div className="relative mb-8">

                        <div className="absolute -top-5 left-1/4 book-flip">
                            <svg width="50" height="70" viewBox="0 0 50 70">
                                <rect x="5" y="5" width="40" height="60" rx="3" fill="#ef4444" stroke="#dc2626" strokeWidth="1" />
                                <rect x="3" y="7" width="4" height="56" rx="1" fill="#dc2626" />
                                <rect x="8" y="3" width="40" height="60" rx="3" fill="#fef2f2" stroke="#fecaca" strokeWidth="1" />
                            </svg>
                        </div>

                        <div className="absolute -top-3 right-1/4 floating-book" style={{ animationDelay: "1s" }}>
                            <svg width="45" height="65" viewBox="0 0 45 65">
                                <rect x="5" y="5" width="35" height="55" rx="3" fill="#10b981" stroke="#059669" strokeWidth="1" />
                                <rect x="3" y="7" width="4" height="51" rx="1" fill="#059669" />
                                <rect x="8" y="3" width="35" height="55" rx="3" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
                            </svg>
                        </div>

                        <div className="absolute top-5 left-10 bouncing" style={{ animationDelay: "2s" }}>
                            <svg width="40" height="55" viewBox="0 0 40 55">
                                <rect x="5" y="5" width="30" height="45" rx="3" fill="#f59e0b" stroke="#d97706" strokeWidth="1" />
                                <rect x="3" y="7" width="4" height="41" rx="1" fill="#d97706" />
                                <rect x="8" y="3" width="30" height="45" rx="3" fill="#fffbeb" stroke="#fed7aa" strokeWidth="1" />
                            </svg>
                        </div>

                        <div className="absolute top-8 right-8 floating-book" style={{ animationDelay: "0.5s" }}>
                            <svg width="35" height="50" viewBox="0 0 35 50">
                                <rect x="5" y="5" width="25" height="40" rx="3" fill="#8b5cf6" stroke="#7c3aed" strokeWidth="1" />
                                <rect x="3" y="7" width="4" height="36" rx="1" fill="#7c3aed" />
                                <rect x="8" y="3" width="25" height="40" rx="3" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1" />
                            </svg>
                        </div>
                    </div>

                    <div className="fade-in-up" style={{ animationDelay: "0.3s" }}>
                        <div className="flex items-center justify-center mb-6">
                            <div className="floating-book mr-4">
                                <svg width="60" height="75" viewBox="0 0 60 75">
                                    <rect x="5" y="5" width="50" height="65" rx="4" fill="#8b5cf6" stroke="#7c3aed" strokeWidth="2" />
                                    <rect x="3" y="7" width="6" height="61" rx="2" fill="#7c3aed" />
                                    <rect x="8" y="3" width="50" height="65" rx="4" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1" />
                                    <text x="33" y="40" textAnchor="middle" fill="#8b5cf6" fontSize="20" fontWeight="bold">
                                        ؟
                                    </text>
                                </svg>
                            </div>
                            <h1 className="text-4xl font-bold text-gray-800">سوالات متداول</h1>
                        </div>
                    </div>

                    <div className="fade-in-up" style={{ animationDelay: "0.6s" }}>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            پاسخ سوالات رایج شما در مورد فروشگاه کتاب ما
                        </p>
                    </div>
                </div>


                <div className="fade-in-up space-y-6" style={{ animationDelay: "0.9s" }}>

                    <div
                        className="faq-item bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
                        onClick={(e) => {
                            const answer = e.currentTarget.querySelector(".faq-answer");
                            const symbol = e.currentTarget.querySelector("span");
                            answer.classList.toggle("hidden");
                            symbol.classList.toggle("rotate-45");
                        }}
                    >
                        <div className="flex flex-row-reverse justify-between items-center">
                            <span className="text-purple-600 text-2xl font-bold transition-transform duration-300">+</span>
                            <h3 className="text-xl font-semibold text-gray-800">چگونه می‌توانم کتاب سفارش دهم؟</h3>
                        </div>
                        <div className="faq-answer mt-4 text-gray-600 hidden">
                            <p className="leading-relaxed">
                                در این سایت امکان سفارش کتاب نیست فقط میتوان کتاب مورد نظر را جستجو و اطلاعاتی در موردش کسب کرد!
                            </p>
                        </div>
                    </div>


                </div>


                <div className="fade-in-up text-center mt-12 mb-8" style={{ animationDelay: "1.2s" }}>
                    <button
                        onClick={goHome}
                        className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        🏠 بازگشت به خانه
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Questions;
