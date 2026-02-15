
import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";
import { useEffect } from "react";
const NotFound = () => {
    useEffect(() => {
        document.title = "صحفه مورد نظر پیدا نشد||404"
    }, []);
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    };

    return (
        <div
            className={`${styles.gradientBg} min-h-screen flex items-center justify-center p-4 overflow-hidden relative`}
        >

            <div className={`absolute top-10 left-10 w-2 h-2 bg-yellow-300 rounded-full ${styles.sparkle}`}></div>
            <div
                className={`absolute top-20 right-20 w-3 h-3 bg-pink-300 rounded-full ${styles.sparkle}`}
                style={{ animationDelay: "0.5s" }}
            ></div>
            <div
                className={`absolute bottom-20 left-20 w-2 h-2 bg-blue-300 rounded-full ${styles.sparkle}`}
                style={{ animationDelay: "1s" }}
            ></div>
            <div
                className={`absolute bottom-10 right-10 w-3 h-3 bg-green-300 rounded-full ${styles.sparkle}`}
                style={{ animationDelay: "1.5s" }}
            ></div>
            <div
                className={`absolute top-1/2 left-5 w-2 h-2 bg-purple-300 rounded-full ${styles.sparkle}`}
                style={{ animationDelay: "2s" }}
            ></div>
            <div
                className={`absolute top-1/3 right-5 w-2 h-2 bg-orange-300 rounded-full ${styles.sparkle}`}
                style={{ animationDelay: "2.5s" }}
            ></div>


            <div className="text-center max-w-2xl mx-auto">

                <div className="relative mb-8">
                    <div className={`${styles.floatingBook} ${styles.bookShadow}`}>
                        <svg width="200" height="240" viewBox="0 0 200 240" className="mx-auto">
                            <rect x="20" y="20" width="160" height="200" rx="8" fill="#4f46e5" stroke="#3730a3" strokeWidth="2" />
                            <rect x="15" y="25" width="10" height="190" rx="2" fill="#3730a3" />
                            <rect x="25" y="15" width="160" height="200" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                            <text
                                x="105"
                                y="120"
                                textAnchor="middle"
                                fill="#4f46e5"
                                fontSize="36"
                                fontWeight="bold"
                                fontFamily="Arial"
                            >
                                404
                            </text>
                            <rect x="35" y="140" width="130" height="2" fill="#e2e8f0" />
                            <rect x="35" y="150" width="100" height="2" fill="#e2e8f0" />
                            <rect x="35" y="160" width="120" height="2" fill="#e2e8f0" />
                        </svg>
                    </div>


                    <div className={`absolute -top-5 -left-10 ${styles.bookFlip}`}>
                        <svg width="60" height="80" viewBox="0 0 60 80">
                            <rect x="5" y="5" width="50" height="70" rx="3" fill="#ef4444" stroke="#dc2626" strokeWidth="1" />
                            <rect x="3" y="7" width="4" height="66" rx="1" fill="#dc2626" />
                            <rect x="8" y="3" width="50" height="70" rx="3" fill="#fef2f2" stroke="#fecaca" strokeWidth="1" />
                        </svg>
                    </div>

                    <div className={`absolute -top-3 -right-8 ${styles.floatingBook}`} style={{ animationDelay: "1s" }}>
                        <svg width="50" height="70" viewBox="0 0 50 70">
                            <rect x="5" y="5" width="40" height="60" rx="3" fill="#10b981" stroke="#059669" strokeWidth="1" />
                            <rect x="3" y="7" width="4" height="56" rx="1" fill="#059669" />
                            <rect x="8" y="3" width="40" height="60" rx="3" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
                        </svg>
                    </div>

                    <div className={`absolute top-10 -left-16 ${styles.bouncing}`} style={{ animationDelay: "2s" }}>
                        <svg width="45" height="65" viewBox="0 0 45 65">
                            <rect x="5" y="5" width="35" height="55" rx="3" fill="#f59e0b" stroke="#d97706" strokeWidth="1" />
                            <rect x="3" y="7" width="4" height="51" rx="1" fill="#d97706" />
                            <rect x="8" y="3" width="35" height="55" rx="3" fill="#fffbeb" stroke="#fed7aa" strokeWidth="1" />
                        </svg>
                    </div>
                </div>


                <div className={styles.fadeInUp} style={{ animationDelay: "0.3s" }}>
                    <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                </div>

                <div className={styles.fadeInUp} style={{ animationDelay: "0.6s" }}>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">صفحه مورد نظر پیدا نشد!</h2>
                </div>

                <div className={styles.fadeInUp} style={{ animationDelay: "0.9s" }}>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        متأسفانه کتابی که دنبالش می‌گردید در قفسه‌های ما پیدا نشد.
                        <br />
                        شاید در کتابخانه اصلی ما چیز جالبی پیدا کنید!
                    </p>
                </div>


                <div className={`${styles.fadeInUp} flex justify-center`} style={{ animationDelay: "1.2s" }}>
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

export default NotFound;
