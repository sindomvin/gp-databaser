//Backup, kopi af sidste gang det fungerede
//test1.database.js
var verDatabase = "test1.database.js";
var database = [
    {
        //skabelon, kopier fra "{" linjen over denne til "}," indsæt så efter "}," for at lave en ny reference
        //udfyld derefter med info for referencen
        name: 'Skabelon for en reference', //navn
        type: 'Artikel', //mediet, vælges imellem: 'Artikel', 'Bog', 'Film' og 'Podcast'
        rating: 3, //kvaliteten, tal mellem 1-10
        price: 0.00, //Pris for at tilgå referencen
        date: '2021-11-29', //tilblivesesdato for det man referer til, år-månded-dag
        authors: 'forfatter', //forfatter eller forfattere
        theme: ['Bank', 'Penge'], //Emnerne på denne form ['emne1', 'emne2', 'emne3']
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
        theme: ["Banker", "Klima", "Grøn omstilling", "Pengeskabelse"], //om hvert emne er der anførselstegn
        description: "Banker skaber penge – mange penge: Pengemængden stiger, og det har den de sidste mange årtier gjort med cirka 70 milliarder kroner om året, sidste år med hele 140 milliarder.<br>Banker er private virksomheder, og derfor udsteder de lån – altså penge – til formål, som er profitable og sikre for banken. Som oftest faste aktiver. Cirka 75 procent af udlån i danske banker er boligrelaterede. Meget få er til regenerativt jordbrug. <br> <br> Derfor burde vi spørge os selv om private virksomheder er et smart sted at placere kernen i den samfundskritiske institution,som pengesystemet er, nemlig pengeskabelsen. Og derfor er det essentielt, at vi begynder at inkludere pengeskabelsen i debatten om mulighederne for den grønne omstilling.", 
        //kun linje skift der hvor der står "<br>"
        link: "https://klimamonitor.dk/debat/art8482256/Demokratiser-pengeskabelsen-og-indfri-den-grønne-omstilling",
        image: "https://images.squarespace-cdn.com/content/v1/587382daebbd1a717d8e9df3/7a3a4aff-519f-4d00-acd4-969b8503a575/Udklipklimademo.PNG?format=1000w",
    },
];
