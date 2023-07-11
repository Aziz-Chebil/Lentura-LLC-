let lang={
    fr :{
        categoryOne:"Catégorie 1",
        fileName : "Nom de fichier",
        categoryTwo : "Catégorie 2",
        help :"Comment pouvons nous aider ?",
        propertyOne:"Propriété 1",
        addressOne : "Adresse 1",
        propertyTwo : "Propriété 2",
        addressTwo : "Adresse 2",
        propertyThree : "Propriété 3",
        addressThree : "Adresse 3",
        name :"Nom",
        logOut :"Vous avez été déconnectés",
        backk :"Retour",
        docs:"Document(s)",
        msg : "Message(s)",
        lease:"Mes bail(s)",
        list : "Liste(s)",
        lists :'Mes annonces',
        acct : "Compte",
        help : "Aide",
        logout : "Se déconnecter",
        location:"Location",
        go:"Où veux-tu aller?",
        size : "Taille",
        look :"Quelle taille cherchez-vous?",
        date:"Date / Durée",
        checkIn : "Enregistrement et départ"
        
    },
    en:{
        categoryOne:"Category 1",
        fileName : "File Name",
        categoryTwo : "Category 2",
        help:"How can we help?",
        propertyOne:"Property 1",
        addressOne : "Address 1",
        propertyTwo : "Property 2",
        addressTwo : "Address 2",
        propertyThree : "Property 3",
        addressThree : "Address 3",
        name:"Name",
        logOut:"You've been logged out",
        backk:"Back",
        docs:"Document(s)",
        msg : "Message(s)",
        lease:"My Lease(s)",
        list : "List(s)",
        lists :'My listing(s)',
        acct : "Account",
        help : "Help",
        logout : "Log out",
        location:"Location",
        go:"Where do you want to go?",
        size:"Size",
        look:"What size are you looking for?",
        date:"Date / Length",
        checkIn : "Check-in & Check-out"



    },
    de:{
        categoryOne:"Kategorie 1",
        fileName : "Dateinamen",
        categoryTwo : "Kategorie 2",
        help :"Wie können wir helfen ?",
        propertyOne:"Eigentum 1",
        addressOne : "Adresse 1",
        propertyTwo : "Eigentum 2",
        addressTwo : "Adresse 2",
        propertyThree : "Eigentum 3",
        addressThree : "Adresse 3",
        name :"Name",
        logOut :"Sie wurden ausgeloggt",
        backk:"Rückmeldung",
        docs:"Unterlagen",
        msg : "Mitteilungen",
        lease:"meine(n) Mietvertrag(e)",
        list : "Listen",
        lists :'Meine Angebote',
        acct : "Konto",
        help : "Hilfe",
        logout : "Ausloggen",
        location:"Standort",
        go:"Wohin willst du gehen?",
        size :"Größe",
        look:"Welche Größe suchen Sie?",
        date:"Datum/Länge",
        checkIn:"Einchecken Auschecken"
    },
    ch:{
        categoryOne:"第 1",
        fileName : "文件名",
        categoryTwo : "第2类",
        help : "我们能帮你什么吗 ？",
        propertyOne : "属性 1",
        addressOne : "地址 1",
        propertyTwo : "属性 2",
        addressTwo : "地址 2",
        propertyThree : "属性 3",
        addressThree : "地址 3",
        name : "姓名",
        logOut : "你已经注销了",
        backk : "反馈",
        docs:"文件",
        msg : "消息",
        lease:"我的租约",
        list : "列表",
        lists :'我的列表',
        acct : "帐户",
        help : "帮助",
        logout : "登出",
        location : "地点",
        go:"你想去哪里？",
        size:"尺寸",
        look : "你在找什么尺码的？",
        date:"日期/长度",
        checkIn : "入住和退房"

    }
}

let selector=document.getElementById("language-selector");
selector.onchange= updateLanguage ;

function updateLanguage(){
    let language = selector.options[selector.selectedIndex].value;
    let nodes= document.querySelectorAll('[data-lang]');
    let i = nodes.length;
    while (i--){
        let key=nodes[i].getAttribute('data-lang');
        nodes[i].innerHTML = lang[language][key];


    }
}
