import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

//offset used for smooth scrolling
export const OFFSET_DESKTOP = "60";
export const OFFSET_MOBILE = "360";

//280

//breakpoint below which the navbar collapses
export const MOBILE_BREAKPOINT = 992;

//section names
export const SECTION_NAMES = {
  main: [
    {
      id: "o-mnie",
      name: <React.Fragment>O&nbsp;mnie</React.Fragment>,
    },
    {
      id: "angielski-w-psychologii",
      name: <React.Fragment>Angielski w&nbsp;psychologii</React.Fragment>,
    },
    {
      id: "tlumaczenia-w-psychologii",
      name: <React.Fragment>Tłumaczenia w&nbsp;psychologii</React.Fragment>,
    },
    {
      id: "oferta",
      name: <React.Fragment>Oferta</React.Fragment>,
    },
    {
      id: "kontakt",
      name: <React.Fragment>Kontakt</React.Fragment>,
    },
  ],
  blog: [
    {
      id: "lekcje",
      name: <React.Fragment>Pozostałe lekcje</React.Fragment>,
    },
  ],
};

//Text used on the website
export const WEBSITE_TEXT = {
  pageTitle: {
    core: "Angielski w psychologii",
    main: "Katarzyna Łasocha-Nowak",
  },
  navbar: {
    blogLink: {
      name: "Pobierz lekcję",
      url: "/pobierzlekcje/",
    },
    homeLink: {
      name: "Strona główna",
      url: "/",
    },
    facebookLink: {
      name: (
        <React.Fragment>
          <FontAwesomeIcon icon={faFacebookSquare} className="facebookIcon" />
          Facebook
        </React.Fragment>
      ),
      url: "https://www.facebook.com/Angielski-w-psychologii-111402360575036/",
    },
  },
  homeLink: {
    name: "Strona główna",
    url: "/",
  },
  topBanner: {
    title: <React.Fragment>Angielski w&nbsp;psychologii</React.Fragment>,
    subtitle: (
      <React.Fragment>
        Język angielski dla psychologów, trenerów i&nbsp;osób zainteresowanych
        psychologią
      </React.Fragment>
    ),
    button: <React.Fragment>Oferta</React.Fragment>,
    backdropAltText: "Poznańskie Jeżyce",
  },
  about: {
    name: <React.Fragment>Katarzyna Łasocha-Nowak</React.Fragment>,
    description: (
      <React.Fragment>
        Lektorka języka angielskiego i&nbsp;tłumaczka
      </React.Fragment>
    ),
    altText: "Katarzyna Łasocha-Nowak",
    details: [
      <React.Fragment>
        <p>
          Od 16&nbsp;lat wspieram osoby dorosłe w&nbsp;ich rozwoju językowym.
          Przeprowadziłam{" "}
          <span className="highlighted">
            kilkadziesiąt kursów języka angielskiego
          </span>{" "}
          ogólnego i&nbsp;specjalistycznego na różnych poziomach zaawansowania.
        </p>
        <p>
          Obecnie prowadzę zajęcia Business English w&nbsp;firmach, angielskiego
          ogólnego, akademickiego i&nbsp;psychologicznego ze studentami
          i&nbsp;pracownikami uniwersytetu SWPS oraz ogólnego
          i&nbsp;psychologicznego z&nbsp;klientami indywidualnymi.
        </p>
      </React.Fragment>,
      <React.Fragment>
        Jestem współautorką{" "}
        <span className="highlighted">
          specjalistycznego podręcznika języka angielskiego dla psychologów
        </span>
        , w&nbsp;oparciu o&nbsp;który przeprowadziłam kilka edycji mojego
        autorskiego kursu „Angielski w psychologii” z&nbsp;grupą poznańskich
        psychologów i&nbsp;psychoterapeutów.
      </React.Fragment>,
      <React.Fragment>
        Wychodząc naprzeciw potrzebom osób, które nie mają czasu lub możliwości
        uczestniczenia w&nbsp;moich kursach na żywo, oferuję{" "}
        <span className="highlighted">zajęcia&nbsp;online</span>.
      </React.Fragment>,
    ],
  },
  english: {
    messages: [
      <React.Fragment>
        <p>
          Chcesz być{" "}
          <span className="highlighted">
            na bieżąco z&nbsp;nowościami ze świata psychologii
          </span>
          ? Walczysz czasem z&nbsp;tekstami specjalistycznymi z&nbsp;twojej
          dziedziny, które nie zostały jeszcze przetłumaczone?
        </p>
        <p>
          Czujesz, że coś cię omija, gdy koledzy po fachu udostępniają
          w&nbsp;mediach społecznościowych filmiki czy memy, których nie jesteś
          w&nbsp;stanie zrozumieć?
        </p>
        <p>
          Jestem pewna, że posiadasz jakieś podstawy angielskiego. Kolejny krok
          to postanowienie{" "}
          <span className="highlighted">
            wspięcia się na jego wyższy poziom
          </span>{" "}
          oraz wytrwanie w&nbsp;tym postanowieniu. A ja – jestem od tego, żeby
          ci pomóc.
        </p>
      </React.Fragment>,

      <React.Fragment>
        <p>
          Na naszych zajęciach skupimy się przede wszystkim na{" "}
          <span className="highlighted">
            poznaniu i&nbsp;użyciu właściwego słownictwa
          </span>
          . Bez obaw – nie zasypię cię listami wyjętych z&nbsp;kontekstu słówek
          do wykucia na pamięć.
        </p>
        <p>
          Nasze słownictwo będzie osadzone w odpowiednim kontekście (artykuły,
          czy filmy z&nbsp;interesującej cię dziedziny psychologii),
          zaprezentowane tak, żebyś nie tylko wiedział/a, co słowa znaczą, ale
          też, jak ich użyć (kolokacje!).
        </p>
        <p>
          Będziemy{" "}
          <span className="highlighted">
            regularnie wracać do poprzednich lekcji
          </span>{" "}
          tak, aby retencja słownictwa była u&nbsp;ciebie jak największa.
        </p>
      </React.Fragment>,

      <React.Fragment>
        <p>
          A co z&nbsp;gramatyką? Oczywiście, gramatyka jest ważna, jednak to nie
          ona będzie wyznaczać nam kierunek.
        </p>
        <p>
          Gdy zobaczę, że walczysz z&nbsp;jakimś czasem (Present Perfect –
          zgadłam?) – poświęcimy mu uwagę, ale{" "}
          <span className="highlighted">
            zawsze w kontekście i&nbsp;świadomie
          </span>
          , nie mechanicznie i&nbsp;na zasadzie &bdquo;sztuka dla sztuki&rdquo;,
          bo to po prostu nie działa.
        </p>
        <p>
          {" "}
          Jeżeli masz jakieś pytania,{" "}
          <span className="inlineLink">
            {" "}
            <AnchorLink
              href="#kontakt"
              offset={OFFSET_DESKTOP}
              className="highlighted"
            >
              napisz do mnie
            </AnchorLink>
          </span>
          .
        </p>
      </React.Fragment>,
    ],
    altTexts: [
      "Podręcznik do nauki psychologii",
      "Podręcznik do nauki słownictwa",
      "Pomoce multimedialne",
    ],
  },
  translations: {
    messages: [
      <React.Fragment>
        <p>
          Oferuję{" "}
          <span className="highlighted">
            tłumaczenia tekstów z&nbsp;dziedziny psychologii
          </span>{" "}
          – zarówno artykułów z&nbsp;języka angielskiego na polski, jak
          i&nbsp;prac naukowych z&nbsp;języka polskiego na angielski.
        </p>
        <p>
          {" "}
          <span className="inlineLink">
            <AnchorLink
              href="#kontakt"
              offset={OFFSET_DESKTOP}
              className="highlighted"
            >
              Napisz do mnie
            </AnchorLink>
          </span>
          , aby uzyskać darmową wycenę.
        </p>
      </React.Fragment>,
      <p>
        Wykonuję również{" "}
        <span className="highlighted">korekty i&nbsp;redakcje tłumaczeń</span>{" "}
        dla klientów, którzy władają językiem angielskim, jednak chcieliby, żeby
        ich tekst został gruntownie zweryfikowany lub przeredagowany tak, aby
        był bardziej klarowny i&nbsp;lepszy stylistycznie.
      </p>,
    ],
    altTexts: ["Laptop", "Zeszyt"],
  },
  offer: {
    english: {
      title: (
        <React.Fragment>Angielski w&nbsp;psychologii online</React.Fragment>
      ),
      content: [
        {
          type: <React.Fragment>Zajęcia indywidualne:</React.Fragment>,
          explanation: "",
          price: (
            <React.Fragment>
              <span className="priceValue">150&nbsp;zł</span> brutto/55&nbsp;min
            </React.Fragment>
          ),
        },
        {
          type: <React.Fragment>Zajęcia grupowe:</React.Fragment>,
          explanation: "",
          price: (
            <React.Fragment>
              <span className="priceValue">60&nbsp;zł</span>{" "}
              brutto/os./55&nbsp;min
            </React.Fragment>
          ),
        },
        {
          type: (
            <React.Fragment>
              Konsultacje indywidualne<sup>*</sup>:
            </React.Fragment>
          ),
          explanation: (
            <React.Fragment>
              <sup>*</sup>Od 1 do 5&nbsp;spotkań, podczas których pomogę ci się
              przygotować do rozmowy kwalifikacyjnej lub egzaminu na uczelni
              albo pomogę doszlifować prezentację, webinar, warsztaty czy
              szkolenie w&nbsp;języku angielskim.
            </React.Fragment>
          ),
          price: (
            <React.Fragment>
              <span className="priceValue">150&nbsp;zł</span> brutto/55&nbsp;min
            </React.Fragment>
          ),
        },
      ],
    },
    translations: {
      title: <React.Fragment>Tłumaczenia w&nbsp;psychologii</React.Fragment>,
      content: [
        {
          type: <React.Fragment>Tłumaczenia:</React.Fragment>,
          price: (
            <React.Fragment>
              <span className="priceValue">40&nbsp;zł</span>{" "}
              brutto/1&nbsp;strona tłumaczeniowa*
            </React.Fragment>
          ),
        },
        {
          type: <React.Fragment>Korekty tłumaczeń:</React.Fragment>,
          price: (
            <React.Fragment>
              <span className="priceValue">15&nbsp;zł</span>{" "}
              brutto/1&nbsp;strona tłumaczeniowa*
            </React.Fragment>
          ),
        },
      ],
      footnote: <React.Fragment>*1800&nbsp;znaków ze spacjami</React.Fragment>,
    },
    specialOffer: {
      title: <React.Fragment>Zajęcia dla zapracowanych</React.Fragment>,
      content: (
        <React.Fragment>
          <p>
            W każdy piątek o&nbsp;11:45 odbywają się otwarte zajęcia grupowe.{" "}
            <span className="highlighted inlineLink">
              <a href="mailto:k.lasocha@gmail.com">Możesz do nich dołączyć</a>
            </span>{" "}
            i uczestniczyć w&nbsp;nich tak często, jak tylko chcesz
            i&nbsp;możesz. Co tydzień realizujemy inny temat. Poziom uczestników
            to B1/B2. Koszt jednych zajęć to 25&nbsp;zł. Brzmi ciekawie?{" "}
            <span className="highlighted inlineLink">
              <a href="mailto:k.lasocha@gmail.com">Napisz do mnie.</a>
            </span>
          </p>
        </React.Fragment>
      ),
    },
    posterAltTexts: [
      "Angielski w psychologii, semestr pierwszy - tematy: depression, mindset, addiction, procrastination, relationship challenges. Piętnaście spotkań w kameralnej grupie. Cena: 1050 złotych lub 4 razy 270 złotych, online, środy od piętnastej do szesnastej. Terminy do ustalenia",
      "Angielski w psychologii, semestr drugi - tematy: eating disorders, personality, grief, vulnerability, thinking fast and slow. Piętnaście spotkań w kameralnej grupie. Cena: 1050 złotych lub 4 razy 270 złotych, online, środy od piętnastej do szesnastej. Terminy do ustalenia",
      "Angielski w psychologii, semestr trzeci - tematy: anxiety disorders, trauma, positive psychology, work psychology, personality disorders. Piętnaście spotkań w kameralnej grupie. Cena: 1050 złotych lub 4 razy 270 złotych, online, środy od piętnastej do szesnastej. Terminy do ustalenia",
    ],
  },
  contact: {
    details: [
      <React.Fragment>
        <FontAwesomeIcon icon={faEnvelope} className="contactIcon" />
        <a href="mailto: k.lasocha@gmail.com">k.lasocha@gmail.com</a>
      </React.Fragment>,
      <React.Fragment>
        <FontAwesomeIcon icon={faPhone} className="contactIcon" />
        600&nbsp;829&nbsp;261
      </React.Fragment>,
      <React.Fragment>
        <FontAwesomeIcon icon={faFacebookSquare} className="contactIcon" />
        <a
          href="https://www.facebook.com/Angielski-w-psychologii-111402360575036/"
          target="_blank"
          rel="noopener noreferrer"
        >
          fanpage
        </a>
      </React.Fragment>,
    ],
    available: {
      title: <React.Fragment>Umów się na zajęcia:</React.Fragment>,
      buttonMessage: <React.Fragment>k.lasocha@gmail.com</React.Fragment>,
      buttonUrl: "mailto:k.lasocha@gmail.com",
    },
    copyrightNotice: (
      <React.Fragment>
        &copy; 2022 Łukasz Drobnik & Katarzyna Łasocha-Nowak
      </React.Fragment>
    ),
  },
  blog: {
    banner: {
      title: <React.Fragment>Angielski w&nbsp;psychologii</React.Fragment>,
      subtitle: <React.Fragment>Lekcja do pobrania</React.Fragment>,
    },
    errorMessage: {
      title: "Błąd ładowania treści",
      content: "Przepraszamy za usterkę. Spróbuj ponownie później.",
    },
    backToTop: "Powrót",
    readMore: "<div>Czytaj więcej</div>",
  },
};

//array containing unused Wordpress classes to be removed from blog content
export const STRINGS_TO_REMOVE = [
  ' class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"',
  ' class="wp-block-embed__wrapper"',
  ' class="wp-block-quote"',
  ' class="wp-block-image size-large"',
  ' class="wp-block-image size-large"',
];

//array containing text to be replaced from blog content, with new text - to make file links open in a new tab
export const STRINGS_TO_REPLACE = [
  ["<a", '<a target="_blank" rel="noopener noreferrer"'],
];
