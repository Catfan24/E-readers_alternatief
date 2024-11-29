document.getElementById("knop").addEventListener('click', emoji)

let divElement = document.getElementById('div')

function emoji() {

    let tekst = ""
    for(let i = 0; i < 69; i++) {
        let random = Math.random()

        let randomMaalDrie = random * 3
        let afgerond = Math.floor(randomMaalDrie)
    
        divElement.innerHTML = afgerond
    
        if(afgerond == 0) {
            tekst += "🤢"
        }else if (afgerond == 1) {
            tekst += "_"
        }else if (afgerond == 2) {
            tekst += "_"
        }
    }
    divElement.innerHTML = tekst

}