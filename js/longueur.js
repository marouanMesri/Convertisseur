"use strict";

/**
 * CONVERTISSEUR D'UNITES
 * 
 * Objectif : Convertir une unité de grandeur en une autre unité de la même grandeur.
 * 
 *  @see https://fr.wikipedia.org/wiki/Unit%C3%A9_de_longueur
 * 
 * ID dans le code HTML :
 * - zoneInformations
 * - uniteDepart
 * - valeurDepart
 * - uniteArrivee
 * - nbDecimales
 * - boutonConvertir
 * - zoneResultat
 * - zoneFormule
 * 
 * @author Christophe COURONNE & Marouan MESRI
 */



/**
 * CREATION VARIABLE & EVENEMENTS SUR LE BOUTON CONVERTIR
 * 
 * Le clic sur le bouton CONVERTIR doit lancer la fonction calculFormule et alertEntreeConforme
 */
let clicConvertir = document.getElementById("boutonConvertir");
clicConvertir.addEventListener("click", calculFormule);




/**
 * !!! A MODIFIER EN CAS D'AJOUT DE NOUVELLE GRANDEUR !!!
 * 
 * CREATION DU TEXTE DE RESTRICTION DANS LA ZONE INFOS
 * 
 * Une partie de ce texte est à reporter dans la partie Alerte
 */
let textInfo = document.getElementById("zoneInformations");
textInfo.textContent = "La valeur saisie doit être un nombre. Le nombre de décimales doit être un entier supérieur ou égal à 0.";



/**
 * RECUPERATION UNITE DE DEPART
 * 
 * @inner Les unités sont fixes. Donc pas de valeurs undefined.
 * @returns Unité de départ sélectionnée
 */
function recupereUniteDepart() {
    return document.getElementById("uniteDepart").value;
}



/**
 * RECUPERATION VALEUR DE DEPART
 * 
 * @inner Bloqué à la saisie d'une valeur numérique.
 * @returns valeur de départ saisie
 */
function recupereValeurDepart() {
    return document.getElementById("valeurDepart").value;
}



/**
 * RECUPERATION UNITE D'ARRIVEE
 * 
 * @inner Les unités sont fixes. Donc pas de valeurs undefined.
 * @returns Unité d'arrivée sélectionnée
 */
function recupereUniteArrivee() {
    return document.getElementById("uniteArrivee").value;
}



/**
 * RECUPERATION DECIMALES
 * 
 * @inner Bloqué à la saisie d'une valeur numérique.
 * @returns Nombre de décimales à afficher
 */
function recupereNbDecimales() {
    return document.getElementById("nbDecimales").value;
}



/**
 * !!! A MODIFIER EN CAS D'AJOUT DE NOUVELLE GRANDEUR !!!
 * 
 * VERIFICATION CONFORMITE VALEUR DE DEPART
 * 
 *  * Récupère la valeur et la transforme en entier positif.
 * @returns Valeur de départ mis en conformité
 */
function recupereValeurConforme() {
    let valeurDepart = recupereValeurDepart();
    let valeurConforme;
    if (isNaN(valeurDepart)) {
        valeurConforme = 0;
        alert("La valeur doit être un nombre. La valeur retenue est : " + valeurConforme);
    } else {
        valeurConforme = valeurDepart;
    };
    return valeurConforme;
}



/**
 * VERIFICATION CONFORMITE DES DECIMALES
 * 
 * Récupère la valeur et la transforme en entier positif.
 */
function recupereNbDecimalesConforme() {
    let nbDecimales = parseInt(recupereNbDecimales());
    let nbDecimalesConforme;
    if (nbDecimales < 0 || Number.isInteger()) {
        nbDecimalesConforme = nbDecimales * -1;
        alert("Le nombre de décimales doit être un entier supérieur ou égal à 0. Le nombre de décimales retenues est : " + nbDecimalesConforme);
    } else if (isNaN(nbDecimales)) {
        nbDecimalesConforme = 0;
        alert("Le nombre de décimales doit être un entier supérieur ou égal à 0. Le nombre de décimales retenues est : " + nbDecimalesConforme);
    } else {
        nbDecimalesConforme = nbDecimales;
    }
    return nbDecimalesConforme;
}



