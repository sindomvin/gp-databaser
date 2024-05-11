//test1.database.js
var verDatabase = "test1.database.js";
var database = [
    { 
        //Dette objekt bestemmer rækkefølgen af emnerne og skal være øverst.
        //Her i ligger alle de emner man kan vælge i mellem
        name: "Emene Rækkefølge bestemmer",
        theme: [
            "English",
            "Dansk",
            "Introducerende",
            
            "Pengeskabelse",
            "Betalingssystemer",
            "Pengereform",
            "EU",
            
            "Pengepolitik",
            
            "Centralbanker",
            "Banker",
            "Den finansielle sektor",
            "Skyggebanker",
            
            "Kontanter",
            "CBDC",
            "Kryptovaluta",
            "Lokalvaluta",
            
            "Pengehistorie",
            "Pengeteori",
            
            "Finanskrise",
            "Boligmarkedet",
            "Kapitalismekritik",
            "Grøn omstilling",
            "Økonomisk ulighed",
            "Demokrati"
            ]    
    },
    {
        //skabelon, kopier fra "{" linjen over denne til "}," indsæt så efter "}," for at lave en ny reference
        //udfyld derefter med info for referencen
        name: 'Skabelon for en reference', //navn
        type: 'Artikel', //mediet, vælges imellem: 'Artikel', 'Bog', 'Film' og 'Podcast'
        rating: 3, //kvaliteten, tal mellem 1-10
        price: 0.00, //Pris for at tilgå referencen
        date: '2021-11-29', //tilblivesesdato for det man referer til, år-månded-dag
        authors: 'forfatter', //forfatter eller forfattere
        theme: ['Demokrati', 'Pengeskabelse'], //Emnerne på denne form ['Emne1', 'Emne2', 'Emne3']. Det skal være med stort forbogstav
        description: 'Obejkt til kopiering', //Beskrivelse af den specifikke Artikel, bog osv.
        link: "https://www.godepenge.dk", //link 
        image: "", //link til billede
    },
    {
        //Et eksempel
        name: "Demokratiser pengeskabelsen og indfri den grønne omstilling", //Bemærk det er skrevet mellem anførselstegnene
        type: "Artikel", //Kun et medie og skrevet med stort forbogstav
        rating: 10, //uden anførselstegn
        price: 0.00, //med 2 decimaler, uden anførselstegn
        date: "2021-11-29", //med anførselstegn
        authors: "Mads Thunestvedt, Andrea Thorup", //komma sepererer forfattere, med anførselstegn om det hele
        theme: ["Demokrati", "Grøn omstilling", "Pengeskabelse"], //om hvert emne er der anførselstegn
        description: "Banker skaber penge – mange penge: Pengemængden stiger, og det har den de sidste mange årtier gjort med cirka 70 milliarder kroner om året, sidste år med hele 140 milliarder.<br>Banker er private virksomheder, og derfor udsteder de lån – altså penge – til formål, som er profitable og sikre for banken. Som oftest faste aktiver. Cirka 75 procent af udlån i danske banker er boligrelaterede. Meget få er til regenerativt jordbrug. <br> <br> Derfor burde vi spørge os selv om private virksomheder er et smart sted at placere kernen i den samfundskritiske institution,som pengesystemet er, nemlig pengeskabelsen. Og derfor er det essentielt, at vi begynder at inkludere pengeskabelsen i debatten om mulighederne for den grønne omstilling.", 
        //kun linje skift der hvor der står "<br>"
        link: "https://klimamonitor.dk/debat/art8482256/Demokratiser-pengeskabelsen-og-indfri-den-grønne-omstilling",
        image: "https://images.squarespace-cdn.com/content/v1/587382daebbd1a717d8e9df3/7a3a4aff-519f-4d00-acd4-969b8503a575/Udklipklimademo.PNG?format=1000w",
    },
    {
        //skabelon, kopier fra "{" linjen over denne til "}," indsæt så efter "}," for at lave en ny reference
        //udfyld derefter med info for referencen
        name: 'Penge som tryllestøv', //navn
        type: 'Bog', //mediet, vælges imellem: 'Artikel', 'Bog', 'Film' og 'Podcast'
        rating: 10, //kvaliteten, tal mellem 1-10
        price: 0.00, //Pris for at tilgå referencen
        date: '2019-01-01', //tilblivesesdato for det man referer til, år-månded-dag
        authors: 'Ib Ravn', //forfatter eller forfattere
        theme: ['Banker', 'Dansk', 'Introducerende', 'Pengeskabelse', 'Centralbanker', 'Kontanter', 'Pengehistorie', 'Pengeteori', 'Demokrati'], //Emnerne på denne form ['emne1', 'emne2', 'emne3']
        description: 'Introducerende bla bla af GPs Ib blabla. <br>Bogen kan købes i papir her blabla og lånes gratis blabla', //Beskrivelse af den specifikke Artikel, bog osv.
        link: "https://www.godepenge.dk", //link 
        image: "data:image/jpeg;base64,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", //link til billede
    },
    {
        name: 'Debt – the first 5000 years', //navn
        type: 'Bog', //mediet, vælges imellem: 'Artikel', 'Bog', 'Film' og 'Podcast'
        rating: 9, //kvaliteten, tal mellem 1-10
        price: 0.00, //Pris for at tilgå referencen
        date: '2011-01-01', //tilblivesesdato for det man referer til, år-månded-dag
        authors: 'David Graeber', //forfatter eller forfattere
        theme: ['Pengehistorie', 'Pengeteori', 'Økonomisk ulighed', 'Den finansielle sektor', 'Demokrati', 'Pengeskabelse', 'English'], //Emnerne på denne form ['Emne1', 'Emne2', 'Emne3']. Det skal være med stort forbogstav
        description: 'Lang og detaljeret bog om pengenes historie, som grundigt viser hvordan penge også de seneste 5000 år altid har været baseret på gæld. I kapitlet "The myth of barter" gennemgår Graeber hvordan og hvorfor mainstream økonomis falske historie om fortidens bytteøkonomi er opstået, og fastholdes idag, som et forsøg på afpolitisering af penge. <br><br>En fuldstændig fremragende bog om pengeteori, meget velskrevet – og for nørder med en til tider underspillet humor. <br><br>Kan sikkert både lånes på biblioteket og købes diverse steder i papir, e-bog og lydbog. ', //Beskrivelse af den specifikke Artikel, bog osv.
        link: "https://warwick.ac.uk/fac/arts/english/currentstudents/undergraduate/modules/fulllist/special/statesofdamage/syllabus201516/graeber-debt_the_first_5000_years.pdf", //link 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkSAEs74_c5F0mNj9DxIZAYWIuZbBXjeXWVtgd_7vACg&s", //link til billede
    },
    {
        name: 'Doughnut økonomi', //navn
        type: 'Bog', //mediet, vælges imellem: 'Artikel', 'Bog', 'Film' og 'Podcast'
        rating: 3, //kvaliteten, tal mellem 1-10
        price: 200.00, //Pris for at tilgå referencen
        date: '2018-01-01', //tilblivesesdato for det man referer til, år-månded-dag
        authors: 'Kate Raworth', //forfatter eller forfattere
        theme: ['Lokalvaluta', 'Den finansielle sektor', 'Kapitalismekritik', 'Grøn omstilling', 'Dansk', 'English'], //Emnerne på denne form ['Emne1', 'Emne2', 'Emne3']. Det skal være med stort forbogstav
        description: 'I bogen, der omhandler hele økonomifaget og økonomien – og potentialet for en grøn omstilling – er der også ét kapitel om hvordan pengesystemet har med sagen at gøre. Kapitel 5. <br><br>Bogen er tilgængelig på både bibliotek og køb i papir, ebog og lydbog, både på dansk og engelsk.', //Beskrivelse af den specifikke Artikel, bog osv.
        link: "https://butik.information.dk/products/doughnut-okonomi", //link 
        image: "https://butik.information.dk/cdn/shop/products/Doughnut-okonomi_720x.png?v=1568652752", //link til billede
    },
    {
        name: 'Economic and Monetary Sovereignty in 21st Century Africa', //navn
        type: 'Bog', //mediet, vælges imellem: 'Artikel', 'Bog', 'Film' og 'Podcast'
        rating: 3, //kvaliteten, tal mellem 1-10
        price: 200.00, //Pris for at tilgå referencen
        date: '2011-11-29', //tilblivesesdato for det man referer til, år-månded-dag
        authors: 'Maha Ben Gadha, Fadhel Kaboub, Kai Koddenbrock, Ines Mahmoud and Ndongo Samba Sylla', //forfatter eller forfattere
        theme: ['Økonomisk ulighed', 'Pengepolitik', 'Demokrati', 'Pengeskabelse', 'English'], //Emnerne på denne form ['Emne1', 'Emne2', 'Emne3']. Det skal være med stort forbogstav
        description: 'Antologi om pengesystemers konsekvenser for international økonomisk ulighed. Hvordan nogle valuta er højere i pengeheriakiet end andre. Og hvilken betydning det har om en stat har sit eget pengesystem, dvs. har "monetary sovereignty". Skrevet ud fra et mondern monetary theory (MMT) perpektiv.', //Beskrivelse af den specifikke Artikel, bog osv.
        link: "https://www.plutobooks.com/9780745344072/economic-and-monetary-sovereignty-in-21st-century-africa/", //link 
        image: "https://plutopress-uk.imgix.net/covers/9780745344072.jpg?auto=format&h=648", //link til billede
    },
];
