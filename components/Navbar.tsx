import React from "react";
import Link from "next/link";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
    const session = await auth();
    return (
        <header className="bg-white sticky top-0 px-5 py-3 shadow-sm">
            <nav className="flex items-center justify-between">
                <Link href="/">
                    <h1 className="font-bold text-2xl">Startnow</h1>
                </Link>

                <div className="flex items-center gap-5 text-gray-800">
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">Create</Link>
                            <form
                                action={async () => {
                                    "use server";
                                    await signOut({ redirectTo: "/" });
                                }}
                            > 
                                <button>Signout</button>
                            </form>
                            <Link href={`/users/${session?.id}`}>
                                {session?.user?.name}
                            </Link>
                        </>
                    ) : (
                        <>
                            <form
                                action={async () => {
                                    "use server";
                                    await signIn("github");
                                }}
                            >
                                <button>Login</button>
                            </form>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
