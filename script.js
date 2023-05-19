let titre = document.createElement("h1")
titre.style.textAlign = "center"
document.body.appendChild(titre)
const newContent = document.createTextNode("Exercice javascript");
titre.appendChild(newContent)

let table = document.createElement("table")
table.id = 'table'
document.body.appendChild(table)
table.style.border = "solid 1px black";
table.style.width = "750px";
table.style.padding = "50px";
table.style.margin = "auto";
table.style.borderRadius= "15px";
table.style.backgroundColor = "#EBF5FB";

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
let inputtext = document.createElement("textarea")
    inputtext.id = 'text'
    inputtext.type = 'text'
    inputtext.cols = '61'
    inputtext.rows ='5'
    inputtext.style.display = "block"
    inputtext.style.margin = "20px auto auto auto"
    inputtext.style.width = "650px"
    inputtext.style.borderRadius= "15px";
    formulaire.appendChild(inputtext)

let bouton_check = document.createElement("input")
    bouton_check.id = 'bouton_sup'
    bouton_check.type = 'submit'
    bouton_check.value = 'sup check' 
    bouton_check.style.display = "block";
    bouton_check.style.margin = "20px auto auto auto";
    bouton_check.style.padding = "10px"
    bouton_check.style.width = "150px"
    bouton_check.style.borderRadius= "15px";
    bouton_check.style.backgroundColor = "#B5CEFF";
    bouton_check.style.borderColor = "#B5CEFF"; 
    bouton_check.style.cursor = "grab";
    formulaire.appendChild(bouton_check)

    let inputajou = document.createElement("input")
    inputajou.id = 'ajout'
    inputajou.type = 'submit'
    inputajou.value = 'ajouter' 
    inputajou.style.display = "block";
    inputajou.style.margin = "20px auto auto auto";
    inputajou.style.padding = "10px"
    inputajou.style.width = "150px"
    inputajou.style.borderRadius= "15px";
    inputajou.style.backgroundColor = "#B5CEFF";
    inputajou.style.borderColor = "#B5CEFF"; 
    inputajou.style.cursor = "grab";
    formulaire.appendChild(inputajou)


for ( let i=0 ; i< tab.length ; i++){

        let tableau = document.createElement("tr")
        tableau.id = 'tablau'+i
        tableau.style.border = "solid 1px red";
        tableau.style.width = "150px";
        table.appendChild(tableau)
        

        let tab_checkbox = document.createElement("td")
        tab_checkbox.id = 'tab_checkbox'+i
        tab_checkbox.classList = 'tab_checkbox'
        tableau.appendChild(tab_checkbox)

        let soustableau = document.createElement("td")
        soustableau.id = 'soustableau_nom'+i
        soustableau.style.borderBottom = "solid 1px #2471A3 ";
        soustableau.style.width = "150px";
        soustableau.style.textAlign = "center"
        tableau.appendChild(soustableau)
        const newContent = document.createTextNode(tab[i])
        soustableau.appendChild(newContent);

        let soustablea = document.createElement("td")
        soustablea.id = 'soustableau'+i
        soustablea.className = "soustableau"
        soustablea.style.borderBottom = "solid 1px #2471A3 ";
        soustablea.style.width = "150px";
        soustablea.style.textAlign = "center"
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
        bouton.style.margin = "auto";
        bouton.style.padding = "10px"
        bouton.style.width = "150px"
        bouton.style.borderRadius= "15px";
        bouton.style.backgroundColor = "#B5CEFF";
        bouton.style.borderColor = "#B5CEFF"; 
        bouton.style.cursor = "grab";
        bouton.onclick = function(){sup(this)}
        soustablau.appendChild(bouton)

        let button = document.createElement("input")
        button.id = 'bouton_deplacer'+i
        button.type = 'submit'
        button.value = 'deplacer' 
        button.style.margin = "auto";
        button.style.padding = "10px"
        button.style.width = "150px"
        button.style.borderRadius= "15px";
        button.style.backgroundColor = "#B5CEFF";
        button.style.borderColor = "#B5CEFF"; 
        button.style.cursor = "grab";
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
        let val = document.getElementById("text").value
        console.log(val)
        let tab_ajouter = []
        tab_ajouter = val.split("\n")
        console.log(tab_ajouter)
    for (let i = 0; i < tab_ajouter.length; i++) {  
        verif1 = JSON.stringify(tab_ajouter[i]).replace(/"/g, ' ')
        verif2 = verif1.split(/[+=]/).join(' ')
        if(verif2.includes('--')){
            text.style.border = "solid 1px red";
            let message = document.createElement("p")
            document.body.appendChild(message)
            const newContent = document.createTextNode("caracter interdit");
            message.appendChild(newContent)

        }else{
        let th = tab_ajou.insertRow(taille)
            th.id = "tablau"+taille
            th.style.border = "solid 1px red"
        let checkbox = document.createElement('input')
        checkbox.type = "checkbox";
        checkbox.id = "bouton_checkbox"+taille
        let check = th.insertCell(0);
        check.classList = 'tab_checkbox'
        check.appendChild(checkbox)
        let td1 = th.insertCell(1)
        td1.id = "soustableau_nom"+taille
        td1.style.borderBottom = "solid 1px #2471A3 ";
        td1.style.width = "150px";
        td1.style.textAlign = "center"

        let td2 = th.insertCell(2)
        td2.id = "soustableau"+taille
        td2.style.borderBottom = "solid 1px #2471A3 ";
        td2.style.width = "150px";
        td2.style.textAlign = "center"

        let td3 = th.insertCell(3)
        td3.id = "input_soustableau"+taille  
        
        td1.innerHTML = verif2
        td2.innerHTML = ""
        td3.innerHTML = '<button onclick="sup(this)" style="margin: auto; padding: 10px; width: 150px; border-radius: 15px; background-color: rgb(181, 206, 255); border-color: rgb(181, 206, 255); cursor: grab;">supprimer</button><button onclick="dep(this)"style="margin: auto; padding: 10px; width: 150px; border-radius: 15px; background-color: rgb(181, 206, 255); border-color: rgb(181, 206, 255); cursor: grab;">deplacer</button>'
    }}
    
    
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