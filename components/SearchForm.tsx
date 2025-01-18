"use client";

import React, { useState } from "react";
import { Search, X } from "lucide-react";

import { Button } from "./ui/button";

const SearchForm = ({
    searchFunction,
}: {
    searchFunction: (search: string) => void;
}) => {
    const [search, setSearch] = useState<string>("");

    const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        searchFunction(search);
    };

    const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setSearch("");
        searchFunction("");
    };

    return (
        <form className="flex items-center justify-between w-fit p-1 pl-2 gap-2 border-4 border-y-5 border-black bg-white rounded-full">
            <input
                className="p-2 w-[25vw] rounded-full outline-none text-gray-600"
                type="text"
                name="search"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="flex flex-row-reverse gap-1">
                <Button
                    type="submit"
                    onClick={(e) => handleSearch(e)}
                    className="icons"
                >
                    <Search />
                </Button>
                {/* Cross button appears when content is available in the search */}
                {search && (
                    <Button
                        type="reset"
                        onClick={(e) => handleReset(e)}
                        className="icons"
                    >
                        <X />
                    </Button>
                )}
            </div>
        </form>
    );
};

export default SearchForm;
