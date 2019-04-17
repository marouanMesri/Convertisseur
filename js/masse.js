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
    let uniteDepart = recupereUniteDepart();
    let valeurDepart = recupereValeurDepart();
    let valeurConforme;
    if (isNaN(valeurDepart)) {
        valeurConforme = 0;
        alert("La valeur doit être un nombre. La valeur retenue est : " + valeurConforme+uniteDepart);
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
        case 'mg':
            valeurTemp = valeurConforme * 10 ** -6;
            break;
        case 'g':
            valeurTemp = valeurConforme * 10 ** -3;
            break;
        case 'kg':
            valeurTemp = valeurConforme;
            break;
        case 't':
            valeurTemp = valeurConforme * 10 ** 3;
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
        case 'mg':
            formuleA = valeurConforme + uniteDepart + " x 10^-6";
            break;
        case 'g':
            formuleA = valeurConforme + uniteDepart + " x 10^-3";
            break;
        case 'kg':
            formuleA = valeurConforme + uniteDepart;
            break;
        case 't':
            formuleA = valeurConforme + uniteDepart + " x 10^3";
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
        case 'mg':
            valeurArrivee = valeurTemp / 10 ** -6;
            break;
        case 'g':
            valeurArrivee = valeurTemp / 10 ** -3;
            break;
        case 'kg':
            valeurArrivee = valeurTemp;
            break;
        case 't':
            valeurArrivee = valeurTemp / 10 ** 3;
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
        case 'mg':
            formuleB = "( " + formuleA + " ) / 10^-6";
            break;
        case 'g':
            formuleB = "( " + formuleA + " ) / 10^-3";
            break;
        case 'kg':
            formuleB = "( " + formuleA + " )";
            break;
        case 't':
            formuleB = "( " + formuleA + " ) / 10^3";
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