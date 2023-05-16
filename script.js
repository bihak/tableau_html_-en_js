let table = document.createElement("table")
table.id = 'table'
document.body.appendChild(table)

// let tableau = document.createElement("td")
// tableau.id = 'tablau'
// table.appendChild(tableau)

// let tablau = document.createElement("td")
// tablau.id = 'tableau'
// table.appendChild(tablau)

// let bouton = document.createElement("input")
// bouton.id = 'bouton'
// bouton.type = 'submit'
// tablea.appendChild(bouton)

let tab = [
    "Nico",
    "Denis",
    "Arthur",
    "Morgan",
    "Nathan",
    "Alexandre",
    "Dorian",
    "Cyril",
    "Abdel",
    "Julien",
    "Françoise",
    "Fred",
];

let formulaire = document.createElement("form")
formulaire.id = 'formulaire'
formulaire.method = 'post'
document.body.appendChild(formulaire)
let inputtext = document.createElement("input")
inputtext.id = 'text'
inputtext.type = 'text'
formulaire.appendChild(inputtext)


for ( let i=0 ; i< tab.length ; i++){

        let tableau = document.createElement("tr")
        tableau.id = 'tablau' + i
        table.appendChild(tableau)

        let soustableau = document.createElement("td")
        soustableau.id = 'soustableau_nom' + i
        tableau.appendChild(soustableau)
        const newContent = document.createTextNode(tab[i]+i);
        soustableau.appendChild(newContent);

        let soustablea = document.createElement("td")
        soustablea.id = 'soustableau' + i
        tableau.appendChild(soustablea)
        const newConten = document.createTextNode("");
        soustablea.appendChild(newConten);

        let soustablau = document.createElement("td")
        soustablau.id = 'input_soustableau'
        tableau.appendChild(soustablau)

        let bouton = document.createElement("input")
        bouton.id = 'bouton'
        bouton.type = 'submit'
        bouton.value = 'supprimer' 
        bouton.onclick = function(){sup(i)}
        soustablau.appendChild(bouton)

        let button = document.createElement("input")
        button.id = 'bouton_deplacer'
        button.type = 'submit'
        button.value = 'deplacer' 
        button.onclick = function(){dep(i)}
        soustablau.appendChild(button)

        if (i+1 == tab.length) {
            let inputajou = document.createElement("input")
            inputajou.id = 'ajout'
            inputajou.type = 'button'
            inputajou.value = 'ajouter' 
            inputajou.onclick = function(){ajou(i)}
            formulaire.appendChild(inputajou)
        }
}


function ajou(e){
    console.log(e)
    let taille_table = document.getElementById("table")
    let taille = taille_table.rows.length;
    console.log(taille);
    let tableau = document.createElement("tr")
        tableau.id = 'tablau' + taille
        table.appendChild(tableau)
        let val = document.getElementById("text").value;
        let soustableau = document.createElement("td")
        soustableau.id = 'soustableau_nom' + taille
        tableau.appendChild(soustableau)
        const newContent = document.createTextNode(val+taille);
        soustableau.appendChild(newContent);

        let soustablea = document.createElement("td")
        soustablea.id = 'soustableau' + taille
        tableau.appendChild(soustablea)
        const newConten = document.createTextNode("");
        soustablea.appendChild(newConten);

        let soustablau = document.createElement("td")
        soustablau.id = 'input_soustableau'
        tableau.appendChild(soustablau)

        let bouton = document.createElement("input")
        bouton.id = 'bouton'
        bouton.type = 'submit'
        bouton.value = 'supprimer' 
        bouton.onclick = function(){sup(e)}
        soustablau.appendChild(bouton)

        let button = document.createElement("input")
        button.id = 'bouton_deplacer'
        button.type = 'submit'
        button.value = 'deplacer' 
        button.onclick = function(){dep(e)}
        soustablau.appendChild(button)
}
function sup(e){
    let tableau = document.getElementById("table");
    let elementASupprimer = document.getElementById("tablau" + e);
    tableau.removeChild(elementASupprimer);
}
function dep(e) {
    let tdElement = document.getElementById("soustableau_nom" + e);
    let valeur = tdElement.innerHTML;
    let tableau = document.getElementById("soustableau" + e);
    const newContent = document.createTextNode(valeur);
    tableau.appendChild(newContent);
    console.log(e);
}