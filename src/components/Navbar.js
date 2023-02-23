import React from 'react'

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center pt-3 font-bold text-sm">
        <div className="pr-44 pl-12">
            <img className="h-3 " src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tbG9nby13b3JkbWFyayB0ZHMtc2l0ZS1sb2dvLWljb24iIHZpZXdCb3g9IjAgMCAzNDIgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjFhOS43IDkuNyAwIDAgMCA3IDdoMTFsLjUuMXYyNy42aDYuOFY3LjNMMjYgN2gxMWE5LjggOS44IDAgMCAwIDctN0gwem0yMzguNiAwaC02Ljh2MzQuOEgyNjNhOS43IDkuNyAwIDAgMCA2LTYuOGgtMzAuM1Ywem0tNTIuMyA2LjhjMy42LTEgNi42LTMuOCA3LjQtNi45bC0zOC4xLjF2MjAuNmgzMS4xdjcuMmgtMjQuNGExMy42IDEzLjYgMCAwIDAtOC43IDdoMzkuOXYtMjFoLTMxLjJ2LTdoMjR6bTExNi4yIDI4aDYuN3YtMTRoMjQuNnYxNGg2Ljd2LTIxaC0zOHpNODUuMyA3aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxMy44aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxNC4xaDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3pNMzA4LjUgN2gyNmE5LjYgOS42IDAgMCAwIDctN2gtNDBhOS42IDkuNiAwIDAgMCA3IDd6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=" alt="Tesla Logo" />
        </div>

        <div className="hidden lg:inline justify-center">
            <ul className="flex flex-row text-[#171a20] hover:cursor-pointer">
                <li className="leading-5 py-2 px-4 hover:bg-black rounded hover:bg-opacity-5 transition duration-700 ">Model S</li>
                <li className="leading-5 py-2 px-4 hover:bg-black rounded hover:bg-opacity-5 transition duration-700">Model 3</li>
                <li className="leading-5 py-2 px-4 hover:bg-black rounded hover:bg-opacity-5 transition duration-700">Model X</li>
                <li className="leading-5 py-2 px-4 hover:bg-black rounded hover:bg-opacity-5 transition duration-700">Model Y</li>
                <li className="leading-5 py-2 px-4 hover:bg-black rounded hover:bg-opacity-5 transition duration-700">Solar Roof</li>
                <li className="leading-5 py-2 px-4 hover:bg-black rounded hover:bg-opacity-5 transition duration-700">Solar Panels</li>
            </ul>
        </div>

        <div className="hidden lg:inline justify-center pl-20 pr-4">
            <ul className="flex flex-row-reverse text-[#171a20] hover:cursor-pointer">
                <li className="leading-5 py-2 px-4 hover:bg-black rounded hover:bg-opacity-5 transition duration-700">Menu</li>
                <li className="leading-5 py-2 px-4 hover:bg-black rounded hover:bg-opacity-5 transition duration-700">Account</li>
                <li className="leading-5 py-2 px-4 hover:bg-black rounded hover:bg-opacity-5 transition duration-700">Shop</li>
            </ul>
        </div>

        <div className="lg:hidden">
            <button className="inline-flex items-center py-2 px-4 mr-2 rounded text-[#171a20] bg-black/5 hover:bg-black/10 ">Menu</button>
        </div>
    </div>
  )
}

export default Navbar
