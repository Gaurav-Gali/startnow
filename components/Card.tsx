import React from "react";
import { PostType } from "@/Types";
import { formatDate } from "@/lib/utils";
import { Eye, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const Card = ({ Post }: { Post: PostType }) => {
    return (
        <div className="card">
            {/* Top */}
            <div className="text-md flex items-center justify-between">
                <p>{formatDate(Post._created_at)}</p>
                <p className="flex gap-1 items-center justify-center">
                    <Eye className="text-pink-600" size={18} />
                    {Post.views}
                </p>
            </div>
            {/* Middle */}
            <div className="flex items-center justify-between">
                <p className="font-semibold">{Post.title}</p>
                <div
                    onClick={() => console.log("profile")}
                    className="flex items-center cursor-pointer justify-start gap-1 "
                >
                    <Image
                        src={"/avatar.jpg"}
                        alt="pfp"
                        width={35}
                        height={35}
                        className="object-cover border-black border-2 rounded-full aspect-square"
                    />
                    <p>{Post.author._id}</p>
                </div>
            </div>
            <p>{Post.description}</p>
            <Image
                src={"/img.jpg"}
                alt="pfp"
                className="object-cover rounded-lg"
                width={500}
                height={100}
            />
            {/* Bottom */}
            <div className="flex items-center justify-between">
                <p className="text-pink-500 hover:text-pink-600 cursor-pointer">
                    #{Post.category}
                </p>
                <Button className="icons hover:bg-pink-500">
                    <ArrowRight />
                </Button>
            </div>
        </div>
    );
};

export default Card;
