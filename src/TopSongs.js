import React, { useState } from "react";
import data from "./spotify_data.json"

const TopSongsComponent = () => {
    const [showMore, setShowMore] = useState(false)
    const [filter, setFilter] = useState(false)

    const filterToggle = () => {
        setFilter(!filter)
    }


    const showToggle = () => {
        setShowMore(!showMore)
    }

    const songsPlaytimeArray = [];

    const now = new Date();
    const sameDateLastYear = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate())
    const filtered = filter
        ? data.filter(item => {
            const itemDate = new Date(item.ts);
            console.log("Item date:", itemDate);
            return itemDate >= sameDateLastYear;
        })
        : data;

    filtered.forEach(song => {
        const trackName = song.master_metadata_track_name;
        const playtime = song.ms_played;

        if (trackName) {
            const trackEntry = songsPlaytimeArray.find(entry => entry.trackName === trackName);

            if (trackEntry) {
                trackEntry.playtime += playtime;
            } else {
                songsPlaytimeArray.push({ trackName: trackName, playtime: playtime });
            }
        }
    });

    const sortedSongs = songsPlaytimeArray.sort((a, b) => b.playtime - a.playtime).slice(0, 100);

    const displayedSortedSongs = showMore ? sortedSongs : sortedSongs.slice(0, 5)


    return (
        <div className="m-6 p-6 max-w-4xl mx-auto bg-opacity-80 hover:bg-opacity-100 transition-all ease-in duration-200 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-left mb-6 text-white ">Top Songs</h1>
            <button
                onClick={filterToggle}
                className="mb-4 text-sm font-medium text-white hover:text-[#00D084] transition duration-300 flex justify-between gap-3 items-center"
            >
                
                <p>{filter ? "Show All Time" : "Show Last Year"}</p>
                <span class="material-symbols-outlined">
                    change_circle
                </span>
            </button>
            <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
                <thead>
                    <tr className="bg-gray-900 text-white">
                        <th className="py-3 px-4"></th>
                        <th className="py-3 px-4 text-left">Rank</th>
                        <th className="py-3 px-4 text-left">Song</th>
                        <th className="py-3 px-4 text-left">Playtime</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                    {displayedSortedSongs.map((entry, index) => {
                        const totalMinutes = Math.floor(entry.playtime / 1000 / 60);
                        const hours = Math.floor(totalMinutes / 60);
                        const minutes = totalMinutes % 60;

                        let medalColor = '';
                        if (index === 0) {
                            medalColor = 'text-[#FFD700]';
                        } else if (index === 1) {
                            medalColor = 'text-[#C0C0C0]';
                        } else if (index === 2) {
                            medalColor = 'text-[#cd7f32]';
                        } else {
                            medalColor = 'text-white';
                        }

                        return (
                            <tr key={index} className={`hover:bg-gray-700 transition duration-300 ${medalColor}`}>
                                <td className="py-4 px-4">
                                    <img
                                        src={`https://via.placeholder.com/50`} // 
                                        alt={entry.artist}
                                        className="w-10 h-10 rounded-full" // 
                                    />
                                </td>
                                <td className="py-4 px-4">{index + 1}</td>
                                <td className="py-4 px-4">{entry.trackName}</td>
                                <td className={`py-4 px-4 ${medalColor}`}>{hours}h {minutes}m</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className={showMore ? "sticky bottom-0 bg-opacity-0 p-4" : "bottom-0 bg-opacity-0 p-4"}>
                <button
                    onClick={showToggle}
                    className="relative group text-xs md:text-sm font-medium text-white bg-opacity-0 hover:text-[#00D084] transition duration-300 py-2 px-3 md:py-3 md:px-4"
                >
                    {showMore ? "Show Less" : "Show More"}
                    <span className="absolute bottom-0 left-0 w-0 h-[0.5px] bg-[#00D084] transition-all duration-300 group-hover:w-full"></span>
                </button>
            </div>
        </div>
    );

}

export default TopSongsComponent