//0.1.database.js
var verDatabase = "0.1.database.js";
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
        name: "Banker låner ikke bare penge ud - de skaber dem",
        type: "Artikel",
        rating: 10,
        price: 4.00,
        date: "2021-12-16",
        theme: ["Demokrati", "Pengeskabelse", "Pengeteori", "Banker (private)"],
        description: "Vi tror, vi ved, hvordan banker fungerer – og at systemet er stabilt. Men nyere forskning peger på, at bankernes forunderlige evne til at skabe penge gennem udlånet pumper priserne på fx boligmarkedet op, indtil bankerne og somme tider hele systemet falder sammen. Derfor er det elementært demokratisk behov, at vi får en bedre forståelse af, hvordan penge skabes – og hvordan de er med til at skabe boligbobler og finanskriser.",
        link: "https://www.godepenge.dk/analyser/2021/10/17/banker-lner-ikke-bare-penge-ud-de-skaber-dem",
        image: "https://images.squarespace-cdn.com/content/v1/587382daebbd1a717d8e9df3/1634465043055-HO11FDBTGRUKR7ZVIM7V/photo-1501167786227-4cba60f6d58f.jpg?format=500w"
    },
    {
        name: "How financial bubbles are fueled by money creation a.k.a. bank lending: An explanation for public education",
        type: "Artikel",
        rating: 8,
        price: 0.00,
        date: "2021",
        theme: ["Pengeteori", "Pengeskabelse", "Intorducerende", "English"],
        description: "It is widely acknowledged that the build-up of a financial bubble coincides with and may even be caused by excessive bank credit or lending (e.g., Reinhart and Rogoff, 2009; Kindleberger and Aliber, 2011; Jordà, Schularick and Taylor, 2015). Equally well understood, at least to the readers of this journal, is the fact that commercial bank lending involves money creation (Werner, 1997, 2014a, b; Ryan-Collins et al., 2011; McLeay et al., 2014; Jakab and Kumhoff, 2019).",
        link:"https://static1.squarespace.com/static/587382daebbd1a717d8e9df3/t/6169beeeaa430d291d07932d/1634320111221/How_financial_bubbles_are_fueled_Ib_Ravn.pdf",
        image: "https://images.squarespace-cdn.com/content/v1/587382daebbd1a717d8e9df3/1634985684931-GQ8880SKK8PEIC1QLHYU/2markus-spiske-qR-Dj7c2ilk-unsplash.jpg?format=500w"
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
    }, {
        //skabelon, kopier fra "{" linjen over denne til "}," indsæt så efter "}," for at lave en ny reference
        //udfyld derefter med info for referencen
        name: 'Where does money come from? <br> A guide to the UK monetary and banking system ', //navn
        type: 'Bog', //mediet, vælges imellem: 'Artikel', 'Bog', 'Film' og 'Podcast'
        rating: 8, //kvaliteten, tal mellem 1-10
        price: 100.00, //Pris for at tilgå referencen
        date: '2011-01-01', //tilblivesesdato for det man referer til, år-månded-dag
        authors: 'Josh-Ryan Collins, Tony Greenham, Richard Werner, Andrew Jackson', //forfatter eller forfattere
        theme: ['Pengeskabelse', 'Pengeteori', 'English'], //Emnerne på denne form ['Emne1', 'Emne2', 'Emne3']. Det skal være med stort forbogstav
        description: 'En saglig introduktion til pengeskabelse på akademisk niveau. Uden normative vurderinger, men meget solid deskriptiv forklaring af pengeskabelsen. Passende til brug for bachelor eller specialeskriving om emnet ', //Beskrivelse af den specifikke Artikel, bog osv.
        link: "https://neweconomics.org/2012/12/where-does-money-come-from", //link 
        image: "https://neweconomics.org/uploads/images/2012/12/WDMCF2.png", //link til billede
    },
         {
        name: 'Debunking Economics: The Naked Emperor Dethroned?', //navn
        type: 'Bog', //mediet, vælges imellem: 'Artikel', 'Bog', 'Film' og 'Podcast'
        rating: 6, //kvaliteten, tal mellem 1-10
        price: 350.00, //Pris for at tilgå referencen
        date: '2011-01-01', //tilblivesesdato for det man referer til, år-månded-dag
        authors: 'Steve Keen', //forfatter eller forfattere
        theme: ['Finanskrise', 'Boligmarkedet', 'English'], // 'Økonomikritik' Hvis det bliver accepteret som emne
        description: 'Denne bog forklarer i detaljer, hvad der er galt med det meste af den økonomiske videnskab, og hvorfor de fleste økonomer ikke forudså den globale finanskrise i 2007-08. Professor i økonomi Steve Keen er kendt for at være én af de få, der på forhånd advarede om, at en økonomisk krise ville bryde ud. <i>Debunking Economics</i> forklarer alle de urealistiske antagelser og logiske og matematiske fejl, som moderne økonomisk videnskab bygger på - i et indførende og ikke-matematisk sprog. Emnerne er komplekse, men man behøver ikke at have læst økonomi eller forstå ligninger for at kunne følge med. Teorien om at markedet balancerer udbud og efterspørgsel og finder et prisniveau, der fører til økonomisk ligevægt og vækst, er forfejlet. Den kan ikke en gang give en forklaring på økonomiske kriser. Steve Keen giver også sit bud på hvordan en realistisk økonomisk videnskab kunne se ud, hvis den tog højde for gældens og pengeskabelsens betydning for økonomiske op- og nedture.', //Beskrivelse af den specifikke Artikel, bog osv.
        link: "https://www.saxo.com/dk/debunking-economics_professor-steve-keen-steve-keen_epub_9781848139954", //link 
        image: "https://imgcdn.saxo.com/_9781848139954/0x500", //link til billede
    },
     {
        name: 'Can we avoid another financial crisis?', //navn
        type: 'Bog', //mediet, vælges imellem: 'Artikel', 'Bog', 'Film' og 'Podcast'
        rating: 7, //kvaliteten, tal mellem 1-10
        price: 120.00, //Pris for at tilgå referencen
        date: '2011-01-01', //tilblivesesdato for det man referer til, år-månded-dag
        authors: 'Steve Keen', //forfatter eller forfattere
        theme: ['Finanskrise', 'Boligmarkedet', 'Pengeskabelse', 'English'], // 'Økonomikritik' Hvis det bliver accepteret som emne
        description: 'I denne lille, letlæste bog forklarer Steve Keen hvordan den globale finanskrise 2007-08 opstod, hvordan han var i stand til at forudse og advare offentligt om den, og hvorfor de fleste andre økonomer overså den. I årene op til krisen fik de overbevist sig selv om, at deres arbejde havde udelukket muligheden for nye kriser. Ifølge den dominerende økonomiske videnskab har penge ikke reel betydning for økonomiens udvikling. Men det var netop hans opmærksomhed på pengeskabelse og gæld, der gjorde Keen i stand til at forudsige krisen. I bogen giver Keen også sine bud på, hvordan vi ville kunne undgå nye kriser blandt andet at sætte grænser for bankernes pengeskabelse.', //Beskrivelse af den specifikke Artikel, bog osv.
        link: "https://www.saxo.com/dk/can-we-avoid-another-financial-crisis_steve-keen_paperback_9781509513734", //link 
        image: "https://imgcdn.saxo.com/_9781509513734/0x500", //link til billede
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
    {
        name: 'Finanssektorens rolle i den grønne omstilling', //navn
        type: 'Video', //mediet, vælges imellem: 'Artikel', 'Bog', 'Film' og 'Podcast'
        rating: 7, //kvaliteten, tal mellem 1-10
        price: 0.00, //Pris for at tilgå referencen
        date: '2022-10-18', //tilblivesesdato for det man referer til, år-månded-dag
        authors: 'Andrea Thorup', //forfatter eller forfattere
        theme: ['Grøn omstilling', 'Banker', 'Pengeskabelse', 'Introducerende', 'Dansk'], //Emnerne på denne form ['Emne1', 'Emne2', 'Emne3']. Det skal være med stort forbogstav
        description: 'Oplæg fra Økonomiskolen 2022 af davarende sekretariatsleder i Gode Penge, Andrea Thorup. Hvordan bankernes pengeskabelse modvirker den grønne omstilling, og hvordan hvilke ændringer i pengesystemet i stedet kunne få det til at fremme den grønne omstilling. <br><br> Videooptaget foredrag.', //Beskrivelse af den specifikke Artikel, bog osv.
        link: "https://www.youtube.com/watch?v=cB7DvyDfNsQ&list=PLAbWXl00SxMFpBzxukzaJQtXcu7iXqADV", //link 
        image: "data:image/jpeg;base64,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", //link til billede
    },
    {
        name: 'Where does money come from? The nature of money creation and financing for development', //navn
        type: 'Artikel', //mediet, vælges imellem: 'Artikel', 'Bog', 'Film' og 'Podcast'
        rating: 3, //kvaliteten, tal mellem 1-10
        price: 0.00, //Pris for at tilgå referencen
        date: '2020-06-29', //tilblivesesdato for det man referer til, år-månded-dag
        authors: 'Andrea Thorup', //forfatter eller forfattere
        theme: ['Økonomisk ulighed', 'Pengeskabelse', 'Pengepolitik', 'Pengeteori', 'Engelsk'], //Emnerne på denne form ['Emne1', 'Emne2', 'Emne3']. Det skal være med stort forbogstav
        description: 'Andreas speciale om pengesystemers rolle i global ulighed, og hvordan folk der arbejder med international udvikling tænker om penge, og hvilke pengetorier de (ikke) benytter i deres arbejde.', //Beskrivelse af den specifikke Artikel, bog osv.
        link: "https://www.duo.uio.no/bitstream/handle/10852/79254/Andrea-Thorup---Where-does-money-come-from.pdf?sequence=1&isAllowed=y", //link 
        image: "https://arvenetternansen.com/wp-content/uploads/2018/10/UiO-logo-1.jpg", //link til billede
    },
    {
        name: 'Private banker bør ikke skabe vores samfunds penge', //navn
        type: 'Podcast', //mediet, vælges imellem: 'Artikel', 'Bog', 'Film' og 'Podcast'
        rating: 5, //kvaliteten, tal mellem 1-10
        price: 0.00, //Pris for at tilgå referencen
        date: '2020-07-03', //tilblivesesdato for det man referer til, år-månded-dag
        authors: 'Andrea Thorup og Vitus Robak', //forfatter eller forfattere
        theme: ['Pengeskabelse', 'Demokrati', 'Banker', 'Pengetori', 'Dansk'], //Emnerne på denne form ['Emne1', 'Emne2', 'Emne3']. Det skal være med stort forbogstav
        description: 'Andrea er gæst i programmet Udråb på Radio Loud, hvor vi denne gang snakker om penge og hvor de kommer fra, hvordan Andrea mener at vi burde omstrukture systemet og meget mere.', //Beskrivelse af den specifikke Artikel, bog osv.
        link: "https://podcasts.apple.com/dk/podcast/03-07-20-private-banker-b%C3%B8r-ikke-skabe-vores-samfunds-penge/id1506906745?i=1000482327573", //link 
        image: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/70/f7/db/70f7dbed-d3c0-874d-fa83-0753507ebca2/mza_2758003647180881172.jpg/536x0w.webp", //link til billede
    },
     {
        name: 'Money: The unauthorized biography', //navn
        type: 'Bog', //mediet, vælges imellem: 'Artikel', 'Bog', 'Film' og 'Podcast'
        rating: 5, //kvaliteten, tal mellem 1-10
        price: 150.00, //Pris for at tilgå referencen
        date: '2014-11-29', //tilblivesesdato for det man referer til, år-månded-dag
        authors: 'Felix Martin', //forfatter eller forfattere
        theme: ['Pengehistorie', 'Pengeteori', 'Pengeskabelse', 'English'], //Emnerne på denne form ['Emne1', 'Emne2', 'Emne3']. Det skal være med stort forbogstav
        description: 'En rigtig god og tilgængelig bog om pengenes historie, og hvorfor vi har brug for at gøre bedre forståelse af pengessystemet mere mainstream.', //Beskrivelse af den specifikke Artikel, bog osv.
        link: "https://www.saxo.com/dk/money_felix-martin_paperback_9780099578529", //link 
        image: "https://imgcdn.saxo.com/_9780345803559", //link til billede
    },
        {
        name: 'Talking to my daughter about the economy – a brief history of capitalism', //navn
        type: 'Bog', //mediet, vælges imellem: 'Artikel', 'Bog', 'Film' og 'Podcast'
        rating: 3, //kvaliteten, tal mellem 1-10
        price: 100.00, //Pris for at tilgå referencen
        date: '2019-11-29', //tilblivesesdato for det man referer til, år-månded-dag
        authors: 'Yanis Varoufakis', //forfatter eller forfattere
        theme: ['Demokrati', 'Kapitalismekritik', 'Pengepolitik', 'Finanskrise', 'EU', 'Introducerende', 'Dansk', 'English'], //Emnerne på denne form ['Emne1', 'Emne2', 'Emne3']. Det skal være med stort forbogstav
        description: 'En virkelig god og velskrevet introducerende bog af den tidligere græske finansminister Yanis Varoufakis om problemerne ved det nuværende økonomiske system. <br><br> Tilgængelig på både dansk og engelsk. ', //Beskrivelse af den specifikke Artikel, bog osv.
        link: "https://www.saxo.com/dk/talking-to-my-daughter-about-the-economy-a-brief-history-of-capitalism-pb-b-format_paperback_9781784705756?gad_source=1&gclid=CjwKCAjwrvyxBhAbEiwAEg_Kgtb5fUqvhHZS2wy7kMo2-UAAOZ3nqNPD4oyCfIxyY5LKH2tPsoHFoRoC9l8QAvD_BwE", //link 
        image: "https://imgcdn.saxo.com/_9781784705756", //link til billede
    },
     {
        name: 'Økonomien og virkeligheden', //navn
        type: 'Bog', //mediet, vælges imellem: 'Artikel', 'Bog', 'Film' og 'Podcast'
        rating: 3, //kvaliteten, tal mellem 1-10
        price: 100.00, //Pris for at tilgå referencen
        date: '2019-11-29', //tilblivesesdato for det man referer til, år-månded-dag
        authors: 'Katarina Juselius', //forfatter eller forfattere
        theme: ['Finanskrise', 'Den finansielle sektor', 'Pengeskabelse', 'Dansk'], //Emnerne på denne form ['Emne1', 'Emne2', 'Emne3']. Det skal være med stort forbogstav
        description: 'En lille og forholdvis let tilgængelig bog om mainstream økonomis blinde vinkler ift. pengenes rolle i økonomien – især ift økonomisk ustabilitet. <br><br> Katarina Juselius en af de mest citerede økonomer i 1990erne, kendt for sit arbejde med makroøkonomiske CVAR-modeller.', //Beskrivelse af den specifikke Artikel, bog osv.
        link: "https://butik.information.dk/products/okonomien-og-virkeligheden", //link 
        image: "https://butik.information.dk/cdn/shop/products/Okonomien_og_Virkeligheden_3D_720x.png?v=1568652679", //link til billede
    },
     {
        name: 'Har vi råd til den grønne omstilling?', //navn
        type: 'Artikel', //mediet, vælges imellem: 'Artikel', 'Bog', 'Film' og 'Podcast'
        rating: 5, //kvaliteten, tal mellem 1-10
        price: 0.00, //Pris for at tilgå referencen
        date: '2021-04-27', //tilblivesesdato for det man referer til, år-månded-dag
        authors: 'Andrea Thorup', //forfatter eller forfattere
        theme: ['Grøn omstilling', 'Pengeskabelse', 'Pengeteori', 'Banker', 'Introducerende', 'Dansk'], //Emnerne på denne form ['Emne1', 'Emne2', 'Emne3']. Det skal være med stort forbogstav
        description: 'En relativt kort introducerende artikel om bankernes pengeskabelses betydning for den grønne omstilling. Og hvordan ændringer i pengesystemet i stedet kunne bidrage til at fremme den grønne omstilling.', //Beskrivelse af den specifikke Artikel, bog osv.
        link: "https://www.responsmedie.dk/klimaretfardighed-9/", //link 
        image: "https://usercontent.one/wp/www.responsmedie.dk/wp-content/uploads/2021/04/harvir%C3%A5dtildengr%C3%B8nneomstilling_header1.png?media=1684748085", //link til billede
    },
    {
        //skabelon, kopier fra "{" linjen over denne til "}," indsæt så efter "}," for at lave en ny reference
        //udfyld derefter med info for referencen
        name: 'Glimt af pengeskabelsens historie', //navn
        type: 'Artikel', //mediet, vælges imellem: 'Artikel', 'Bog', 'Film' og 'Podcast'
        rating: 7, //kvaliteten, tal mellem 1-10
        price: 0.00, //Pris for at tilgå referencen
        date: '2017-01-28', //tilblivesesdato for det man referer til, år-månded-dag
        authors: 'Ib Ravn', //forfatter eller forfattere
        theme: ['Pengehistorie', 'Pengeskabelse', 'Banker', 'Introducerende', 'Dansk'], //Emnerne på denne form ['Emne1', 'Emne2', 'Emne3']. Det skal være med stort forbogstav
        description: 'En lettilgængelig, relativt kort artikel om pengenes historie og udviklingen op til moderne bankdrift.', //Beskrivelse af den specifikke Artikel, bog osv.
        link: "https://baggrund.com/2017/01/28/glimt-af-pengeskabelsens-historie/", //link 
        image: "stockphoto artikel", //link til billede
    },
];
