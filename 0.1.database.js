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
];
