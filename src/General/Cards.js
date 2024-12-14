function Cards(probs) {
  return (
    <div className="d">
      <div className="col-span-3 md:col-span-2 flex flex-col items-center md:items-start gap-4 pt-16 px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-20 pb-8 pt-4 mx-auto">
          {/* Card 1 */}
          <div
            className="flex flex-col justify-center cursor-pointer items-center gap-2 border-2 border-dashed border-gray-500/50 p-4 rounded-md h-32 dark:text-gray-200 hover:border-solid border-[#7111ee] ease-out duration-500 hover:translate-y-[16px] text-white hover:bg-purple-900"
          >
            <span className="font-semibold text-base sm:text-lg text-center">
              You Played Song
            </span>
            <div className="flex gap-2 items-center">
              <span className="font-bold text-2xl sm:text-3xl md:text-4xl text-green-400">
                {probs.one}
              </span>
              <span className="font-semibold text-base sm:text-lg text-center">Times</span>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="flex flex-col justify-center items-center cursor-pointer gap-2 border-2 border-dashed border-gray-500/50 p-4 rounded-md h-32 dark:text-gray-200 hover:border-solid ease-out duration-1000 border-[#7111ee] hover:translate-y-[-16px] text-white hover:bg-purple-900"
          >
            <div className="flex gap-2 items-center">
              <span className="font-bold text-2xl sm:text-3xl md:text-4xl text-orange-300">
                {probs.two}
              </span>
              <span className="font-semibold text-base sm:text-lg text-center">
                Track Was Played
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="flex flex-col justify-center items-center gap-2 cursor-pointer border-2 border-dashed border-gray-500/50 p-4 rounded-md h-32 dark:text-gray-200 hover:border-solid ease-out duration-1000 hover:translate-y-[16px] border-[#7111ee] text-white hover:bg-purple-900"
          >
            <span className="font-semibold text-base sm:text-lg text-center">
              You Spent
            </span>
            <div className="flex gap-2 items-center">
              <span className="font-bold text-2xl sm:text-3xl md:text-4xl text-pink-400">
                {probs.three}
              </span>
              <span className="font-semibold text-base sm:text-lg text-center">
                Hour Listening
              </span>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="md:col-start-2 lg:col-auto flex flex-col justify-center cursor-pointer items-center gap-2 border-2 border-dashed border-gray-500/50 p-4 rounded-md h-32 dark:text-gray-200 hover:border-solid ease-out duration-1000 hover:translate-y-[-16px] border-[#7111ee] text-white hover:bg-purple-900"
          >
            <div className="flex gap-2 items-center">
              <span className="font-bold text-2xl sm:text-3xl md:text-4xl text-blue-300">
                {probs.four}
              </span>
            </div>
            <span className="font-semibold text-base sm:text-lg text-center">
              Hours Is Daily Average Time Spent Listening
            </span>
          </div>

          {/* Card 5 */}
          <div
            className="md:col-start-2 lg:col-auto flex flex-col justify-center items-center cursor-pointer gap-2 border-2 border-dashed border-gray-500/50 p-4 rounded-md h-32 dark:text-gray-200 hover:border-solid ease-out duration-1000 hover:translate-y-[16px] border-[#7111ee] text-white hover:bg-purple-900"
          >
            <div className="flex gap-2 items-center">
              <span className="font-bold text-2xl sm:text-3xl md:text-4xl text-green-200">
                {probs.five}
              </span>
            </div>
            <span className="font-semibold text-base sm:text-lg text-center">
              Is Most Hour You Listen To Music
            </span>
          </div>

          {/* Card 6 */}
          <div
            className="md:col-start-2 lg:col-auto flex flex-col justify-center items-center gap-2 cursor-pointer border-2 border-dashed border-gray-500/50 p-4 rounded-md h-32 dark:text-gray-200 hover:border-solid ease-out duration-1000 hover:translate-y-[-16px] border-[#7111ee] text-white hover:bg-purple-900"
          >
            <div className="flex gap-2 items-center">
              <span className="font-bold text-2xl sm:text-3xl md:text-4xl text-yellow-200">
                {probs.six}
              </span>
            </div>
            <span className="font-semibold text-base sm:text-lg text-center">
              Is Most Season You Listen To Music
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Cards;