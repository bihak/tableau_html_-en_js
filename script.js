let titre = document.createElement("h1")
document.body.appendChild(titre)
const newContent = document.createTextNode("Exercice javascript");
titre.appendChild(newContent)

let table = document.createElement("table")
table.id = 'table'
document.body.appendChild(table)

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

let bouton_check = document.createElement("input")
    bouton_check.id = 'bouton_sup'
    bouton_check.type = 'submit'
    bouton_check.value = 'sup check' 
    formulaire.appendChild(bouton_check)

    let inputajou = document.createElement("input")
    inputajou.id = 'ajout'
    inputajou.type = 'submit'
    inputajou.value = 'ajouter' 
    // inputajou.onclick = function(){ajou()}
    formulaire.appendChild(inputajou)


for ( let i=0 ; i< tab.length ; i++){

        let tableau = document.createElement("tr")
        tableau.id = 'tablau'+i
        table.appendChild(tableau)

        let tab_checkbox = document.createElement("td")
        tab_checkbox.id = 'tab_checkbox'+i
        tab_checkbox.classList = 'tab_checkbox'
        tableau.appendChild(tab_checkbox)

        let soustableau = document.createElement("td")
        soustableau.id = 'soustableau_nom'+i
        tableau.appendChild(soustableau)
        const newContent = document.createTextNode(tab[i])
        soustableau.appendChild(newContent);

        let soustablea = document.createElement("td")
        soustablea.id = 'soustableau'+i
        soustablea.className = "soustableau"
        tableau.appendChild(soustablea)
        const newConten = document.createTextNode("")
        soustablea.appendChild(newConten);

        let soustablau = document.createElement("td")
        soustablau.id = 'input_soustableau'+i
        tableau.appendChild(soustablau)

        let button_checkbox = document.createElement("input")
        button_checkbox.id = 'bouton_checkbox'+i
        button_checkbox.type = 'checkbox'
        tab_checkbox.appendChild(button_checkbox)

        let bouton = document.createElement("input")
        bouton.id = 'bouton'+i
        bouton.type = 'submit'
        bouton.value = 'supprimer' 
        bouton.onclick = function(){sup(this)}
        soustablau.appendChild(bouton)

        let button = document.createElement("input")
        button.id = 'bouton_deplacer'+i
        button.type = 'submit'
        button.value = 'deplacer' 
        button.onclick = function(){dep(this)}
        soustablau.appendChild(button)

        // if (i+1 == tab.length) {
        //     let inputajou = document.createElement("input")
        //     inputajou.id = 'ajout'+i
        //     inputajou.type = 'submit'
        //     inputajou.value = 'ajouter' 
        //     inputajou.onclick = function(){ajou()}
        //     formulaire.appendChild(inputajou)
        // }
}

function sup(e){
    let row = e.parentNode.parentNode
    row.parentNode.removeChild(row)
}
function dep(e) {
    let row = e.parentNode.parentNode
    let td1 = row.cells[1]
    let td2 = row.cells[2]
    let valtd1 = td1.innerHTML
    let valtd2 = td2.innerHTML
    
    td1.innerHTML = valtd2
    td2.innerHTML = valtd1
    
}
let ajout = document.getElementById('ajout');

ajout.addEventListener("click", function(e){
    e.preventDefault()
    let tab_ajou = document.getElementById("table")
    let taille = tab_ajou.rows.length
    let th = tab_ajou.insertRow(taille)
        th.id = "tablau"+taille
    let val = document.getElementById("text").value

    let checkbox = document.createElement('input')
    checkbox.type = "checkbox";
    checkbox.id = "bouton_checkbox"+taille
    let check = th.insertCell(0);
    check.classList = 'tab_checkbox'
    check.appendChild(checkbox)

    let td1 = th.insertCell(1)
        td1.id = "soustableau_nom"+taille

    let td2 = th.insertCell(2)
        td2.id = "soustableau"+taille

    let td3 = th.insertCell(3)
        td3.id = "input_soustableau"+taille

    td1.innerHTML = val
    td2.innerHTML = ""
    td3.innerHTML = '<button onclick="sup(this)">supprimer</button><button onclick="dep(this)">deplacer</button>'
    
})
let checksup = document.getElementById('bouton_sup');

checksup.addEventListener("click", function(e){
    e.preventDefault()
    let table2 = document.getElementById("table")
    let lignes = table2.getElementsByTagName('tr')
    for (let i = lignes.length - 1; i >= 0; i--) {
    let checkbox = lignes[i].getElementsByTagName('input')[0]
    if (checkbox.checked) {
        table2.removeChild(lignes[i]);
    }
    }
})