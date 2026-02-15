import { Link } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        document.title = "درباره ما";
    }, []);
    return (
        <>
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="gradient-text">درباره ما </span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 max-w-lg">
                            هدف ما اراعه سایتی است که بتوانید کتاب مورد نظر را سرچ و
                            اطلاعاتی در مورد اون کتاب کسب کنید و در اخر برای خرید کتاب
                            انتخاب مفیدی بکنید!
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                to={"/Contact"}
                                className="px-6 py-3 bg-indigo-500 text-white rounded-full font-medium hover:bg-indigo-600 transition shadow-lg shadow-indigo-500/20"
                            >
                                تماس با ما
                            </Link>
                            <Link
                                to="/Books"
                                className="px-6 py-3 border border-slate-300 rounded-full font-medium hover:bg-slate-50 transition"
                            >
                                بخش کتاب ها
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
