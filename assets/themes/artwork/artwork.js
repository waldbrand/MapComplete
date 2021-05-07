parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"cKL7":[function(require,module,exports) {
module.exports={id:"artworks",version:"2020-08-30",title:{en:"Open Artwork Map",nl:"Kunstwerkenkaart",fr:"Carte ouverte des œuvres d'art",de:"Freie Kunstwerk-Karte"},description:{en:"Welcome to Open Artwork Map, a map of statues, busts, grafittis and other artwork all over the world",nl:"Welkom op de Open Kunstwerken Kaart",fr:"Bienvenue sur la carte ouverte des œuvres d'art, une carte des statues, fresques, ... du monde entier",de:"Willkommen bei der Freien Kunstwerk-Karte, einer Karte von Statuen, Büsten, Grafitti, ... auf der ganzen Welt"},language:["en","nl","fr","de"],icon:"./assets/themes/artwork/artwork.svg",maintainer:"MapComplete",startZoom:12,startLat:0,startLon:0,layers:[{id:"artwork",name:{en:"Artworks",nl:"Kunstwerken",fr:"Œuvres d'art",de:"Kunstwerke"},source:{osmTags:"tourism=artwork"},title:{render:{en:"Artwork",nl:"Kunstwerk",fr:"Œuvre d'art",de:"Kunstwerk"},mappings:[{if:"name~*",then:{en:"Artwork <i>{name}</i>",nl:"Kunstwerk <i>{name}</i>",fr:"Œuvre d'art <i>{name}</i>",de:"Kunstwerk <i>{name}</i>"}}]},icon:{render:"./assets/themes/artwork/artwork.svg"},color:{render:"#0000ff"},width:{render:"10"},description:{en:"Diverse pieces of artwork",nl:"Verschillende soorten kunstwerken",fr:"Diverses œuvres d'art",de:"Verschiedene Kunstwerke"},minzoom:12,wayHandling:2,presets:[{tags:["tourism=artwork"],title:{en:"Artwork",nl:"Kunstwerk",fr:"Œuvre d'art",de:"Kunstwerk"}}],tagRenderings:["images",{render:{en:"This is a {artwork_type}",nl:"Dit is een {artwork_type}",fr:"Type d'œuvre : {artwork_type}",de:"Dies ist ein {artwork_type}"},question:{en:"What is the type of this artwork?",nl:"Wat voor soort kunstwerk is dit?",fr:"Quel est le type de cette œuvre d'art?",de:"Was ist die Art dieses Kunstwerks?"},freeform:{key:"artwork_type",addExtraTags:["fixme=Artowrk type was added with the freeform, might need another check"]},mappings:[{if:"artwork_type=architecture",then:{en:"Architecture",nl:"Architectuur",fr:"Architecture",de:"Architektur"}},{if:"artwork_type=mural",then:{en:"Mural",nl:"Muurschildering",fr:"Peinture murale",de:"Wandbild"}},{if:"artwork_type=painting",then:{en:"Painting",nl:"Schilderij",fr:"Peinture",de:"Malerei"}},{if:"artwork_type=sculpture",then:{en:"Sculpture",nl:"Beeldhouwwerk",fr:"Sculpture",de:"Skulptur"}},{if:"artwork_type=statue",then:{en:"Statue",nl:"Standbeeld",fr:"Statue",de:"Statue"}},{if:"artwork_type=bust",then:{en:"Bust",nl:"Buste",fr:"Buste",de:"Büste"}},{if:"artwork_type=stone",then:{en:"Stone",nl:"Steen",fr:"Rocher",de:"Stein"}},{if:"artwork_type=installation",then:{en:"Installation",nl:"Installatie",fr:"Installation",de:"Installation"}},{if:"artwork_type=graffiti",then:{en:"Graffiti",nl:"Graffiti",fr:"Graffiti",de:"Graffiti"}},{if:"artwork_type=relief",then:{en:"Relief",nl:"Reliëf",fr:"Relief",de:"Relief"}},{if:"artwork_type=azulejo",then:{en:"Azulejo (Spanish decorative tilework)",nl:"Azulejo (Spaanse siertegels)",fr:"Azulejo (faïence latine)",de:"Azulejo (spanische dekorative Fliesenarbeit)"}},{if:"artwork_type=tilework",then:{en:"Tilework",nl:"Tegelwerk",fr:"Carrelage",de:"Fliesenarbeit"}}]},{question:{en:"Which artist created this?",nl:"Welke artist creëerde dit kunstwerk?",fr:"Quel artiste a créé cette œuvre ?",de:"Welcher Künstler hat das geschaffen?"},render:{en:"Created by {artist_name}",nl:"Gecreëerd door {artist_name}",fr:"Créé par {artist_name}",de:"Erstellt von {artist_name}"},freeform:{key:"artist_name"}},{question:{en:"On which website is more information about this artwork?",nl:"Op welke website kan men meer informatie vinden over dit kunstwerk?",fr:"Sur quel site web pouvons-nous trouver plus d'informations sur cette œuvre d'art?",de:"Auf welcher Website gibt es mehr Informationen über dieses Kunstwerk?"},render:{en:"More information on <a href='{website}' target='_blank'>this website</a>",nl:"Meer informatie op <a href='{website}' target='_blank'>deze website</a>",fr:"Plus d'info <a href='{website}' target='_blank'>sûr ce site web</a>",de:"Weitere Informationen auf <a href='{website}' target='_blank'>dieser Webseite</a>"},freeform:{key:"website",type:"url"}},{question:{en:"Which wikidata-entry corresponds with <b>this artwork</b>?",nl:"Welk wikidata-item beschrijft dit kunstwerk?",fr:"Quelle entrée wikidata correspond à <b>cette œuvre d'art</b> ?",de:"Welcher Wikidata-Eintrag entspricht <b>diesem Kunstwerk</b>?"},render:{en:"Corresponds with <a href='https://www.wikidata.org/wiki/{wikidata}' target='_blank'>{wikidata}</a>",nl:"Komt overeen met <a href='https://www.wikidata.org/wiki/{wikidata}' target='_blank'>{wikidata}</a>",fr:"Correspond à <a href='https://www.wikidata.org/wiki/{wikidata}' target='_blank'>{wikidata}</a>",de:"Entspricht <a href='https://www.wikidata.org/wiki/{wikidata}' target='_blank'>{wikidata}</a>"},freeform:{key:"wikidata",type:"wikidata"}}]}]};
},{}]},{},["cKL7"], null)
//# sourceMappingURL=assets/themes/artwork/artwork.js.map