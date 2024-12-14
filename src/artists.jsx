import React, { useState } from 'react';  
import data from './spotify_data.json';  

const Artists = () => {  
    const [showMore, setShowMore] = useState(false);  
    const [selectedArtist, setSelectedArtist] = useState(null);  
    const [artistDetails, setArtistDetails] = useState({  
        season: '',  
        topSongs: [],  
        totalListeningTime: 0,  
        totalSongs: 0,  
        uniqueSongs: 0,  
        listeningPercentage: 0  
    });  
    const [showPopup, setShowPopup] = useState(false);  
    const [showAllSongs, setShowAllSongs] = useState(false);   

    const showToggle = () => {  
        setShowMore(!showMore);  
    };  

    const formatTime = (milliseconds) => {  
        const totalSeconds = Math.floor(milliseconds / 1000);  
        const hours = Math.floor(totalSeconds / 3600);  
        const minutes = Math.floor((totalSeconds % 3600) / 60);  
        const seconds = totalSeconds % 60;  

        return `${hours}h:${minutes}m:${seconds}s`;  
    };  
    const artistPlaytimeArray = [];  
    data.forEach(song => {  
        const artist = song.master_metadata_album_artist_name;  
        if (artist && !artistPlaytimeArray.some(item => item.artist === artist)) {  
            artistPlaytimeArray.push({ artist });  
        }  
    });  

    const Artists = artistPlaytimeArray.sort(() => Math.random());  
    const displayedSortedArtists = showMore ? Artists : Artists.slice(0, 10);  

    const getSeason = (month) => {  
        if (month === 12 || month <= 2) {  
            return 'Winter';  
        } else if (month >= 3 && month <= 5) {  
            return 'Spring';  
        } else if (month >= 6 && month <= 8) {  
            return 'Summer';  
        } else {  
            return 'Autumn';  
        }  
    };  

    const getArtistDetails = (artist) => {  
        const artistTracks = data.filter(song => song.master_metadata_album_artist_name === artist);  
        const songPlayTimes = {};  
        const monthPlayCounts = {};  
        let totalListeningTime = 0;  
        const uniqueTracks = new Set();  

        artistTracks.forEach(track => {  
            const trackName = track.master_metadata_track_name;  
            const msPlayed = track.ms_played || 0;  
            const date = new Date(track.ts);  
            const month = date.getMonth() + 1; 
            totalListeningTime += msPlayed;  

            uniqueTracks.add(trackName);  

            if (songPlayTimes[trackName]) {  
                songPlayTimes[trackName] += msPlayed;  
            } else {  
                songPlayTimes[trackName] = msPlayed;  
            }  

            if (monthPlayCounts[month]) {  
                monthPlayCounts[month] += msPlayed;  
            } else {  
                monthPlayCounts[month] = msPlayed;  
            }  
        }); 

        const topSongs = Object.entries(songPlayTimes)
            .map(([name, totalMs]) => ({ name, totalMs }))
            .sort((a, b) => b.totalMs - a.totalMs)
            .slice(0, 20);

        const mostListened = Object.entries(monthPlayCounts);
        const maxListenedValue = Math.max(...mostListened.map(item => item[1]));
        const mostListenedMonth = mostListened.find(item => item[1] === maxListenedValue);
        const monthNumber = parseInt(mostListenedMonth[0]);
        const season = getSeason(monthNumber);
        const totalOverallListeningTime = data.reduce((sum, track) => sum + (track.ms_played || 0), 0);
        const listeningPercentage = ((totalListeningTime / totalOverallListeningTime) * 100) || 0;

        return {
            topSongs,
            season,
            totalListeningTime,
            totalSongs: artistTracks.length,
            uniqueSongs: uniqueTracks.size,
            listeningPercentage
        };
    };

    const handleArtistSelect = (artist, index) => {
        setSelectedArtist({ artist, rank: index + 1 });
        const details = getArtistDetails(artist);
        setArtistDetails(details);
        setShowPopup(true);
        setShowAllSongs(false); 
    };

    const closePopup = () => {
        setShowPopup(false);
        setSelectedArtist(null);
    };

    const toggleShowAllSongs = () => {
        setShowAllSongs(!showAllSongs);
    };
    return (  
        <div className="relative py-24">  
            <div className="absolute inset-0 z-0">  
                <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-950 via-[#1a001a] to-[#0d000d] text-white ">  
                </div>  
            </div>  
            <div className="relative z-10 p-4">  
                <h1 className="text-3xl font-bold mb-4 text-center text-white">All Artists</h1>  
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">  
                    {displayedSortedArtists.map((item, index) => (  
                        <div  
                            key={index}  
                            className="bg-white bg-opacity-60 backdrop-blur-md shadow-lg rounded-lg p-4 cursor-pointer hover:bg-opacity-80 transition transform duration-200 ease-in-out hover:scale-105 hover:shadow-xl"  
                            onClick={() => handleArtistSelect(item.artist, index)}  
                        >  
                            <h3 className="text-lg font-semibold text-black">{item.artist}</h3>  
                        </div>  
                    ))}  
                </div>  
    
                <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-20">  
                    <button   
                        onClick={showToggle}   
                        className="bg-gray-700 mb-6 text-white px-6 py-2 rounded-lg hover:bg-violet-400 transition"    
                    >    
                        {showMore ? "Show Less" : "Show More"}  
                    </button>  
                </div>  
    
                {showPopup && selectedArtist && (  
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">  
                        <div className="bg-violet-300 rounded-lg p-6 w-11/12 sm:w-1/2 relative overflow-y-auto max-h-[80vh]">  
                            <button onClick={closePopup} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl">&times;</button>  
                            <h2 className="text-2xl font-bold mb-4">Details for {selectedArtist.artist}</h2>  
                            <p>Rank: {selectedArtist.rank}</p>  
                            <p>Most Listened Season: {artistDetails.season}</p>  
                            <p>Total Listening Time: {formatTime(artistDetails.totalListeningTime)}</p>  
                            <p>Total Songs: {artistDetails.totalSongs}</p>  
                            <p>Unique Songs: {artistDetails.uniqueSongs}</p>  
                            <p>Listening Percentage: {artistDetails.listeningPercentage.toFixed(2)}%</p>  
                            <h3 className="text-xl font-semibold mt-4">Top Songs:</h3>  
                            <ul className="list-disc pl-6">  
                                {(showAllSongs ? artistDetails.topSongs : artistDetails.topSongs.slice(0, 5)).map((song, index) => (  
                                    <li key={index}>  
                                        {song.name} - {formatTime(song.totalMs)}  
                                    </li>  
                                ))}  
                            </ul>  
                            <button  
                                onClick={toggleShowAllSongs}  
                                className="mt-4 bg-violet-700 text-white px-4 py-2 rounded-lg hover:bg-violet-900 transition"  
                            >  
                                {showAllSongs ? "Show Less" : "Show More"}  
                            </button>  
                        </div>  
                    </div>  
                )}  
            </div>  
        </div>  
    );  
}; 
export default Artists;
