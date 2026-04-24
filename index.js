document.querySelector("#piilota").addEventListener("click", function() {
    document.querySelector(".iframe").style.opacity = "0";
});

document.querySelector("#nayta").addEventListener("click", function() {
    document.querySelector(".iframe").style.opacity = "1";
});

const radioButtons = document.querySelectorAll('input[name="aikakausi"]');










const videos = ["https://www.youtube.com/embed/prnYCzIC4h4?si=GV5E64eOiqzHM_ay&autoplay=1", 
 "https://www.youtube.com/embed/QGVNsTpyJZY?si=WytWpM4cOJ4nZObn&autoplay=1",
 "https://www.youtube.com/embed/vxPB76pmWss?si=1c0wABiLIpj7UKTl&autoplay=1",
    "https://www.youtube.com/embed/KSmT4VIjEtI?si=pwOhhiwVG5tAFEW0&autoplay=1",
    "https://www.youtube.com/embed/ho9rZjlsyYY?si=8HQeXNuKBBf0rNy&autoplay=1",
    "https://www.youtube.com/embed/l-dYNttdgl0?si=xvdN2kiVgjEGXOGm&autoplay=1",
    "https://www.youtube.com/embed/IUZEtVbJT5c?si=Xv-pS0LF6We8ST6l&autoplay=1",
  "https://www.youtube.com/embed/Pb4nRgwQ5Jk?si=gclGsJJlCPom3Qdp&autoplay=1",
  "https://www.youtube.com/embed/RiESu1LNosE?si=r9dvX6NZJYUfBNto&autoplay=1",
  "https://www.youtube.com/embed/4Tr0otuiQuU?si=varhYolioSMfAq4q&autoplay=1",
  "https://www.youtube.com/embed/Im258Ea5FJA?si=arNtdGbomdtQNkRm&autoplay=1",
  "https://www.youtube.com/embed/cC1AWfiz8lk?si=do5m2HPQv4bf084K&autoplay=1",
  "https://www.youtube.com/embed/oEhAvr3sWTc?si=aXZ4TJ01eJUq4Jpc&autoplay=1",
  "https://www.youtube.com/embed/cH2PH0auTUU?si=NQZXgs0WmALBUguv&autoplay=1",
  "https://www.youtube.com/embed/wClwaBuFOJA?si=is4qkDFKwOrRcHbv&autoplay=1",
  "https://www.youtube.com/embed/gqJdR8_cw18?si=YRW7xOsnEgtrVUJ9&autoplay=1"
];

const aikakausi = ["Keskiaika", "keskiaika","renessanssi","renessanssi","barokki","barokki","barokki",
    "klassismi","klassismi","klassismi","romantiikka","romantiikka","romantiikka",
    "1900-luku","1900-luku","1900-luku"];

const säveltäjä = ["Etienne de Liège", "kings & beggars","ei tietoa",
    "Giovanni pierluigi","j.s. bach","Vivaldi","Händel","Haydn","Mozart",
    "Beethoven","Musorgski","Sibelius","Grieg","Gershwin","Varese","Stravinski"];

const kappale = ["Deum Verum", "breve regnum","renessanssi musiikkia linnassa",
    "palestrina","toccata ja fuuga","kevät","halleluja kuoro"
    ,"sinfonia nro 94-yllätys","sinfonia nro 40","kuutamosonaatti",
    "yö kaljulla vuorella","finlandia hymni","vuorenkuninkaan luolassa",
    "rhapsody in blue","Ionisation","kevätuhri"];








const iframe = document.querySelector(".iframe");
const randomVideoButton = document.querySelector(".randomVideo");

let currentVideoIndex = 0;

randomVideoButton.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * videos.length);
    currentVideoIndex = randomIndex;
    iframe.src = videos[randomIndex];   
});

document.querySelector(".näytäVastaukset").addEventListener("click", function() {
    const index = currentVideoIndex;
    radioButtons[index].checked = true;
    document.querySelector("#nimi").value = kappale[index];
    document.querySelector("#säveltäjä").value = säveltäjä[index];
});