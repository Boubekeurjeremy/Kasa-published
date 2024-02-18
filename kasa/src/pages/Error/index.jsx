import { Link } from "react-router-dom";
import ERROR from "../../assets/404.png";
import "../../styles/css/prefixed/style.css";

function Error() {
    return (
        <div className="kasa__error">
            <img src={ERROR} alt="Error 404" className="kasa__error__number" />
            <h1 className="kasa__error__text">
                Oups! La page que vous demandez n'existe pas.{" "}
            </h1>
            <Link to="/" className="kasa__error__link">
                Retourner sur la page d'accueil
            </Link>
        </div>
    );
}


/*import { Link } from "react-router-dom";
import IMG from "../../assets/IMG.png";
import Card from "../../components/Cards";
import "../../styles/css/prefixed/style.css";
import { housingList } from "../../datas/housingList";

function Error() {
    return (
        <div>
            <div className="kasa__home">
                <img
                    src={IMG}
                    alt="Paysage d'une forêt"
                    className="kasa__home__image"
                />
                <h2 className="kasa__home__text">
                    Chez vous, partout et ailleurs
                </h2>
            </div>
            <div className="kasa__card">
                {housingList.map(({ id, cover, title }) => (
                    <Link
                        key={id}
                        to={"/housing/" + id + "/#"}
                        className="kasa__card__link"
                    >
                        <Card
                            key={`${cover}-${id}`}
                            cover={cover}
                            title={title}
                        />
                    </Link>
                ))}{" "}
            </div>
        </div>
    );
}*/

export default Error;
