//============ MODULE ============
/*
    Para utilizar los módulos de ECMAScript
        Se necesita especificar que el código es modular en el archivo package.json
        // package.json
        {   
            ...
            "type": "module"
        }

    Exportaciones de código
        Consisten en crear funciones o variables para utilizarlas en otros archivos
        mediante la palabra reservada export.
            Ex: export {hello};

    Importaciones de código
        Consiste en usar funciones o variables de otros archivos mediante la palabra
        reservada import, que deberán estar siempre lo más arriba del archivo y
        utilizando el mismo nombre que el archivo original.
            Ex: import {hello} from "./../functions.js";

    Exportaciones por defecto
        Si solo UN valor será exportado, entonces se puede utilizar export default.
            Ex: export default hello;
    
    Importaciones por defecto
        Si únicamente un valor será importado, entonces se puede utilizar cualquier 
        nombre en la importación.
            Ex: import hello from "./../functions.js";
*/
import hello from "./09-module-export.js";
// import {hello} from "./09-module-export.js";

hello();