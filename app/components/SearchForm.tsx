"use client";

import React, { useEffect, useRef, useState } from "react";

import { Search, X } from "lucide-react";

const SearchForm = () => {
    const [search, setSearch] = useState<string>("");

    const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(search);
    };

    const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setSearch("");
    };

    return (
        <form className="flex items-center justify-between w-fit p-1 pl-2 gap-2 border-4 border-y-5 border-black bg-white rounded-full">
            <input
                className="p-2 w-[25vw] rounded-full outline-none"
                type="text"
                name="search"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="flex flex-row-reverse gap-1">
                <button
                    type="submit"
                    onClick={(e) => handleSearch(e)}
                    className="icons"
                >
                    <Search />
                </button>
                {/* Cross button appears when content is available in the search */}
                {search && (
                    <button
                        type="reset"
                        onClick={(e) => handleReset(e)}
                        className="icons"
                    >
                        <X />
                    </button>
                )}
            </div>
        </form>
    );
};

export default SearchForm;
