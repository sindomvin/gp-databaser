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
        date: '2021-11-29' //tilblivesesdato for det man referer til, år-månded-dag
        authors: 'forfatter', //forfatter eller forfattere
        theme: ['Demokrati', 'Pengeskabelse'], //Emnerne på denne form ['Emne1', 'Emne2', 'Emne3']. Det skal være med stort forbogstav
        description: 'Obejkt til kopiering', //Beskrivelse af den specifikke Artikel, bog osv.
        link: "https://www.godepenge.dk", //link 
        image: "", //link til billede
    },
     {
        name: "New Paradigm in Macroeconomics", //Bemærk det er skrevet mellem anførselstegnene
        type: "Bog", //Kun et medie og skrevet med stort forbogstav
        rating: 8, //uden anførselstegn
        price: 300.00, //med 2 decimaler, uden anførselstegn
        date: "2007-1-1", //med anførselstegn
        authors: "Richard A. Werner", //komma sepererer forfattere, med anførselstegn om det hele
        theme: ["Økonomikritik", "Pengeteori", "Pengeskabelse"], //om hvert emne er der anførselstegn
        description: "Banebrydende værk, der i et dusin kapitler kritiserer neoklassisk økonomi og derefter fremlægger konge-forklarringen: Banker skaber penge gennem udlånet og stimulerer økonomisk vækst, somme tider for meget - og så har vi finansbobler og -kriser", 
        //kun linje skift der hvor der står "<br>"
        link: "https://link.springer.com/book/10.1057/9780230506077",
        image: "https://link.springer.com/book/10.1057/9780230506077",
    },
{
         name: "Penge som tryllestøv: Hvordan banker skaber penge og blæser finansbobler op", //Bemærk det er skrevet mellem anførselstegnene
        type: "Bog", //Kun et medie og skrevet med stort forbogstav
        rating: 10, //uden anførselstegn
        price: 200.00, //med 2 decimaler, uden anførselstegn
        date: "2019-10-10", //med anførselstegn
        authors: "Ib Ravn", //komma sepererer forfattere, med anførselstegn om det hele
        theme: ["Banker", "Pengehistorie", "Pengeskabelse"], //om hvert emne er der anførselstegn
        description: "Forklaring for kvikke begyndere: Pengeskabelsens historie og mekanik i dag, samt Gode Penges pengereform", 
        //kun linje skift der hvor der står "<br>"
        link: "https://www.godepenge.dk/shop",
        image: "Stockphoto bog",
    }, {
        name: 'The veil of deception over money: How central bankers and textbooks distort the nature of banking and central banking', //navn
        type: 'Artikel', //mediet, vælges imellem: 'Artikel', 'Bog', 'Film' og 'Podcast'
        rating: 6, //kvaliteten, tal mellem 1-10
        price: 0.00, //Pris for at tilgå referencen
        date: '2013-1-1', //tilblivesesdato for det man referer til, år-månded-dag
        authors: 'Norbert Häring', //forfatter eller forfattere
        theme: ['Banker', 'Pengeskabelse', 'Økonomikritik'], //Emnerne på denne form ['Emne1', 'Emne2', 'Emne3']. Det skal være med stort forbogstav
        description: 'Kritisk finansjournalist skriver i Real-World Economics Review, vol. 62, s. 2-18 om forestillingen om penge som et slør, som neoklassiske økonomer kalder det, fordi penge ikke indgår i deres teori - men det skyldes magthavernes trang til at sløre deres styring af pengene, hævder Häring', //Beskrivelse af den specifikke Artikel, bog osv.
        link: "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=http://www.paecon.net/PAEReview/issue63/Haring63.pdf&ved=2ahUKEwjdmKqD6IWGAxVeFhAIHWJ1DnAQFnoECBAQAQ&usg=AOvVaw1IEm61pQkwzYn5RmXApcEb", //link 
        image: "Stockphoto artikel", //link til billede
    }, {
        name: 'Between debt and the devil: Money, credit, and fixing global finance', //navn
        type: 'Bog', //mediet, vælges imellem: 'Artikel', 'Bog', 'Film' og 'Podcast'
        rating: 5, //kvaliteten, tal mellem 1-10
        price: 300.00, //Pris for at tilgå referencen
        date: '2016-1-1', //tilblivesesdato for det man referer til, år-månded-dag
        authors: 'Adair Turner', //forfatter eller forfattere
        theme: ['Pengepolitik', 'Pengeskabelse', 'Centralbanker'], //Emnerne på denne form ['Emne1', 'Emne2', 'Emne3']. Det skal være med stort forbogstav
        description: 'Afgående formadn for det britiske finanstilsyn skriver om britisk pengepolitik i årene omkring finanskrisen og peger fingeren direkte mod bankernes pengeskabelse', //Beskrivelse af den specifikke Artikel, bog osv.
        link: "https://press.princeton.edu/books/hardcover/9780691169644/between-debt-and-the-devil", //link 
        image: "Stockphoto bog", //link til billede
    }, {
        name: 'Princes of the Yen', //navn
        type: 'Bog', //mediet, vælges imellem: 'Artikel', 'Bog', 'Film' og 'Podcast'
        rating: 4, //kvaliteten, tal mellem 1-10
        price: 300.00, //Pris for at tilgå referencen
        date: '2008-10-10', //tilblivesesdato for det man referer til, år-månded-dag
        authors: 'Richard A. Werner', //forfatter eller forfattere
        theme: ['Økonomikritik', 'Pengeskabelse', 'Pengehistorie'], //Emnerne på denne form ['Emne1', 'Emne2', 'Emne3']. Det skal være med stort forbogstav
        description: 'Fysterne i den janpanske centralbank styrede i årtierne efter 2. verdenskrig den japanske økonomi med jernhånd, så bnp pr. indbygger 100-dobledes på fyrre år - og de gjorde det i tæt, skjult konkurrence med finansministerinet', //Beskrivelse af den specifikke Artikel, bog osv.
        link: "https://quantumpublishers.com/uk-cart/index.php?route=product/product&product_id=50", //link 
        image: "Stockphoto bog", //link til billede
    }, {
         name: 'Princes of the Yen', //navn
        type: 'Film', //mediet, vælges imellem: 'Artikel', 'Bog', 'Film' og 'Podcast'
        rating: 5, //kvaliteten, tal mellem 1-10
        price: 0.00, //Pris for at tilgå referencen
        date: '2020-11-29', //tilblivesesdato for det man referer til, år-månded-dag
        authors: 'Richard A. Werner', //forfatter eller forfattere
        theme: ['Pengehistorie', 'Pengeskabelse', 'Centralbanker', 'Finanskrise'], //Emnerne på denne form ['Emne1', 'Emne2', 'Emne3']. Det skal være med stort forbogstav
        description: 'Filmatisering af bogen - hvordan japanske centralbanker styrede den økonomiske udvikling i landet 1945-85, og hvordan det pga. overdreven pengeskabesle til fast ejendom og værdipapirer førte til en finansboble i slut-80"erne, med efterfølgende recession, som det tog landet 25 år at komme ud af', //Beskrivelse af den specifikke Artikel, bog osv.
        link: "https://www.youtube.com/watch?v=p5Ac7ap_MAY", //link 
        image: "Stockphoto film", //link til billede
},
   {
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
        name: 'The New Economics: A Manifesto', //navn
        type: 'Bog', //mediet, vælges imellem: 'Artikel', 'Bog', 'Film' og 'Podcast'
        rating: 6, //kvaliteten, tal mellem 1-10
        price: 130.00, //Pris for at tilgå referencen
        date: '2021-10-15', //tilblivesesdato for det man referer til, år-månded-dag
        authors: 'Steve Keen', //forfatter eller forfattere
        theme: ['Pengeteori', 'Pengeskabelse', 'Grøn omstilling', 'English'], // 'Økonomikritik' Hvis det bliver accepteret som emne
        description: 'I denne bog præsenterer Steve Keen sit bud på, hvordan en ny og mere realistisk økonomisk videnskab kunne se ud. Nutidens dominerende mainstream-økonomi antager at økonomien er et ligevægtigt, stabilt system og ignorerer betydningen af klasse, penge og energi. Dermed er den økonomiske videnskab også hæmsko for at forebygge nye økonomiske kriser og gennemføre den grønne omstilling. Keen forklarer hvordan økonomer i stedet kunne forstå økonomien som et dynamisk system med arbejdere, virksomheder og banker og som aldrig er i ligevægt. Han skitserer også hvordan sådanne systemdynamiske modeller kan bygges i hans software-pakke kaldet "Minsky".', //Beskrivelse af den specifikke Artikel, bog osv.
        link: "https://www.saxo.com/dk/the-new-economics_steve-keen_paperback_9781509545292", //link 
        image: "https://imgcdn.saxo.com/_9781509545292/0x500", //link til billede
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
    {
        //skabelon, kopier fra "{" linjen over denne til "}," indsæt så efter "}," for at lave en ny reference
        //udfyld derefter med info for referencen
        name: "Cloudmoney - Cash, Cards, Crypto and the War for our Wallets", //navn
        type: 'Bog', //mediet, vælges imellem: 'Artikel', 'Bog', 'Film' og 'Podcast'
        rating: 5, //kvaliteten, tal mellem 1-10
        price: 0.00, //Pris for at tilgå referencen
        date: '2022-05-19', //tilblivesesdato for det man referer til, år-månded-dag
        authors: 'Brett Scott', //forfatter eller forfattere
        theme: ['Kontanter', 'Kryptovaluta', "Kapitalismekritik", 'English'], //Emnerne på denne form ['Emne1', 'Emne2', 'Emne3']. Det skal være med stort forbogstav
        description: 'Hvem har egentlig gavn af et kontantløst samfund? Mange af os bruger sjældent kontanter i dag, da de fleste produkter og services kan tilgås via betalingskort og apps. Men det, vi får at vide, er en uundgåelig og harmløs digitalisering, er faktisk konsekvensen af en række magtfulde interessenters bevidste arbejde.<br>Cloudmoney fortæller en afslørende historie om sammensmeltningen af “big finance” og “big tech”, som har som fælles projekt, at fysiske kontanter erstattes af digitale penge eller “cloudmoney”, fordi det giver dem mulighed for at høste vores værdifulde digitale data.<br>Brett Scott dykker under det globale finansielle systems overflade og afslører en veletableret lobby-infrastruktur, der fører en skjult krig mod kontanter under fremskridtets banner, men på bekostning af vores privatliv, politik og individuelle frihed.', //Beskrivelse af den specifikke Artikel, bog osv.
        link: "https://bibliotek.dk/materiale/cloudmoney_brett-scott/work-of:870970-basis:134990902?type=e-bog", //link 
        image: "stock photo book", //link til billede
    },
];
