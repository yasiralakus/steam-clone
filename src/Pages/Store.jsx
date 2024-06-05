import { Link } from "react-router-dom";

export default function Store() {


    return (
        <>
            <div className="store-page-hero">

                <div className="store-page-hero-nav">
                    <div className="container">
                        <ul>
                            <li><Link>Mağazanız</Link></li>
                            <li><Link>Yeni ve Kayda Değer</Link></li>
                            <li><Link>Kategoriler</Link></li>
                            <li><Link>Puan Dükkanı</Link></li>
                            <li><Link>Haberler</Link></li>
                            <li><Link>Laboratuvar</Link></li>
                        </ul>

                        <div>
                            <form>
                                <input type="text" placeholder="ara"/>
                                <button><img src="./img/button-icon.png" alt="" /></button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}