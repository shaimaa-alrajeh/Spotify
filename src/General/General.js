import Data from "../spotify_data.json";
import profile from "../Img/profile.jpg";
import Cards from "./Cards";

const DataLngth = () => Data.length;
const Songs = Data.filter((item) => item.episode_name === null);
const DateAndTime = Songs.map((item) => item.ts);

const SongPlay = () => {
  return Data.filter((item) => item.episode_name === null).length;
};

const TrackPlay = () => {
  const SongsTrackName = Songs.map((item) => item.master_metadata_track_name);

  return [...new Set(SongsTrackName)].length;
};

const TimeSongListen = () => {
  return Math.round(
    Songs.map((item) => item.ms_played).reduce((a, b) => a + b) /
      (1000 * 60 * 60)
  );
};

const AvgTimeNonSkipp = () => {
  const sumTime =
    Songs.filter((item) => item.skipped !== null || item.skipped !== false)
      .map((item) => item.ms_played)
      .reduce((a, b) => a + b) /
    (1000 * 60 * 60);

  const MyData = Songs.filter(
    (item) => item.skipped !== null || item.skipped !== false
  ).map((item) => item.ts);

  const Date = MyData.map((item) => item.slice(0, item.indexOf("T") - 1));

  const n = [...new Set(Date)].length;
  return Math.round(sumTime / n);
};

const _ = require("lodash");

const mostFrequent = (arr) => {
  let freq = _.countBy(arr);
  return _.maxBy(Object.keys(freq), (o) => freq[o]);
};

const HourLisiting = () => {
  const hour = DateAndTime.map((item) =>
    item.slice(item.indexOf("T") + 1, item.indexOf("T") + 3)
  );

  return mostFrequent(hour);
};

function SeasonLisiting() {
  const sesion = DateAndTime.map((item) =>
    item.slice(item.indexOf("-") + 1, item.indexOf("-") + 3)
  );
  const result = (month) => {
    if (month == "02" || month == "01" || month == "12") return "Winter";
    if (month == "03" || month == "04" || month == "05") return "Spring";
    if (month == "06" || month == "07" || month == "08") return "Summer";
    if (month == "09" || month == "10" || month == "11") return "Autumn";
  };
  const mostFRreq = mostFrequent(sesion);
  return result(mostFRreq);
}
function Fun() {
  return (
    <>
      <p>Song Play Is : {SongPlay()} </p>
      <p>Track Is : {TrackPlay()} </p>
      <p>Time Song Listen : {TimeSongListen()} Hour</p>
      <p>Avg Time Non-Skipping Song Listen : {AvgTimeNonSkipp()} </p>
      <p>Hour Lisiting : {HourLisiting()}</p>
      <p>Season : {SeasonLisiting()}</p>
      {DateAndTime[0]}
    </>
  );
}

function Profile() {
  return (
    <div className="bg-black py-28 flex flex-col items-center justify-center bg-gradient-to-r from-pink-950 via-[#1a001a] to-[#0d000d] sm:px-4 md:px-10 lg:px-20 xl:px-40">
      <div className="w-full max-w-7xl bg-gradient-to-b from-pink-500 via-purple-700 to-purple-1000 rounded-[50px] border-[6px] border-purple-700 flex flex-col items-center justify-center">
        <div className="bg-profilebg bg-cover bg-no-repeat rounded-t-[46px] h-full w-full bg-bottom flex flex-col items-center justify-center">
          <div className="relative mt-10 sm:mt-[80px] md:mt-[100px] self-start">
            <div className="w-[140px] sm:w-[160px] md:w-[180px] h-[140px] sm:h-[160px] md:h-[180px] rounded-full p-[6px] sm:p-[8px] md:p-[10px] bg-gradient-to-r from-green-300 via-pink-300 via-blue-400 to-purple-500 animate-border-rotate shadow-lg">
              <img
                src={profile}
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <ul className="flex flex-wrap justify-center items-center w-full max-w-4xl text-white font-medium text-sm sm:text-lg gap-2 sm:gap-6 p-2">
          <li className="hover:text-green-300 rounded-2xl py-1 sm:py-2 px-2 sm:px-4 ease-out duration-300 cursor-pointer hover:scale-[1.1]">
            <a href="#">Play Song</a>
          </li>
          <li className="hover:text-green-300 rounded-2xl py-1 sm:py-2 px-2 sm:px-4 ease-out duration-300 cursor-pointer hover:scale-[1.1]">
            <a href="#">Tracks</a>
          </li>
          <li className="hover:text-green-300 rounded-2xl py-1 sm:py-2 px-2 sm:px-4 ease-out duration-300 cursor-pointer hover:scale-[1.1]">
            <a href="#">Spent Time</a>
          </li>
          <li className="hover:text-green-300 rounded-2xl py-1 sm:py-2 px-2 sm:px-4 ease-out duration-300 cursor-pointer hover:scale-[1.1]">
            <a href="#">Avg Daily Listen</a>
          </li>
          <li className="hover:text-green-300 rounded-2xl py-1 sm:py-2 px-2 sm:px-4 ease-out duration-300 cursor-pointer hover:scale-[1.1]">
            <a href="#">Focus Hour</a>
          </li>
          <li className="hover:text-green-300 rounded-2xl py-1 sm:py-2 px-2 sm:px-4 ease-out duration-300 cursor-pointer hover:scale-[1.1]">
            <a href="#">Focus Season</a>
          </li>
        </ul>
      </div>

      <div className="w-full py-10">
        <Cards
          one={SongPlay()}
          two={TrackPlay()}
          three={TimeSongListen()}
          four={AvgTimeNonSkipp()}
          five={HourLisiting()}
          six={SeasonLisiting()}
        />
      </div>
    </div>
  );
}

function General() {
  return (
    <div className="flex flex-col w-full max-w-9xl mx-auto">
      <Profile />
    </div>
  );
}


export default General;
