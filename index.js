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
    "https://www.youtube.com/embed/mFWQgxXM_b8?si=NbDLu_QZaJZOscGW&autoplay=1",
    "https://www.youtube.com/embed/IUZEtVbJT5c?si=Xv-pS0LF6We8ST6l&autoplay=1",
  "https://www.youtube.com/embed/Pb4nRgwQ5Jk?si=gclGsJJlCPom3Qdp&autoplay=1",
  "https://www.youtube.com/embed/gPD6E7SbT1U?si=VOB-K0t3Gp6ArBym&autoplay=1",
  "https://www.youtube.com/embed/4Tr0otuiQuU?si=varhYolioSMfAq4q&autoplay=1",
  "https://www.youtube.com/embed/52iOdAVU4C8?si=hyy2LVGcVNL6mk5e&autoplay=1",
  "https://www.youtube.com/embed/cC1AWfiz8lk?si=do5m2HPQv4bf084K&autoplay=1",
  "https://www.youtube.com/embed/oEhAvr3sWTc?si=aXZ4TJ01eJUq4Jpc&autoplay=1",
  "https://www.youtube.com/embed/0U-IXWaapx4?si=GLKVwrSdgL8-qlqS&autoplay=1",
  "https://www.youtube.com/embed/a9mg4KHqRPw?si=qyfGU2750VWiLm5E&autoplay=1",
  "https://www.youtube.com/embed/5UJOaGIhG7A?si=7LVkQhh3VfW2qoX6&autoplay=1"
];

const aikakausi = ["0", "0","1","1","2","2","2",
    "3","3","3","4","4","4",
    "5","5","5"];

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

    console.log(videos[randomIndex]);
});

document.querySelector(".näytäVastaukset").addEventListener("click", function() {
    const index = currentVideoIndex;
    radioButtons[parseInt(aikakausi[index])].checked = true;
    document.querySelector("#nimi").value = kappale[index];
    document.querySelector("#säveltäjä").value = säveltäjä[index];
});