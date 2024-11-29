document.getElementById('next').addEventListener('click', nextMeme)
document.getElementById('previous').addEventListener('click', previousMeme)
document.getElementById('random').addEventListener('click', randomMeme)


const memes = [
    "https://uploads-ssl.webflow.com/5f3c19f18169b62a0d0bf387/60d33be8cf4ba7565123c8bc_YPD3ulQQAGQpOcnqIm3QzSTRgzmr1SexpW9ZjMpJ1mAnUxx4iF05XOTu44sk0qQG-8XgBcYmGZGAD-5SAZvJl3TjtmhgWnn-w0C2XKwhBscV78RVvhwZfyp0v_Pa6sNj5zxpOvRW.png",
    "https://cdn.memes.com/up/53489761568832407/i/1569046757078.jpg",
    "https://static.demilked.com/wp-content/uploads/2023/06/funny-programming-memes-2.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_FmB_tE52lwpq-UCyUGzvUk2L5fnwObdjVg&s"
]
const imgElement = document.getElementById('meme')
let index = 0;
updateMeme()


function updateMeme() {
    imgElement.src = memes[index]
}

function previousMeme() {
    index = index - 1
    if(index < 0) index = memes.length - 1
    updateMeme()
}

function nextMeme() {
    index = index + 1
    if(index >= memes.length) index = 0
    updateMeme()
}

function randomMeme() {
    index = Math.floor(Math.random()*memes.length)
    updateMeme()
}

