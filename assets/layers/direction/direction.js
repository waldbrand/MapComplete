parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ZMXP":[function(require,module,exports) {
module.exports={id:"direction",name:{en:"Direction visualization",nl:"Richtingsvisualisatie"},minzoom:16,source:{osmTags:{or:["camera:direction~*","direction~*"]}},doNotDownload:!0,passAllFeatures:!0,title:null,description:{en:"This layer visualizes directions",nl:"Deze laag toont de oriëntatie van een object"},tagRenderings:[],icon:{render:"direction_gradient:var(--catch-detail-color)","#":"For some weird reason, showing the icon in the layer control panel breaks the svg-gradient (because the svg gradient has a global color or smthng) - so we use a different icon without gradient",mappings:[{if:"id=node/-1",then:"direction:var(--catch-detail-color)"}]},rotation:{render:"{_direction:numerical}deg"},iconSize:"200,200,center",color:"--catch-detail-color",stroke:"0",presets:[],wayHandling:2};
},{}]},{},["ZMXP"], null)
//# sourceMappingURL=assets/layers/direction/direction.js.map