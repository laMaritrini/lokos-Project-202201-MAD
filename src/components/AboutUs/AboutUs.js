import './AboutUs.scss';

export function AboutUs() {
    return (
        <div className="about">
            <h2 className="about__title"> About Us</h2>
            <div className="about__container">
                <p className="about__content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis magni dolorem fugit dolore veniam officia optio
                    nesciunt atque impedit nam amet illum expedita, adipisci
                    voluptatibus? Porro hic nemo suscipit sint.
                </p>
                <img
                    className="about__icon"
                    src="./assets/logo.svg"
                    alt="Oko logo"
                />
            </div>
        </div>
    );
}
