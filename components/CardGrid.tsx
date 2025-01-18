"use client";

import React from "react";
import { PostType } from "@/Types";
import Image from "next/image";
import Card from "./Card";

const CardGrid = ({ Posts }: { Posts: PostType[] }) => {
    return (
        <>
            {Posts.length > 0 ? (
                <ul className="mt-3 card_grid">
                    {Posts.map((post, index) => (
                        <li key={index}>
                            <Card Post={post} />
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="w-full flex flex-col justify-center items-center">
                    <Image
                        src={"/empty.svg"}
                        width={300}
                        height={300}
                        alt="No startups found"
                    />
                    <p className="ml-14 m-3 text-lg">No startups found</p>
                </div>
            )}
        </>
    );
};

export default CardGrid;
