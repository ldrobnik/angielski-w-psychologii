import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faPhone,
    faEnvelope,
    faClock
} from "@fortawesome/free-solid-svg-icons";


//offset used for smooth scrolling
export const OFFSET_DESKTOP = '60px';
export const OFFSET_MOBILE = '280px';

//breakpoint below which the navbar collapses
export const MOBILE_BREAKPOINT = 768;

//section names
export const SECTION_NAMES = [
    {
        id: 'o-mnie',
        name: <React.Fragment>O&nbsp;mnie</React.Fragment>
    },
    {
        id: 'angielski-w-psychologii',
        name: <React.Fragment>Angielski w&nbsp;psychologii</React.Fragment>
    },
    {
        id: 'tlumaczenia-w-psychologii',
        name: <React.Fragment>Tłumaczenia w&nbsp;psychologii</React.Fragment>
    },
    {
        id: 'oferta',
        name: <React.Fragment>Oferta</React.Fragment>
    },
    {
        id: 'kontakt',
        name: <React.Fragment>Kontakt</React.Fragment>
    }
];

//Text used on the website
export const WEBSITE_TEXT = {
    topBanner: {
        title: <React.Fragment>Angielski w&nbsp;psychologii</React.Fragment>,
        subtitle: <React.Fragment>Język angielski dla psychologów, psychoterapeutów i&nbsp;osób zainteresowanych
            psychologią</React.Fragment>,
        button: <React.Fragment>Oferta</React.Fragment>,
        backdropAltText: "Poznańskie Jeżyce"
    },
    about: {
        name: <React.Fragment>Katarzyna Łasocha-Nowak</React.Fragment>,
        description: <React.Fragment>Nauczycielka języka angielskiego i&nbsp;tłumaczka</React.Fragment>,
        altText: 'Katarzyna Łasocha-Nowak',
        details: [
            <React.Fragment>Od <span className="highlighted">14 lat</span> wspieram osoby dorosłe w&nbsp;ich rozwoju
                językowym. Przeprowadziłam kilkadziesiąt
                kursów języka angielskiego ogólnego i&nbsp;biznesowego na różnych poziomach
                zaawansowania.</React.Fragment>,
            <React.Fragment>Jestem współautorką <span className="highlighted">specjalistycznego podręcznika języka angielskiego dla psychologów</span>,
                w&nbsp;oparciu o&nbsp;który przeprowadziłam kilka edycji mojego autorskiego kursu „Angielski w
                psychologii”
                z&nbsp;grupą poznańskich psychologów i&nbsp;psychoterapeutów.</React.Fragment>,
            <React.Fragment>Wychodząc naprzeciw potrzebom osób, które nie mają czasu lub możliwości uczestniczenia
                w&nbsp;moich kursach na żywo, oferuję <span
                    className="highlighted">zajęcia przez Skype</span>.</React.Fragment>
        ]
    },
    english: {
        messages: [
            <React.Fragment><p>Chcesz być <span
                className="highlighted">na bieżąco z&nbsp;nowościami ze świata psychologii</span>?
                Walczysz czasem z&nbsp;tekstami specjalistycznymi z&nbsp;twojej dziedziny, które nie
                zostały jeszcze przetłumaczone?</p>
                <p>Czujesz, że coś cię omija, gdy koledzy po fachu
                    udostępniają w&nbsp;mediach społecznościowych filmiki czy memy, których nie jesteś w&nbsp;stanie
                    zrozumieć?</p>
                <p>Jestem pewna, że posiadasz jakieś podstawy angielskiego. Kolejny krok to postanowienie <span
                    className="highlighted">wspięcia się na jego wyższy poziom</span> oraz wytrwanie w&nbsp;tym
                    postanowieniu. A ja – jestem od tego, żeby ci pomóc.</p></React.Fragment>,

            <React.Fragment>
                <p>Na naszych zajęciach skupimy się przede wszystkim na <span
                    className="highlighted">poznaniu i&nbsp;użyciu właściwego słownictwa</span>. Bez obaw – nie zasypię cię listami wyjętych z&nbsp;kontekstu słówek do wykucia na
                    pamięć.</p>
                <p>Nasze słownictwo będzie osadzone w odpowiednim kontekście (artykuły, czy filmy
                    z&nbsp;interesującej
                    cię dziedziny psychologii), zaprezentowane tak, żebyś nie tylko wiedział/a, co słowa
                    znaczą, ale też, jak ich użyć (kolokacje!).</p>
                <p>Będziemy <span className="highlighted">regularnie wracać do poprzednich lekcji</span> tak,
                    aby retencja słownictwa była u&nbsp;ciebie jak największa.</p>
            </React.Fragment>,

            <React.Fragment>
                <p>A co z&nbsp;gramatyką? Oczywiście, gramatyka jest ważna, jednak to nie ona będzie
                    wyznaczać nam kierunek.</p>
                <p>Gdy zobaczę, że walczysz z&nbsp;jakimś czasem (Present Perfect -
                    zgadłam?) – poświęcimy mu uwagę, ale <span
                        className="highlighted">zawsze w kontekście i&nbsp;świadomie</span>,
                    nie mechanicznie i&nbsp;na zasadzie &bdquo;sztuka dla sztuki&rdquo;, bo to po prostu nie
                    działa.</p>
                <p> Jeżeli masz jakieś pytania, <AnchorLink href="#kontakt" offset={OFFSET_DESKTOP}
                                                             className="highlighted">napisz do
                    mnie</AnchorLink>.</p>
            </React.Fragment>
        ],
        altTexts: [
            "Podręcznik do nauki psychologii",
            "Podręcznik do nauki słownictwa",
            "Pomoce multimedialne"

        ]
    },
    translations: {
        messages: [
            <p>Oferuję <span
                className="highlighted">tłumaczenia tekstów z&nbsp;dziedziny psychologii</span> – zarówno artykułów
                z&nbsp;języka
                angielskiego na polski, jak i&nbsp;prac naukowych z&nbsp;języka polskiego na angielski.</p>,
            <p>Wykonuję również <span
                className="highlighted">korekty i&nbsp;redakcje tłumaczeń</span> dla klientów, którzy władają językiem
                angielskim, jednak chcieliby, żeby ich tekst został gruntownie zweryfikowany lub przeredagowany tak, aby
                był
                bardziej klarowny i&nbsp;lepszy stylistycznie.</p>
        ],
        altTexts: [
            "Laptop",
            "Zeszyt"

        ]
    },
    offer: {
        english: {
            title: <React.Fragment>Angielski w&nbsp;psychologii przez Skype</React.Fragment>,
            content: [
                {
                    type: <React.Fragment>Indywidualnie:</React.Fragment>,
                    price: <React.Fragment><span className="priceValue">100&nbsp;zł</span> brutto/60&nbsp;min</React.Fragment>
                },
                {
                    type: <React.Fragment>Grupa dwuosobowa:</React.Fragment>,
                    price: <React.Fragment><span
                        className="priceValue">70&nbsp;zł</span> brutto/os./60&nbsp;min</React.Fragment>
                },
                {
                    type: <React.Fragment>Pakiet 10&nbsp;lekcji<sup>*</sup>:</React.Fragment>,
                    price: <React.Fragment><span
                        className="priceValue">800&nbsp;zł</span> brutto</React.Fragment>
                }
            ],
            footnote: <React.Fragment>*Do wykorzystania w&nbsp;ciągu 12&nbsp;tygodni</React.Fragment>
        },
        translations: {
            title: <React.Fragment>Tłumaczenia w&nbsp;psychologii</React.Fragment>,
            content: [
                {
                    type: <React.Fragment>Tłumaczenia:</React.Fragment>,
                    price: <React.Fragment><span
                        className="priceValue">40&nbsp;zł</span> brutto/1&nbsp;strona
                        tłumaczeniowa*</React.Fragment>
                },
                {
                    type: <React.Fragment>Korekty tłumaczeń:</React.Fragment>,
                    price: <React.Fragment><span
                        className="priceValue">15&nbsp;zł</span> brutto/1&nbsp;strona
                        tłumaczeniowa*</React.Fragment>
                }
            ],
            footnote: <React.Fragment>*1800&nbsp;znaków ze spacjami</React.Fragment>
        }
    },
    contact: {
        details: [
            <React.Fragment>
                <FontAwesomeIcon
                    icon={faEnvelope}
                    className="contactIcon"
                />
                <a href="mailto: k.lasocha@gmail.com">k.lasocha@gmail.com</a>
            </React.Fragment>,
            <React.Fragment>
                <FontAwesomeIcon
                    icon={faPhone}
                    className="contactIcon"
                />
                600&nbsp;829&nbsp;261
            </React.Fragment>
        ],
        available: {
            title: <React.Fragment>Dostępne godziny zajęć</React.Fragment>,
            hours: [
                <div><FontAwesomeIcon
                    icon={faClock}
                    className="hoursIcon"
                />poniedziałki 15:30</div>,
                <div><FontAwesomeIcon
                    icon={faClock}
                    className="hoursIcon"
                />środy 15:30&nbsp;i&nbsp;16:30</div>,
                <div className="booked">
                    <FontAwesomeIcon
                    icon={faClock}
                    className="hoursIcon"
                />piątki 8:45</div>
            ],
            info: <React.Fragment>Więcej wolnych terminów od czerwca</React.Fragment>
        },
        copyrightNotice: <React.Fragment>&copy; 2020 Łukasz Drobnik</React.Fragment>
    }
};