/**
 * !!! A MODIFIER EN CAS D'AJOUT DE NOUVELLE GRANDEUR !!!
 * 
 * FONCTION CONVERTIR EN UNITE DE BASE
 */
function uniteToBase() {
    let uniteDepart = recupereUniteDepart();
    let valeurConforme = recupereValeurConforme();
    let valeurTemp = 0;
    switch (uniteDepart) {
        case 'mm':
            valeurTemp = valeurConforme * 10 ** -3;
            break;
        case 'cm':
            valeurTemp = valeurConforme * 10 ** -2;
            break;
        case 'm':
            valeurTemp = valeurConforme;
            break;
        case 'km':
            valeurTemp = valeurConforme * 10 ** 3;
            break;
        case 'yd':
            valeurTemp = valeurConforme * 0.9144;
            break;
        case 'ft':
            valeurTemp = valeurConforme * 0.3048;
            break;
        case 'doigt':
            valeurTemp = valeurConforme * 0.0185;
            break;
        case 'toise':
            valeurTemp = valeurConforme * 1.949;
            break;
        case 'aune':
            valeurTemp = valeurConforme * 1.2192;
            break;
        case 'pc':
            valeurTemp = valeurConforme * (648000 / 3.1416) * 9461 * 10 ** 12;
            break;
        case 'al':
            valeurTemp = valeurConforme * 9461 * 10 ** 12;
            break;
        default:
            alert("Ceci n'est pas une expression valide");
    }
    return valeurTemp;
}



/**
 * !!! A MODIFIER EN CAS D'AJOUT DE NOUVELLE GRANDEUR !!!
 * 
 * FONCTION AFFICHAGE FORMULE CONVERSION EN UNITE DE BASE
 */
function formuleUniteToBase() {
    let uniteDepart = recupereUniteDepart();
    let valeurConforme = recupereValeurConforme();
    let formuleA = "";
    switch (uniteDepart) {
        case 'mm':
            formuleA = valeurConforme + uniteDepart + " x 10^-3";
            break;
        case 'cm':
            formuleA = valeurConforme + uniteDepart + " x 10^-2";
            break;
        case 'm':
            formuleA = valeurConforme + uniteDepart;
            break;
        case 'km':
            formuleA = valeurConforme + uniteDepart + " x 10^3";
            break;
        case 'yd':
            formuleA = valeurConforme + uniteDepart + " x 0,9144";
            break;
        case 'ft':
            formuleA = valeurConforme + uniteDepart + " x 0,3048";
            break;
        case 'doigt':
            formuleA = valeurConforme + uniteDepart + " x 0,0185";
            break;
        case 'toise':
            formuleA = valeurConforme + uniteDepart + " x 1,949";
            break;
        case 'aune':
            formuleA = valeurConforme + uniteDepart + " x 1,2192";
            break;
        case 'pc':
            formuleA = valeurConforme + uniteDepart + " x ( 648000 / pi ) x 9461 x 10^12";
            break;
        case 'al':
            formuleA = valeurConforme + uniteDepart + " x 9461 x 10^12";
            break;
        default:
            alert("Ceci n'est pas une expression valide");
    }
    return formuleA;
}



/**
 * !!! A MODIFIER EN CAS D'AJOUT DE NOUVELLE GRANDEUR !!!
 * 
 * FONCTION CONVERTIR EN UNITE D'ARRIVEE
 */
function baseToUnite() {
    let uniteArrivee = recupereUniteArrivee();
    let valeurTemp = uniteToBase();
    let valeurArrivee = 0;
    switch (uniteArrivee) {
        case 'mm':
            valeurArrivee = valeurTemp / 10 ** -3;
            break;
        case 'cm':
            valeurArrivee = valeurTemp / 10 ** -2;
            break;
        case 'm':
            valeurArrivee = valeurTemp;
            break;
        case 'km':
            valeurArrivee = valeurTemp / 10 ** 3;
            break;
        case 'yd':
            valeurArrivee = valeurTemp / 0.9144;
            break;
        case 'ft':
            valeurArrivee = valeurTemp / 0.3048;
            break;
        case 'doigt':
            valeurArrivee = valeurTemp / 0.0185;
            break;
        case 'toise':
            valeurArrivee = valeurTemp / 1.949;
            break;
        case 'aune':
            valeurArrivee = valeurTemp / 1.2192;
            break;
        case 'pc':
            valeurArrivee = valeurTemp / (648000 / 3.1416) * 9461 * 10 ** 12;
            break;
        case 'al':
            valeurArrivee = valeurTemp / 9461 * 10 ** 12;
            break;
        default:
            alert("Ceci n'est pas une expression valide");
    }
    return valeurArrivee;
}



