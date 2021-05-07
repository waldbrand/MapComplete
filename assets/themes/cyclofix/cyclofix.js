parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"viaW":[function(require,module,exports) {
module.exports={id:"cyclofix",title:{en:"Cyclofix - an open map for cyclists",nl:"Cyclofix - een open kaart voor fietsers",fr:"Cyclofix - Une carte ouverte pour les cyclistes",gl:"Cyclofix - Un mapa aberto para os ciclistas",de:"Cyclofix - eine offene Karte für Radfahrer"},description:{en:"The goal of this map is to present cyclists with an easy-to-use solution to find the appropriate infrastructure for their needs.<br><br>You can track your precise location (mobile only) and select layers that are relevant for you in the bottom left corner. You can also use this tool to add or edit pins (points of interest) to the map and provide more data by answering the questions.<br><br>All changes you make will automatically be saved in the global database of OpenStreetMap and can be freely re-used by others.<br><br>For more information about the cyclofix project, go to <a href='https://cyclofix.osm.be/'>cyclofix.osm.be</a>.",nl:"Het doel van deze kaart is om fietsers een gebruiksvriendelijke oplossing te bieden voor het vinden van de juiste infrastructuur voor hun behoeften.<br><br>U kunt uw exacte locatie volgen (enkel mobiel) en in de linkerbenedenhoek categorieën selecteren die voor u relevant zijn. U kunt deze tool ook gebruiken om 'spelden' aan de kaart toe te voegen of te bewerken en meer gegevens te verstrekken door de vragen te beantwoorden.<br><br>Alle wijzigingen die u maakt worden automatisch opgeslagen in de wereldwijde database van OpenStreetMap en kunnen  door anderen vrij worden hergebruikt.<br><br>Bekijk voor meer info over cyclofix ook <a href='https://cyclofix.osm.be/'>cyclofix.osm.be</a>.",fr:"Le but de cette carte est de présenter aux cyclistes une solution facile à utiliser pour trouver l'infrastructure appropriée à leurs besoins.<br><br>Vous pouvez suivre votre localisation précise (mobile uniquement) et sélectionner les couches qui vous concernent dans le coin inférieur gauche. Vous pouvez également utiliser cet outil pour ajouter ou modifier des épingles (points d'intérêt) sur la carte et fournir plus de données en répondant aux questions.<br><br>Toutes les modifications que vous apportez seront automatiquement enregistrées dans la base de données mondiale d'OpenStreetMap et peuvent être librement réutilisées par d'autres.<br><br>Pour plus d'informations sur le projet cyclofix, rendez-vous sur <a href='https://cyclofix.osm.be/'>cyclofix.osm.be</a>.",gl:"O obxectivo deste mapa é amosar ós ciclistas unha solución doada de empregar para atopar a infraestrutura axeitada para as súas necesidades.<br><br>Podes obter a túa localización precisa (só para dispositivos móbiles) e escoller as capas que sexan relevantes para ti na esquina inferior esquerda. Tamén podes empregar esta ferramenta para engadir ou editar puntos de interese ó mapa e fornecer máis datos respondendo as cuestións.<br><br>Todas as modificacións que fagas serán gardadas de xeito automático na base de datos global do OpenStreetMap e outros poderán reutilizalos libremente.<br><br>Para máis información sobre o proxecto cyclofix, vai a <a href='https://cyclofix.osm.be/'>cyclofix.osm.be</a>.",de:"Das Ziel dieser Karte ist es, den Radfahrern eine einfach zu benutzende Lösung zu präsentieren, um die geeignete Infrastruktur für ihre Bedürfnisse zu finden.<br><br>Sie können Ihren genauen Standort verfolgen (nur mobil) und in der linken unteren Ecke die für Sie relevanten Ebenen auswählen. Sie können dieses Tool auch verwenden, um Pins (Points of Interest/Interessante Orte) zur Karte hinzuzufügen oder zu bearbeiten und mehr Daten durch Beantwortung der Fragen bereitstellen.<br><br>Alle Änderungen, die Sie vornehmen, werden automatisch in der globalen Datenbank von OpenStreetMap gespeichert und können von anderen frei wiederverwendet werden.<br><br>Weitere Informationen über das Projekt Cyclofix finden Sie unter <a href='https://cyclofix.osm.be/'>cyclofix.osm.be</a>."},language:["en","nl","fr","gl","de"],maintainer:"MapComplete",credits:"Originally created during Open Summer of Code by Pieter Fiers, Thibault Declercq, Pierre Barban, Joost Schouppe and Pieter Vander Vennet",icon:"assets/themes/cyclofix/logo.svg",version:"0",startLat:0,defaultBackgroundId:"CartoDB.Voyager",startLon:0,startZoom:1,widenFactor:.05,socialImage:"assets/themes/cyclofix/logo.svg",layers:["bike_cafe","bike_shop",{builtin:"bicycle_library",override:{minzoom:13}},"bike_repair_station","bicycle_tube_vending_machine","drinking_water","bike_themed_object","bike_cleaning","bike_parking"],roamingRenderings:[]};
},{}]},{},["viaW"], null)
//# sourceMappingURL=assets/themes/cyclofix/cyclofix.js.map