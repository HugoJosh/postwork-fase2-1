(()=>{"use strict";var n={740:(n,e,t)=>{t.d(e,{Z:()=>f});var r=t(645),a=t.n(r),i=t(667),o=t.n(i),d=new URL(t(917),t.b),p=new URL(t(794),t.b),s=a()((function(n){return n[1]})),l=o()(d),c=o()(p);s.push([n.id,"/*Imagen de fondo*/\nbody {\n  background-image: url("+l+");\n  background-repeat: no-repeat;\n  background-size: 100%;\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n  width: 100% !important;\n}\n/*Navbar de la pagina*/\n.navbar {\n  background-color: #6adea6;\n  display: flex;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.336);\n}\n/*Estilo a cada etiqueta a*/\na {\n  text-decoration: none;\n  padding-top: 20px;\n}\n\n/*Padding a LOGO*/\n.logo{\n    padding-left: 40px;\n}\n\n/*Estilos al h1 llamado LOGO*/\n.logo > h1 {\n  color: white;\n  font-family: Modak;\n  font-weight: 1000;\n  font-size: 40px;\n}\n\n/*Opciones del lado derecho, Recetas, Ingredientes, Acerca de */\n.opciones > a{    \n    padding-right: 50px;\n    color: #157145;\n    font-style: normal;\n    font-size: 1.5rem;\n    line-height: 70px;\n    font-family: 'Kadwa', sans-serif;\n    font-weight: 400;\n}\n\n/*H1*/\n.contenedor{\n    display: flex;\n    flex-direction: column;\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n    width: 100% !important;\n\n}\n/* Imagen bajo la navbar\nELIMINADA\nSimplemente no se veía bien.\n*/\n\n\n/*ETIQUETA H3*/\n.h3{\n    padding-top: 120px;\n    padding-bottom: 20px;\n    padding-left: 25px;\n    color: #157145;\n    font-weight: 900;\n    font-size: 50px;\n    line-height: 160%;\n    font-family: 'Catamaran', sans-serif;\n    text-shadow: 4px 4px 0px rgb(255, 255, 255);\n}\n\n/*Parrafo debajo del h3*/\n.p1{\n    font-family: 'Kadwa', sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 25px;\n    padding-left: 40px;\n    padding-bottom: 60px;\n}\n\n/*Clase general de los inputs*/\n.inputs {\n  display: flex;\n  margin-left: 3%;\n}\n\n/*Input para buscar receta*/\ninput {\n  border: 2px solid #35d789;\n  border-radius: 20px;\n  background-image: url("+c+");\n  background-position: 15px 14px;\n  background-repeat: no-repeat;\n  padding: 10px 400px 10px 40px;\n  margin-right: 5%;\n  font-size:20px;\n  line-height:30px;\n  font-weight:600;\n}\n\n/*Placeholder del input*/\ninput::placeholder {\n  color: #157145;\n}\n\n/*Clase del boton para buscar random*/\n.bRandom{\n    display:flex;\n    border-radius: 20px;\n    align-items: center;\n    width: 16%;\n    background-color: #35D789;\n    border: 2px solid #35D789;\n    color: #142b1f;\n}\n\n/*img random que está en el input*/\n.bRandom > img {\n  width: 15%;\n  margin-left: 2%;\n  margin-top: 1%;\n  padding-right: 10px;\n}\n\n/*h6 debajo de los input*/\n.th6{\n    padding-top: 70px;\n    padding-left: 40px;\n    font-family: 'Kadwa', sans-serif;\n    font-style: normal;\n    font-weight: 900;\n    font-size: 25px;\n    line-height: 90px;\n    color: #157145;\n}\n\n/*div con las imagenes en cicrulo y descripcion*/\n.instruccion {\n  display: flex;\n  height: 240px;\n  margin-top: 30px;\n  justify-content: space-around;\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n  width: 100% !important;\n}\n\n/*Tamaño de las imagenes*/\n.uno {\n  margin-left: 10%;\n}\n\n.uno,\n.dos,\n.tres {\n  width: 30%;\n}\n.uno > img,\n.dos > img,\n.tres > img {\n  width: 40%;\n  margin-left: 5%;\n}\n\n/*Parrafos debajo de las imagenes*/\n.uno > p, .dos > p, .tres > p{\n    width:50%;\n    font-family: 'Pridi', sans-serif;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 24px;\n    line-height: 37px;\n    text-align: center;\n    color: #0c4b2c;\n}\n\n/*h6 de prrueba nuestras sugerencias*/\n.th6-2{\n    margin-top: 100px;\n    padding-top:20px;\n    padding-left: 40px;\n    font-family: 'Kadwa', sans-serif;\n    font-style: normal;\n    font-weight: 900;\n    font-size: 25px;\n    line-height: 90px;\n    color: #157145;\n}\n\n/*Listado de sugerencias de recetas*/\n.cuadrado{\n    width: 80%;\n    height: 240px;\n    background-color: #9DE5B6;\n}\n\n/*Centrando carousel*/\n.carousel {\n  padding-left: 20%;\n}\n\n/*Centrando parrafo del carousel*/\n.carousel-item > p {\n  padding-left: 35%;\n  padding-top: 10px;\n}\n\n/*h6 de prrueba nuestras sugerencias*/\n.th6-3{\n    padding-top: 20px;\n    padding-left: 40px;\n    font-family: 'Kadwa', sans-serif;\n    font-style: normal;\n    font-weight: 900;\n    font-size: 25px;\n    line-height: 90px;\n    color: #157145;\n}\n\n/*Div de los circulos*/\n.ingredientes-tips {\n  display: flex;\n  text-align: center;\n  justify-content: space-around;\n  padding-bottom: 100px;\n}\n\n/*Creacion de los circulos en los ingredientes*/\n.circulo {\n  width: 100px;\n  height: 100px;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n  background: #6adea6;\n}\n\n/*Footer*/\n.page-footer {\n  background-color: #157145;\n}\n\n/*Estilos a los nombres de los integrantes*/\n.integrantes {\n  padding-left: 10%;\n  color: #fff;\n}\n.sug_recetas {\n  margin-top: 5%;\n  margin-bottom: 3%;\n}\n.page-footer {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 8rem;\n  width: 100%;\n}\n\n/****************************************\n*COMIENZA SECCIÓN RESULTADOS DE BÚSQUEDA*\n*****************************************/\n.meal-results{\n  width: 80%;\n  display: none; \n  flex-direction: column;\n  margin: 75px 100px 0 80px;\n}\n\n.results-title{\n  color: #157145;\n  font-family: Catamaran;\n  font-weight: bold;\n  font-size: 2em;\n}\n\n/* CONTENEDOR DE LOS RESULTADOS */\n.meals{\n  margin-top: 2rem;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n}\n\n.meals a{\n  text-decoration: inherit;\n}\n\n/* CONTENEDOR DEL CARD */\n.meal-item{\n  transition: 0.3s;\n  border-radius: 5px;\n}\n\n/* IMAGEN DEL CARD */\n.meal-item img{\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n}\n\n.meal-item:hover {\n  /* border: solid 1px #35d789; */\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n\n.meal-name {\n  margin-top: -10px;\n  padding: 2px 16px;\n}\n\n.meal-name{\n  padding: 10px 5px;\n  color: #363537;\n  font-size: 12px;\n  font-family: 'Pridi', serif;\n}\n\n/***************************************\n*TERMINA SECCIÓN RESULTADOS DE BÚSQUEDA*\n****************************************/\n\n/***************************************\n*        COMIENZA SECCIÓN RECETA       *\n****************************************/\n#receta {\n  background-color: #f5f5f5;\n}\n#receta-header {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 2rem;\n}\n#receta-header-right {\n  align-self: center;\n  margin-left: 4rem;\n  margin-bottom: 4rem;\n}\n/*Imagen de la receta */\n#contenedor-imagen-receta {\n  background-color: #6adea6;\n  height: 450px;\n  width: 450px;\n  color: black;\n}\n#imagen-receta {\n  max-width: 100%;\n}\n\n/*Nombre de la receta*/\n#titulo-receta {\n  margin-right: 10rem;\n  color: #157145;\n  font-weight: 900;\n  font-size: 3.5rem;\n  line-height: 160%;\n  font-family: \"Catamaran\", sans-serif;\n}\n/* Sólo para la palabra 'Ingredientes' */\n#titulo-receta + p {\n  font-family: \"Kadwa\", sans-serif;\n  font-weight: 700;\n  margin-left: 0.17rem;\n  margin-right: 4rem;\n  font-size: 1.2rem;\n  color: #157145;\n}\n#ingredientes {\n    display: flex;\n}\n.ingrediente {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.ingrediente > p {\n  color: #157145;\n  font-weight: 600;\n}\n/*Creacion de los circulos en los ingredientes*/\n.circulo {\n  width: 100px;\n  height: 100px;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n  background: #6adea6;\n  margin: auto 1em auto 1em;\n}\n\n/*Cuerpo de la receta (instrucciones, etc.)*/\n#receta-body {\n  font-family: \"Kadwa\", sans-serif;\n  font-weight: 400;\n  font-size: 1em;\n  max-width: 80%;\n  margin-left: 6.5rem;\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n  text-align: justify;\n}\n\n#receta-body > h5 {\n  color: #157145;\n  font-weight: 700;\n}\n/***************************************\n*        TERMINA SECCIÓN RECETA       *\n****************************************/\n@media (max-width: 800px) {\n  .contenedor2 {\n    flex-direction: row;\n    flex-wrap: wrap;\n    height: 100%;\n    justify-content: center;\n  }\n  .instruccion {\n    justify-content: center;\n    flex-direction: row;\n    flex-wrap: wrap;\n    height: 100%;\n  }\n  .uno > p,\n  .dos > p,\n  .tres > p {\n    line-height: 100%;\n  }\n  .uno > img,\n  .dos > img,\n  .tres > img {\n    width: 30%;\n    margin-left: 0;\n  }\n\n  .uno,\n  .dos,\n  .tres {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    padding: 4px;\n  }\n\n  .uno {\n    margin-left: 0;\n  }\n  .p1 {\n    font-size: 21px;\n    text-align: left;\n    font-weight: 500;\n    padding-bottom: 8px;\n    padding-left: 26px;\n  }\n  .h3 {\n    padding-top: 100px;\n    font-size: 40px;\n    padding-bottom:10px;\n    text-align: left;\n  }\n  input{\n    font-size: 16px;\n    font-weight: 600;\n    width:90%;\n    margin-top:3%;\n    margin-bottom: 3%;\n    padding:8px 40px;\n    margin:auto;\n  }\n  .bRandom {\n    font-size: 1em;\n    font-weight: 300;\n    line-height: 140%;\n    width:40%;\n    margin:auto;\n    margin-top: 3%;\n  }\n  .inputs{\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n  .logo {\n    padding-left: 20px;\n    padding-top: 6px;\n  }\n  .opciones > a {\n    padding-right: 10px;\n    color: #157145;\n    font-family: 'Kadwa', sans-serif;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 25px;\n    line-height: 40px;\n  }\n  .sug_recetas {\n    margin-top: 0%;\n    margin-bottom: 3%;\n  }\n  .th6-2 {\n    margin-top: 10px;\n    padding-top: 20px;\n    padding-left: 60px;\n    padding-bottom: 10px;\n    font-weight: 900;\n    font-size: 25px;\n    line-height: 40px;\n    color: #157145;\n  }\n  .contenedor2 {\n    display: flex;\n    flex-direction: column;\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n    width: 90% !important;\n    margin:auto !important;\n    margin-top: 3%;\n  }\n  /* Inician media queries de visualización de receta */\n  #receta-header {\n    flex-direction: column;\n  }\n  #contenedor-imagen-receta {\n    width: 250px;\n    height: 250px;\n    align-self: center;\n    margin-bottom: 2rem;\n  }\n  #titulo-receta {\n    font-size: 2.3rem;\n  }\n  #receta-body {\n    margin-left: 3rem;\n    margin-top: initial;\n  }\n}\n",""]);const f=s},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);r&&a[p[0]]||(t&&(p[2]?p[2]="".concat(t," and ").concat(p[2]):p[2]=t),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},91:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),e.hash&&(n+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(n)?'"'.concat(n,'"'):n):n}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},o=[],d=0;d<n.length;d++){var p=n[d],s=r.base?p[0]+r.base:p[0],l=i[s]||0,c="".concat(s," ").concat(l);i[s]=l+1;var f=t(c),g={css:p[1],media:p[2],sourceMap:p[3]};-1!==f?(e[f].references++,e[f].updater(g)):e.push({identifier:c,updater:a(g,r),references:1}),o.push(c)}return o}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var i=r(n=n||[],a=a||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var d=t(i[o]);e[d].references--}for(var p=r(n,a),s=0;s<i.length;s++){var l=t(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=p}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r=t.css,a=t.media,i=t.sourceMap;a?n.setAttribute("media",a):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},716:(n,e,t)=>{n.exports=t.p+"b8f786a1ae68b7ed8134.js"},513:(n,e,t)=>{n.exports=t.p+"af5406bf0e2e9158ffe9.css"},436:(n,e,t)=>{n.exports=t.p+"6d8254b484d0009868b7.jpeg"},417:(n,e,t)=>{n.exports=t.p+"5e4071cbccd56530eb52.jpeg"},917:(n,e,t)=>{n.exports=t.p+"a11d767ad17f57f03e06.jpeg"},445:(n,e,t)=>{n.exports=t.p+"46f8c63e73878c7ebcbd.jpeg"},275:(n,e,t)=>{n.exports=t.p+"da2e9fafe3ab00f7014d.svg"},794:(n,e,t)=>{n.exports=t.p+"b1f781b99ceaafb9c831.svg"}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,(()=>{var n=t(379),e=t.n(n),r=t(795),a=t.n(r),i=t(569),o=t.n(i),d=t(565),p=t.n(d),s=t(216),l=t.n(s),c=t(589),f=t.n(c),g=t(740),m={};m.styleTagTransform=f(),m.setAttributes=p(),m.insert=o().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=l(),e()(g.Z,m),g.Z&&g.Z.locals&&g.Z.locals;var u=t(91),h=t.n(u),x=new URL(t(513),t.b),b=new URL(t(275),t.b),w=new URL(t(417),t.b),y=new URL(t(445),t.b),v=new URL(t(436),t.b),E=new URL(t(716),t.b);h()(x),h()(b),h()(w),h()(y),h()(v),h()(E)})()})();