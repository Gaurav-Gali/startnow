import React from "react";
import SearchFrom from "../components/SearchForm";

const Home = () => {
    return (
        <>
            <div className="hero-bg">
                <section className="heading">
                    Pitch your startup, connect with Entrepreneurs
                </section>
                <SearchFrom />
            </div>
        </>
    );
};

export default Home;
