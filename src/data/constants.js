import React from 'react';

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
            <React.Fragment>Od <span className="highlighted">14 lat</span> wspieram osoby dorosłe w&nbsp;ich rozwoju językowym. Przeprowadziłam kilkadziesiąt
                kursów języka angielskiego ogólnego i&nbsp;biznesowego na różnych poziomach
                zaawansowania.</React.Fragment>,
            <React.Fragment>Jestem współautorką <span className="highlighted">specjalistycznego podręcznika języka angielskiego dla psychologów</span>,
                w&nbsp;oparciu o&nbsp;który przeprowadziłam kilka edycji mojego autorskiego kursu „Angielski w
                psychologii”
                z&nbsp;grupą poznańskich psychologów i&nbsp;psychoterapeutów.</React.Fragment>,
            <React.Fragment>Wychodząc naprzeciw potrzebom osób, które nie mają czasu lub możliwości uczestniczenia
                w&nbsp;moich kursach na żywo, oferuję <span className="highlighted">zajęcia przez Skype</span>.</React.Fragment>
        ]
    },
    english: [
        <React.Fragment><p>Chcesz być <span
            class="highlighted">na bieżąco z&nbsp;nowościami ze świata psychologii</span>?
            Walczysz czasem z&nbsp;tekstami specjalistycznymi z&nbsp;twojej dziedziny, które nie
            zostały jeszcze przetłumaczone? Czujesz, że coś cię omija, gdy koledzy po fachu
            udostępniają w&nbsp;mediach społecznościowych filmiki, czy memy, których nie jesteś w&nbsp;stanie
            zrozumieć?</p>
            <p>Jestem pewna, że posiadasz jakieś podstawy angielskiego. Kolejny krok to postanowienie
                <span class="highlighted">wspięcia się na jego wyższy poziom</span> oraz wytrwanie w&nbsp;tym
                postanowieniu. A ja - jestem od tego, żeby ci pomóc.</p></React.Fragment>,

        <React.Fragment>
            <p>Na naszych zajęciach skupimy się przede wszystkim na <span className="highlighted">poznaniu i&nbsp;użyciu właściwego słownictwa</span>.
                Bez obaw - nie zasypię cię listami wyjętych z&nbsp;kontekstu słówek do wykucia na
                pamięć. Nasze słownictwo będzie osadzone w odpowiednim kontekście (artykuły, czy filmy
                z&nbsp;interesującej
                cię dziedziny psychologii), zaprezentowane tak, żebyś nie tylko wiedział/a, co słowa
                znaczą, ale też, jak ich użyć (kolokacje!). Będziemy <span className="highlighted">regularnie wracać do poprzednich lekcji</span> tak,
                aby retencja słownictwa była u&nbsp;ciebie jak największa.</p>
        </React.Fragment>,

        <React.Fragment>
            <p>A co z&nbsp;gramatyką? Oczywiście, gramatyka jest ważna, jednak to nie ona będzie
                wyznaczać nam kierunek. Gdy zobaczę, że walczysz z&nbsp;jakimś czasem (Present Perfect -
                zgadłam?) - poświęcimy mu uwagę, ale <span
                    className="highlighted">zawsze w kontekście i&nbsp;świadomie</span>,
                nie mechanicznie i&nbsp;na zasadzie &bdquo;sztuka dla sztuki&rdquo;, bo to po prostu nie
                działa.</p>
            < p> Jeżeli masz jakieś pytania, <a href="#contact" className="highlighted contact-me">napisz do
                mnie</a>.</p>
        </React.Fragment>
    ],
    translations: [
        <React.Fragment>Oferuję tłumaczenia tekstów z&nbsp;dziedziny psychologii – zarówno artykułów z&nbsp;języka
            angielskiego na polski, jak i&nbsp;prac naukowych z&nbsp;języka polskiego na angielski.</React.Fragment>,
        <React.Fragment>Wykonuję również korekty i&nbsp;redakcje tłumaczeń dla klientów, którzy władają językiem
            angielskim, jednak chcieliby, żeby ich tekst został gruntownie zweryfikowany lub przeredagowany tak, aby był
            bardziej klarowny i&nbsp;lepszy stylistycznie.</React.Fragment>
    ],
    offer: {
        english: {
            title: <React.Fragment>„Angielski w&nbsp;psychologii” przez Skype</React.Fragment>,
            content: [
                {
                    type: <React.Fragment>Indywidualnie:</React.Fragment>,
                    price: <React.Fragment>80&nbsp;zł brutto/60&nbsp;min</React.Fragment>
                },
                {
                    type: <React.Fragment>Grupa dwuosobowa:</React.Fragment>,
                    price: <React.Fragment>50&nbsp;zł brutto/os./60&nbsp;min</React.Fragment>
                }
            ]
        },
        translations: {
            title: <React.Fragment>Tłumaczenia</React.Fragment>,
            content: [
                {
                    type: <React.Fragment>Tłumaczenia:</React.Fragment>,
                    price: <React.Fragment>40&nbsp;zł brutto/1&nbsp;strona tłumaczeniowa (1800&nbsp;znaków ze
                        spacjami)</React.Fragment>
                },
                {
                    type: <React.Fragment>Korekty tłumaczeń:</React.Fragment>,
                    price: <React.Fragment>15&nbsp;zł brutto/1&nbsp;strona tłumaczeniowa (1800&nbsp;znaków ze
                        spacjami)</React.Fragment>
                }
            ]
        }
    },
    contact: {
        details: {
            email: {
                title: "E-mail:",
                value: "k.lasocha@gmail.com"
            },
            phone: {
                title: "Telefon:",
                value: "600 829 261"
            }
        },
        available: {
            title: "Przykładowe godziny zajęć",
            hours: [
                "Poniedziałki 15:30 – 16:30",
                "Środy 15:30 – 16:30",
                "Poniedziałek 15:30 – 16:30"
            ]
        }

    }
};

