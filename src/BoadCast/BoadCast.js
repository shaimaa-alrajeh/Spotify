import Data from "../spotify_data.json";
import Cards from "./Cards";

const DataLngth = () => Data.length;
const boadcast = Data.filter((item) => item.episode_name !== null);
const DateAndTime = boadcast.map((item) => item.ts);

const BoadcastPlay = () => {
  return Data.filter((item) => item.episode_name !== null).length;
};

const TrackPlay = () => {
  const boadcastTrackName = boadcast.map((item) => item.master_metadata_track_name);

  return [...new Set(boadcastTrackName)].length;
};

const TimeBoadcastListen = () => {
  return Math.round(
    boadcast.map((item) => item.ms_played).reduce((a, b) => a + b) /
      (1000 * 60 * 60)
  );
};

const AvgTimeNonSkipp = () => {
  const sumTime =
    boadcast.filter((item) => item.skipped !== null || item.skipped !== false)
      .map((item) => item.ms_played)
      .reduce((a, b) => a + b) /
    (1000 * 60 * 60);

  const MyData = boadcast.filter(
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
      <p>Boadcast Play Is : {BoadcastPlay()} </p>
      <p>Track Is : {TrackPlay()} </p>
      <p>Time Boadcast Listen : {TimeBoadcastListen()} </p>
      <p>Avg Time Non-Skipping Boadcast Listen : {AvgTimeNonSkipp()} </p>
      <p>Hour Lisiting : {HourLisiting()}</p>
      <p>Season : {SeasonLisiting()}</p>
      {DateAndTime[0]}
    </>
  );
}

// function Boad() {
//   return (
    
//   );
// }

function BoadCast() {
  return (
    <div className="bg-black flex flex-col items-center justify-center bg-gradient-to-r from-pink-950 via-[#1a001a] to-[#0d000d] sm:px-4 md:px-10 lg:px-20 xl:px-40 h-screen">
      <h1 className="font-bgfont text-white text-4xl mt-[40px]">BoadCast</h1>
      <div className="w-full ">
        <Cards
          one={BoadcastPlay()}
          two={TrackPlay()}
          three={TimeBoadcastListen()}
          four={AvgTimeNonSkipp()}
          five={HourLisiting()}
          six={SeasonLisiting()}
        />
      </div>
    </div>
  );
}


export default BoadCast;
