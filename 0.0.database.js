//0.0.database.js
var verDatabase = "0.0.database.js"
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
        name: "artikel",
        type: "Artikel",
        rating: 10,
        price: 0.00,
        date: "2021-11-29",
        authors: "for",
        theme: ["Banker", "Klima", "Grøn omstilling", "Pengeskabelse"],
        description: "stock",
        link: "huh",
        image: "https://cdn.pixabay.com/photo/2013/07/12/19/16/newspaper-154444_1280.png"
    },{
        name: "bog",
        type: "Bog",
        rating: 10,
        price: 0.00,
        date: "2021-11-29",
        authors: "for",
        theme: ["Banker", "Klima", "Grøn omstilling", "Pengeskabelse"],
        description: "stock",
        link: "huh",
        image: "https://cdn.pixabay.com/photo/2017/05/03/22/08/book-2282303_1280.png"
    },
    {
        name: "film",
        type: "Film",
        rating: 10,
        price: 0.00,
        date: "2021-11-29",
        authors: "for",
        theme: ["Banker", "Klima", "Grøn omstilling", "Pengeskabelse"],
        description: "stock",
        link: "huh",
        image: "https://cdn.pixabay.com/photo/2013/07/13/01/16/countdown-155439_1280.png"
    },
    {
        name: "video",
        type: "Video",
        rating: 10,
        price: 0.00,
        date: "2021-11-29",
        authors: "for",
        theme: ["Banker", "Klima", "Grøn omstilling", "Pengeskabelse"],
        description: "stock",
        link: "huh",
        image: "https://cdn.pixabay.com/photo/2017/06/30/03/34/gui-2457115_1280.png"
    },
    {
        name: "podcast",
        type: "Podcast",
        rating: 10,
        price: 0.00,
        date: "2021-11-29",
        authors: "for",
        theme: ["Banker", "Klima", "Grøn omstilling", "Pengeskabelse"],
        description: "stock",
        link: "huh",
        image: " https://cdn.pixabay.com/photo/2016/04/11/14/59/podcast-icon-1322239_1280.png"
    },
    {
        name: "Bog om Gp",
        type: "Bog",
        description: "om Gp",
        authors: "Jane Doe",
        theme: ["Bank", "Konto"],
        rating: 7
    },
    {
        name: "Bog om Gp",
        type: "Bog",
        description: "om Gp",
        authors: "Jane Doe",
        theme: ["Magt", "Politik"],
        rating: 5
    },
    {
        name: "Film om Gp",
        type: "Film",
        description: "om Gp",
        authors: "Jane Doe",
        theme: ["Konto", "Mønter"],
        link: "https://www.godepenge.dk",
        image: "https://images.squarespace-cdn.com/content/v1/587382daebbd1a717d8e9df3/1504866538092-9067D0H0IV2X0WUH6ZSX/GP_Logo_hjemmeside2.png?format=1500w"
    },
    {
        name: "Podcast om Gp",
        type: "Podcast",
        description: "om Gp",
        
    },
    {
        name: "Demokratiser pengeskabelsen og indfri den grønne omstilling",
        type: "Artikel",
        rating: 12,
        price: 0.00,
        date: "2021-11-29",
        authors: "Mads Thunestvedt, Andrea Thorup",
        theme: ["Banker", "Klima", "Grøn omstilling", "Pengeskabelse"],
        description: "Banker skaber penge – mange penge: Pengemængden stiger, og det har den de sidste mange årtier gjort med cirka 70 milliarder kroner om året, sidste år med hele 140 milliarder.<br>Banker er private virksomheder, og derfor udsteder de lån – altså penge – til formål, som er profitable og sikre for banken. Som oftest faste aktiver. Cirka 75 procent af udlån i danske banker er boligrelaterede. Meget få er til regenerativt jordbrug. <br> <br> Derfor burde vi spørge os selv om private virksomheder er et smart sted at placere kernen i den samfundskritiske institution, som pengesystemet er, nemlig pengeskabelsen. Og derfor er det essentielt, at vi begynder at inkludere pengeskabelsen i debatten om mulighederne for den grønne omstilling.",
        link: "https://klimamonitor.dk/debat/art8482256/Demokratiser-pengeskabelsen-og-indfri-den-grønne-omstilling",
        image: "https://images.squarespace-cdn.com/content/v1/587382daebbd1a717d8e9df3/7a3a4aff-519f-4d00-acd4-969b8503a575/Udklipklimademo.PNG?format=1000w"
    },
    {
        name: "Hvis du ikke hopper på boligstigen bliver du kørt over af bankernes pengemaskine",
        type: "Artikel",
        rating: 10,
        price: 0.00,
        date: "2021-11-04",
        authors: "Jane Doe",
        theme: ["Boligmarkedet", "Pengeskabelse", "Corona", "Bolig bobler"],
        description: "Under corona stiger boligpriserne igen eksplosivt, og før eller siden brister boblen formodentlig. Bankerne skaber nemlig nye penge, når de udsteder lån, og for at undgå en ny krise må vi føre pengeskabelsen tilbage til Nationalbanken, skriver Jonas Jensen-Dharmaratne, der er formand for Gode Penge, og Ib Ravn, lektor ved Aarhus Universitet, i denne kronik",
        link: "https://www.godepenge.dk/analyser/2021/11/4/hvis-du-ikke-hopper-p-boligstigen-bliver-du-krt-over-af-bankernes-pengemaskine",
        image: "https://images.squarespace-cdn.com/content/v1/587382daebbd1a717d8e9df3/01d40260-a092-4e7d-a2f7-9bc740c24666/unsplash-image-ifeqg7RgkiA.jpg?format=1000w"
    },
    {
        name: "How financial bubbles are fueled by money creation a.k.a. bank lending: An explanation for public education",
        type: "Artikel",
        rating: 8,
        price: 0.00,
        date: "0000-00-00",
        authors: "Jane Doe",
        theme: ["Pengesystem", "Pengeskabelse", "Økonomiske bobler", "English"],
        description: "It is widely acknowledged that the build-up of a financial bubble coincides with and may even be caused by excessive bank credit or lending (e.g., Reinhart and Rogoff, 2009; Kindleberger and Aliber, 2011; Jordà, Schularick and Taylor, 2015). Equally well understood, at least to the readers of this journal, is the fact that commercial bank lending involves money creation (Werner, 1997, 2014a, b; Ryan-Collins et al., 2011; McLeay et al., 2014; Jakab and Kumhoff, 2019).",
        link:"https://static1.squarespace.com/static/587382daebbd1a717d8e9df3/t/6169beeeaa430d291d07932d/1634320111221/How_financial_bubbles_are_fueled_Ib_Ravn.pdf",
        image: "https://images.squarespace-cdn.com/content/v1/587382daebbd1a717d8e9df3/1634985684931-GQ8880SKK8PEIC1QLHYU/2markus-spiske-qR-Dj7c2ilk-unsplash.jpg?format=500w"
    },
    {
        name: "Banker låner ikke bare penge ud - de skaber dem",
        type: "Artikel",
        rating: 0,
        price: 4.00,
        date: "2021-12-16",
        authors: "Jane Doe",
        theme: ["Demokrati", "Pengeskabelse", "Pengesystem", "Banker"],
        description: "Vi tror, vi ved, hvordan banker fungerer – og at systemet er stabilt. Men nyere forskning peger på, at bankernes forunderlige evne til at skabe penge gennem udlånet pumper priserne på fx boligmarkedet op, indtil bankerne og somme tider hele systemet falder sammen. Derfor er det elementært demokratisk behov, at vi får en bedre forståelse af, hvordan penge skabes – og hvordan de er med til at skabe boligbobler og finanskriser.",
        link: "https://www.godepenge.dk/analyser/2021/10/17/banker-lner-ikke-bare-penge-ud-de-skaber-dem",
        image: "https://images.squarespace-cdn.com/content/v1/587382daebbd1a717d8e9df3/1634465043055-HO11FDBTGRUKR7ZVIM7V/photo-1501167786227-4cba60f6d58f.jpg?format=500w"
    },
    //uden navn
    {
        type: "Artikel",
        rating: 10,
        price: 0.00,
        date: "2021-11-29",
        authors: "Mads Thunestvedt, Andrea Thorup",
        theme: ["Banker", "Klima", "Grøn omstilling", "Pengeskabelse"],
        description: "Banker skaber penge – mange penge: Pengemængden stiger, og det har den de sidste mange årtier gjort med cirka 70 milliarder kroner om året, sidste år med hele 140 milliarder.<br>Banker er private virksomheder, og derfor udsteder de lån – altså penge – til formål, som er profitable og sikre for banken. Som oftest faste aktiver. Cirka 75 procent af udlån i danske banker er boligrelaterede. Meget få er til regenerativt jordbrug. <br> <br> Derfor burde vi spørge os selv om private virksomheder er et smart sted at placere kernen i den samfundskritiske institution, som pengesystemet er, nemlig pengeskabelsen. Og derfor er det essentielt, at vi begynder at inkludere pengeskabelsen i debatten om mulighederne for den grønne omstilling.",
        link: "https://klimamonitor.dk/debat/art8482256/Demokratiser-pengeskabelsen-og-indfri-den-grønne-omstilling",
        image: "https://images.squarespace-cdn.com/content/v1/587382daebbd1a717d8e9df3/7a3a4aff-519f-4d00-acd4-969b8503a575/Udklipklimademo.PNG?format=1000w"
    },
    //uden type
    {
        name: "Demokratiser pengeskabelsen og indfri den grønne omstilling",
        rating: 12,
        price: 0.00,
        date: "2021-11-29",
        authors: "Mads Thunestvedt, Andrea Thorup",
        theme: ["Banker", "Klima", "Grøn omstilling", "Pengeskabelse"],
        description: "Banker skaber penge – mange penge: Pengemængden stiger, og det har den de sidste mange årtier gjort med cirka 70 milliarder kroner om året, sidste år med hele 140 milliarder.<br>Banker er private virksomheder, og derfor udsteder de lån – altså penge – til formål, som er profitable og sikre for banken. Som oftest faste aktiver. Cirka 75 procent af udlån i danske banker er boligrelaterede. Meget få er til regenerativt jordbrug. <br> <br> Derfor burde vi spørge os selv om private virksomheder er et smart sted at placere kernen i den samfundskritiske institution, som pengesystemet er, nemlig pengeskabelsen. Og derfor er det essentielt, at vi begynder at inkludere pengeskabelsen i debatten om mulighederne for den grønne omstilling.",
        link: "https://klimamonitor.dk/debat/art8482256/Demokratiser-pengeskabelsen-og-indfri-den-grønne-omstilling",
        image: "https://images.squarespace-cdn.com/content/v1/587382daebbd1a717d8e9df3/7a3a4aff-519f-4d00-acd4-969b8503a575/Udklipklimademo.PNG?format=1000w"
    },
    //uden rating
    {
        name: "Demokratiser pengeskabelsen og indfri den grønne omstilling",
        type: "Artikel",
        
        price: 0.00,
        date: "2021-11-29",
        authors: "Mads Thunestvedt, Andrea Thorup",
        theme: ["Banker", "Klima", "Grøn omstilling", "Pengeskabelse"],
        description: "Banker skaber penge – mange penge: Pengemængden stiger, og det har den de sidste mange årtier gjort med cirka 70 milliarder kroner om året, sidste år med hele 140 milliarder.<br>Banker er private virksomheder, og derfor udsteder de lån – altså penge – til formål, som er profitable og sikre for banken. Som oftest faste aktiver. Cirka 75 procent af udlån i danske banker er boligrelaterede. Meget få er til regenerativt jordbrug. <br> <br> Derfor burde vi spørge os selv om private virksomheder er et smart sted at placere kernen i den samfundskritiske institution, som pengesystemet er, nemlig pengeskabelsen. Og derfor er det essentielt, at vi begynder at inkludere pengeskabelsen i debatten om mulighederne for den grønne omstilling.",
        link: "https://klimamonitor.dk/debat/art8482256/Demokratiser-pengeskabelsen-og-indfri-den-grønne-omstilling",
        image: "https://images.squarespace-cdn.com/content/v1/587382daebbd1a717d8e9df3/7a3a4aff-519f-4d00-acd4-969b8503a575/Udklipklimademo.PNG?format=1000w"
    },
    //uden price
    {
        name: "Demokratiser pengeskabelsen og indfri den grønne omstilling",
        type: "Artikel",
        rating: 10,
      
        date: "2021-11-29",
        authors: "Mads Thunestvedt, Andrea Thorup",
        theme: ["Banker", "Klima", "Grøn omstilling", "Pengeskabelse"],
        description: "Banker skaber penge – mange penge: Pengemængden stiger, og det har den de sidste mange årtier gjort med cirka 70 milliarder kroner om året, sidste år med hele 140 milliarder.<br>Banker er private virksomheder, og derfor udsteder de lån – altså penge – til formål, som er profitable og sikre for banken. Som oftest faste aktiver. Cirka 75 procent af udlån i danske banker er boligrelaterede. Meget få er til regenerativt jordbrug. <br> <br> Derfor burde vi spørge os selv om private virksomheder er et smart sted at placere kernen i den samfundskritiske institution, som pengesystemet er, nemlig pengeskabelsen. Og derfor er det essentielt, at vi begynder at inkludere pengeskabelsen i debatten om mulighederne for den grønne omstilling.",
        link: "https://klimamonitor.dk/debat/art8482256/Demokratiser-pengeskabelsen-og-indfri-den-grønne-omstilling",
        image: "https://images.squarespace-cdn.com/content/v1/587382daebbd1a717d8e9df3/7a3a4aff-519f-4d00-acd4-969b8503a575/Udklipklimademo.PNG?format=1000w"
    },
    // uden date
    {
        name: "Demokratiser pengeskabelsen og indfri den grønne omstilling",
        type: "Artikel",
        rating: 10,
        price: 0.00,
      
        authors: "Mads Thunestvedt, Andrea Thorup",
        theme: ["Banker", "Klima", "Grøn omstilling", "Pengeskabelse"],
        description: "Banker skaber penge – mange penge: Pengemængden stiger, og det har den de sidste mange årtier gjort med cirka 70 milliarder kroner om året, sidste år med hele 140 milliarder.<br>Banker er private virksomheder, og derfor udsteder de lån – altså penge – til formål, som er profitable og sikre for banken. Som oftest faste aktiver. Cirka 75 procent af udlån i danske banker er boligrelaterede. Meget få er til regenerativt jordbrug. <br> <br> Derfor burde vi spørge os selv om private virksomheder er et smart sted at placere kernen i den samfundskritiske institution, som pengesystemet er, nemlig pengeskabelsen. Og derfor er det essentielt, at vi begynder at inkludere pengeskabelsen i debatten om mulighederne for den grønne omstilling.",
        link: "https://klimamonitor.dk/debat/art8482256/Demokratiser-pengeskabelsen-og-indfri-den-grønne-omstilling",
        image: "https://images.squarespace-cdn.com/content/v1/587382daebbd1a717d8e9df3/7a3a4aff-519f-4d00-acd4-969b8503a575/Udklipklimademo.PNG?format=1000w"
    },
    //uden author
    {
        name: "Demokratiser pengeskabelsen og indfri den grønne omstilling",
        type: "Artikel",
        rating: 10,
        price: 0.00,
        date: "2021-11-29",
      
        theme: ["Banker", "Klima", "Grøn omstilling", "Pengeskabelse"],
        description: "Banker skaber penge – mange penge: Pengemængden stiger, og det har den de sidste mange årtier gjort med cirka 70 milliarder kroner om året, sidste år med hele 140 milliarder.<br>Banker er private virksomheder, og derfor udsteder de lån – altså penge – til formål, som er profitable og sikre for banken. Som oftest faste aktiver. Cirka 75 procent af udlån i danske banker er boligrelaterede. Meget få er til regenerativt jordbrug. <br> <br> Derfor burde vi spørge os selv om private virksomheder er et smart sted at placere kernen i den samfundskritiske institution, som pengesystemet er, nemlig pengeskabelsen. Og derfor er det essentielt, at vi begynder at inkludere pengeskabelsen i debatten om mulighederne for den grønne omstilling.",
        link: "https://klimamonitor.dk/debat/art8482256/Demokratiser-pengeskabelsen-og-indfri-den-grønne-omstilling",
        image: "https://images.squarespace-cdn.com/content/v1/587382daebbd1a717d8e9df3/7a3a4aff-519f-4d00-acd4-969b8503a575/Udklipklimademo.PNG?format=1000w"
    },
    //uden theme
    {
        name: "Demokratiser pengeskabelsen og indfri den grønne omstilling",
        type: "Artikel",
        rating: 10,
        price: 0.00,
        date: "2021-11-29",
        authors: "Mads Thunestvedt, Andrea Thorup",
        
        description: "Banker skaber penge – mange penge: Pengemængden stiger, og det har den de sidste mange årtier gjort med cirka 70 milliarder kroner om året, sidste år med hele 140 milliarder.<br>Banker er private virksomheder, og derfor udsteder de lån – altså penge – til formål, som er profitable og sikre for banken. Som oftest faste aktiver. Cirka 75 procent af udlån i danske banker er boligrelaterede. Meget få er til regenerativt jordbrug. <br> <br> Derfor burde vi spørge os selv om private virksomheder er et smart sted at placere kernen i den samfundskritiske institution, som pengesystemet er, nemlig pengeskabelsen. Og derfor er det essentielt, at vi begynder at inkludere pengeskabelsen i debatten om mulighederne for den grønne omstilling.",
        link: "https://klimamonitor.dk/debat/art8482256/Demokratiser-pengeskabelsen-og-indfri-den-grønne-omstilling",
        image: "https://images.squarespace-cdn.com/content/v1/587382daebbd1a717d8e9df3/7a3a4aff-519f-4d00-acd4-969b8503a575/Udklipklimademo.PNG?format=1000w"
    },
    //uden describ
    {
        name: "Demokratiser pengeskabelsen og indfri den grønne omstilling",
        type: "Artikel",
        rating: 10,
        price: 0.00,
        date: "2021-11-29",
        authors: "Mads Thunestvedt, Andrea Thorup",
        theme: ["Banker", "Klima", "Grøn omstilling", "Pengeskabelse"],
      
        link: "https://klimamonitor.dk/debat/art8482256/Demokratiser-pengeskabelsen-og-indfri-den-grønne-omstilling",
        image: "https://images.squarespace-cdn.com/content/v1/587382daebbd1a717d8e9df3/7a3a4aff-519f-4d00-acd4-969b8503a575/Udklipklimademo.PNG?format=1000w"
    },
    //uden link
    {
        name: "Demokratiser pengeskabelsen og indfri den grønne omstilling",
        type: "Artikel",
        rating: 10,
        price: 0.00,
        date: "2021-11-29",
        authors: "Mads Thunestvedt, Andrea Thorup",
        theme: ["Banker", "Klima", "Grøn omstilling", "Pengeskabelse"],
        description: "Banker skaber penge – mange penge: Pengemængden stiger, og det har den de sidste mange årtier gjort med cirka 70 milliarder kroner om året, sidste år med hele 140 milliarder.<br>Banker er private virksomheder, og derfor udsteder de lån – altså penge – til formål, som er profitable og sikre for banken. Som oftest faste aktiver. Cirka 75 procent af udlån i danske banker er boligrelaterede. Meget få er til regenerativt jordbrug. <br> <br> Derfor burde vi spørge os selv om private virksomheder er et smart sted at placere kernen i den samfundskritiske institution, som pengesystemet er, nemlig pengeskabelsen. Og derfor er det essentielt, at vi begynder at inkludere pengeskabelsen i debatten om mulighederne for den grønne omstilling.",
      
        image: "https://images.squarespace-cdn.com/content/v1/587382daebbd1a717d8e9df3/7a3a4aff-519f-4d00-acd4-969b8503a575/Udklipklimademo.PNG?format=1000w"
    },
    //uden image
    {
        name: "Demokratiser pengeskabelsen og indfri den grønne omstilling",
        type: "Artikel",
        rating: 10,
        price: 0.00,
        date: "2021-11-29",
        authors: "Mads Thunestvedt, Andrea Thorup",
        theme: ["Banker", "Klima", "Grøn omstilling", "Pengeskabelse"],
        description: "Banker skaber penge – mange penge: Pengemængden stiger, og det har den de sidste mange årtier gjort med cirka 70 milliarder kroner om året, sidste år med hele 140 milliarder.<br>Banker er private virksomheder, og derfor udsteder de lån – altså penge – til formål, som er profitable og sikre for banken. Som oftest faste aktiver. Cirka 75 procent af udlån i danske banker er boligrelaterede. Meget få er til regenerativt jordbrug. <br> <br> Derfor burde vi spørge os selv om private virksomheder er et smart sted at placere kernen i den samfundskritiske institution, som pengesystemet er, nemlig pengeskabelsen. Og derfor er det essentielt, at vi begynder at inkludere pengeskabelsen i debatten om mulighederne for den grønne omstilling.",
        link: "https://klimamonitor.dk/debat/art8482256/Demokratiser-pengeskabelsen-og-indfri-den-grønne-omstilling",
      
    },
    //med det hele!
    {
        name: "Demokratiser pengeskabelsen med det hele og indfri den grønne omstilling",
        type: "Artikel",
        rating: 11,
        price: 0.00,
        date: "2021-11-29",
        authors: "Mads Thunestvedt, Andrea Thorup",
        theme: ["Banker", "Klima", "Grøn omstilling", "Pengeskabelse"],
        description: "Banker skaber penge – mange penge: Pengemængden stiger, og det har den de sidste mange årtier gjort med cirka 70 milliarder kroner om året, sidste år med hele 140 milliarder.<br>Banker er private virksomheder, og derfor udsteder de lån – altså penge – til formål, som er profitable og sikre for banken. Som oftest faste aktiver. Cirka 75 procent af udlån i danske banker er boligrelaterede. Meget få er til regenerativt jordbrug. <br> <br> Derfor burde vi spørge os selv om private virksomheder er et smart sted at placere kernen i den samfundskritiske institution, som pengesystemet er, nemlig pengeskabelsen. Og derfor er det essentielt, at vi begynder at inkludere pengeskabelsen i debatten om mulighederne for den grønne omstilling.",
        link: "https://klimamonitor.dk/debat/art8482256/Demokratiser-pengeskabelsen-og-indfri-den-grønne-omstilling",
        image: "https://images.squarespace-cdn.com/content/v1/587382daebbd1a717d8e9df3/7a3a4aff-519f-4d00-acd4-969b8503a575/Udklipklimademo.PNG?format=1000w"
    },
        /*
    {
        name: "Rækkefølge bestemmer",
        type: "Artikel",
        description: "om Gp",
        authors: "Mads Thunestvedt, Andrea Thorup",
        theme: [
            "English",
            "Dansk",
            
            "Pengeskabelse",
            "Clearing",
            "Betalingssystemer",
            "Pengereform",
            "EU",
            
            "Pengepolitik",
            
            "Centralbanker",
            "Banker (private)",
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
            ],
        rating: 0      
    }
    */
];
