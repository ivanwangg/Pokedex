

export default function TopBar ({ id, onClick }) {

    return (
        <div className="flex flex-col w-full h-[4.4rem] justify-between shadow-sm bg-green-400">
            <p className="text-white ml-1 text-sm">
                PokéDex
            </p>
            <div className="flex flex-row justify-between items-end w-full px-4 pb-[0.1rem]">
                <button className="text-white font-bold text-[1.563rem]" onClick={() => {
                    if (id !== 1) {
                        onClick(id - 1)
                    }
                }}>
                    &#60;-
                </button>
                <p className="text-white text-2xl font-medium sm:text-[1.875rem] pb-2">
                    PokéDex
                </p>
                <button className="text-white font-bold text-[1.563rem]" onClick={() => {
                    onClick(id + 1)
                }}>
                    -&#62;
                </button>
            </div>
        </div>
    )
}