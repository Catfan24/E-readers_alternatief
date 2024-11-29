document.getElementById('knop').addEventListener("click", vulMetEmojis)


function vulMetEmojis () {

    let aantalEmojis = Math.round( Math.random()*100) + 20
    alert('Ik ga nu ' + aantalEmojis + ' emojis genereren')

    let totaleText = ""
    for(let i = 0; i < aantalEmojis; i++) {
        let emoji = Math.floor( Math.random()*3)
        
        if(emoji == 0) {
            totaleText += "💩"
        }else if (emoji == 1) {
            totaleText += "🥶"
        }else {
            totaleText += "🤢"
        }   
    }

    document.getElementById('emojis').innerHTML = totaleText


}