/**
 * !!! A MODIFIER EN CAS D'AJOUT DE NOUVELLE GRANDEUR !!!
 * 
 * FONCTION AFFICHAGE FORMULE CONVERSION EN UNITE DE BASE
 */
function formuleBaseToUnite() {
    let uniteArrivee = recupereUniteArrivee();
    let formuleA = formuleUniteToBase();
    let formuleB = "";
    switch (uniteArrivee) {
        case 'mm':
            formuleB = "( " + formuleA + " ) / 10^-3";
            break;
        case 'cm':
            formuleB = "( " + formuleA + " ) / 10^-2";
            break;
        case 'm':
            formuleB = "( " + formuleA + " )";
            break;
        case 'km':
            formuleB = "( " + formuleA + " ) / 10^3";
            break;
        case 'yd':
            formuleB = "( " + formuleA + " ) / 0,9144";
            break;
        case 'ft':
            formuleB = "( " + formuleA + " ) / 0,3048";
            break;
        case 'doigt':
            formuleB = "( " + formuleA + " ) / 0,0185";
            break;
        case 'toise':
            formuleB = "( " + formuleA + " ) / 1,949";
            break;
        case 'aune':
            formuleB = "( " + formuleA + " ) / 1,2192";
            break;
        case 'pc':
            formuleB = "( " + formuleA + " ) / (648000 / 3,1416) x 9461 x 10^12";
            break;
        case 'al':
            formuleB = "( " + formuleA + " ) / 9461 x 10^12";
            break;
        default:
            alert("Ceci n'est pas une expression valide");
    }
    return formuleB;
}



/**
 * FONCTION REDUIT LA VALEUR D'ARRIVEE EN FONCTION DU NOMBRE DE DECIMALES
 * 
 * Et affiche le résultat
 * @returns valeur d'arrivée réduite en fonction du nombre de décimale
 */
function valeurArriveeReduite() {
    let nbDecimalesConforme = recupereNbDecimalesConforme();
    let valeurArrivee = baseToUnite();
    let valeurArriveeReduite;
    if (nbDecimalesConforme == 0) {
        valeurArriveeReduite = parseInt(valeurArrivee);
    } else {
        valeurArriveeReduite = valeurArrivee.toFixed(nbDecimalesConforme);
    };
    let textResultat = document.getElementById("zoneResultat");
    textResultat.textContent = valeurArriveeReduite;
    return valeurArriveeReduite;
}



/**
 * FONCTION DE CALCUL DE LA FORMULE
 * 
 * Définit simplement un coef entre la valeur de départ et la valeur d'arrivée
 * Et affiche la fonction
 * @returns une string
 */
function calculFormule() {
    let uniteArrivee = recupereUniteArrivee();
    let valeurArriveeReduitE = valeurArriveeReduite();
    let formuleUniteToUnite = formuleBaseToUnite()
    let textFormule = document.getElementById("zoneFormule");
    let formuleComplete = valeurArriveeReduitE + uniteArrivee + " = " + formuleUniteToUnite;
    textFormule.textContent = formuleComplete;
}



// /**
//  * LISTE DE CONTROLES
//  */
// function listeControles() {
//     console.log("Unité de Départ : " + recupereUniteDepart());
//     console.log("Valeur de Départ : " + recupereValeurDepart());
//     console.log("Unité d'Arrivée : " + recupereUniteArrivee());
//     console.log("Nombre de Décimales : " + recupereNbDecimales());
//     console.log("Valeur Conforme : " + recupereValeurConforme());
//     console.log("Nb Decimales Conforme : " + recupereNbDecimalesConforme());
//     console.log("Valeur en mètre : " + uniteToBase());
//     console.log("Valeur en unite d'Arrivée : " + baseToUnite());
//     console.log("Valeur d'Arrivée Réduite : " + valeurArriveeReduite());
//     console.log("Formule : " + calculFormule())
// }
// clicConvertir.addEventListener("click", listeControles);