"use client";

import React, { useState } from "react";
import SearchFrom from "../../components/SearchForm";
import { PostType } from "@/Types";
import CardGrid from "@/components/CardGrid";

const Posts: PostType[] = [
    {
        _created_at: "2025-01-17",
        views: 25,
        author: { _id: 1 },
        _id: 1,
        description: "This is the first post.",
        image: "https://example.com/image1.jpg",
        category: "Category 1",
        title: "Title 1",
    },
    {
        _created_at: "2025-01-16",
        views: 42,
        author: { _id: 2 },
        _id: 2,
        description: "This is the second post.",
        image: "https://example.com/image2.jpg",
        category: "Category 2",
        title: "Title 2",
    },
    {
        _created_at: "2025-01-15",
        views: 18,
        author: { _id: 3 },
        _id: 3,
        description: "This is the third post.",
        image: "https://example.com/image3.jpg",
        category: "Category 3",
        title: "Title 3",
    },
    {
        _created_at: "2025-01-14",
        views: 30,
        author: { _id: 4 },
        _id: 4,
        description: "This is the fourth post.",
        image: "https://example.com/image4.jpg",
        category: "Category 4",
        title: "Title 4",
    },
    {
        _created_at: "2025-01-13",
        views: 50,
        author: { _id: 5 },
        _id: 5,
        description: "This is the fifth post.",
        image: "https://example.com/image5.jpg",
        category: "Category 5",
        title: "Title 5",
    },
];

const Home = () => {
    const [search, setSearch] = useState<string>("");
    return (
        <>
            <div className="hero-bg">
                <section className="heading">
                    Pitch your startup, connect with Entrepreneurs
                </section>
                <SearchFrom searchFunction={setSearch} />
            </div>
            {/* List of startups */}
            <section className="m-3">
                {search ? (
                    <p className="text-2xl font-semibold">
                        Search results for {`"${search}"`}
                    </p>
                ) : (
                    <p className="text-2xl font-semibold">All Startups</p>
                )}
                <CardGrid Posts={Posts}/>
            </section>
        </>
    );
};

export default Home;
