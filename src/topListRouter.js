import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import TopSongsComponent from "./TopSongs";
import TopArtistsComponent from "./TopArtist";
import TopAlbumsComponent from "./TopAlbums";

const TopListRouter = () => {
    return (
        <div className="min-h-screen  bg-gradient-to-r from-pink-950 via-[#1a001a] to-[#0d000d] text-white pt-20 ">
            <nav className="bg-opacity-0 py-4  m-0">
                <ul className="flex justify-center space-x-6 md:space-x-12 text-lg">
                    <li>
                        <Link 
                            to="TopSongs" 
                            className="relative group text-white font-bold tracking-wide uppercase hover:text-[#00D084] transition duration-300"
                        >
                            Songs
                            <span className="absolute bottom-0 left-0 w-0 h-[0.5px] bg-[#00D084] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="TopArtist" 
                            className="relative group text-white font-bold tracking-wide uppercase hover:text-[#00D084] transition duration-300"
                        >
                            Artists
                            <span className="absolute bottom-0 left-0 w-0 h-[0.5px] bg-[#00D084] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="TopAlbums" 
                            className="relative group text-white font-bold tracking-wide uppercase hover:text-[#00D084] transition duration-300"
                        >
                            Albums
                            <span className="absolute bottom-0 left-0 w-0 h-[0.5px] bg-[#00D084] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="p-6 max-w-6xl mx-auto">
                <Routes>
                    <Route path="/" element={<Navigate to="TopSongs" />}/>
                    <Route path="TopSongs" element={<TopSongsComponent />} />
                    <Route path="TopArtist" element={<TopArtistsComponent />} />
                    <Route path="TopAlbums" element={<TopAlbumsComponent />} />
                </Routes>
            </div>
        </div>
    );
};

export default TopListRouter;
