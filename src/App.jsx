import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

export default function App() {

    const location = useLocation();

    return (
        <div className="full-page">

            <header className="header">

                <div className="container">

                    <div className="header-top">
                        <button><i class="fa-solid fa-download"></i> Steam'ı Yükleyin</button>
                        <Link>giriş</Link>
                        <div className="line-v"></div>
                        <p>dil</p>
                    </div>

                    <div className="header-bottom">
                        <Link to={'/'}>
                            <img src="./img/logo.png" alt="" />
                        </Link>

                        <ul className="nav">
                            <li>
                                <NavLink to={'/'}>MAĞAZA</NavLink>
                                {location.pathname === '/' && <div className="line-h"></div>}
                            </li>
                            <li>
                                <NavLink to={'/topluluk'}>TOPLULUK</NavLink>
                                {location.pathname === '/topluluk' && <div className="line-h"></div>}
                            </li>
                            <li>
                                <NavLink to={'/hakkinda'}>HAKKINDA</NavLink>
                                {location.pathname === '/hakkinda' && <div className="line-h"></div>}
                            </li>
                            <li>
                                <NavLink to={'/destek'}>DESTEK</NavLink>
                                {location.pathname === '/destek' && <div className="line-h"></div>}
                            </li>
                        </ul>
                    </div>

                </div>

            </header>

            <Outlet />

        </div>
    )
}