//offset used for smooth scrolling
export const OFFSET_DESKTOP = '60px';
export const OFFSET_MOBILE = '280px';

//breakpoint below which the navbar collapses
export const MOBILE_BREAKPOINT = 768;


export const FILLER = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto aut beatae doloremque ducimus eligendi enim eveniet excepturi fuga fugiat ipsa magni nam nemo, nesciunt officia officiis perferendis qui, quisquam rem sapiente sunt tempore unde, voluptatum. Autem deserunt iste iusto officiis, quo reiciendis saepe. Ea et, iste iure molestiae molestias nam non voluptas! Corporis doloremque est eum eveniet, impedit nam nihil omnis optio placeat provident, qui quidem quisquam sint sit suscipit. Adipisci consequuntur, eius laboriosam obcaecati quidem ut. Maxime quibusdam quod vel. A alias autem consequatur eius et excepturi exercitationem illo ipsa ipsam libero maiores numquam odio quae quos, sunt temporibus veritatis. Aspernatur atque, delectus eos facere fugit numquam placeat quod repudiandae. Distinctio dolores nisi obcaecati. Atque, delectus ea earum est, excepturi iusto laudantium nam nemo neque nesciunt pariatur perferendis quo, quod. Accusamus atque commodi cum dolorem earum eligendi facilis fuga, ipsa ipsum minus, molestias nam odit optio quod soluta totam vero voluptates. Alias consequatur cupiditate error impedit, laborum maxime molestiae natus neque obcaecati officia qui quibusdam, quis rem repellat sed sit voluptates? Ad, ea et hic id ipsa iusto nemo numquam, obcaecati odio, quaerat quibusdam totam? Alias aliquid delectus dolor modi perferendis quasi quisquam vero! Accusantium aliquid animi aperiam architecto atque debitis dignissimos dolor dolores eligendi eveniet fugit illum maiores maxime modi, molestiae neque nihil non nulla praesentium quam qui quidem quisquam quos, sit unde veniam voluptatum. Eligendi, iusto, placeat? Accusamus atque consequatur error eum modi quas quisquam? Amet at consequuntur cum, ex impedit incidunt ipsum, iste iure nulla obcaecati porro quas saepe tempora? Deserunt dicta dolore earum in laborum officiis perferendis Wquae quo rerum totam! Asperiores assumenda, aut autem, distinctio dolorem doloribus eaque exercitationem illo ipsa itaque, molestias odit pariatur perspiciatis placeat possimus quidem sequi voluptate! Asperiores aut cum dolorem dolores eos et neque nulla odit, provident repudiandae.';