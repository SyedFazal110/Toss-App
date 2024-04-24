

function toss(ClickedBtn){
    // console.log("toss" , ClickedBtn)

    let para = document.querySelector("#para");
    let image = document.querySelector(".img")
    let i = Math.floor(Math.random()*2+1)

    if( ClickedBtn === "Chand"){
        if(i === 1){
            para.innerHTML = `you won the toss`
            image.src = 'https://en.numista.com/catalogue/photos/pakistan/433-original.jpg'
        }else{
            para.innerHTML = `you loss the toss`
            image.src = 'https://en.numista.com/catalogue/photos/pakistan/434-original.jpg'
        }
    }
    else if( ClickedBtn === "panch"){
        if(i === 2){
            para.innerHTML = `you won the toss`
            image.src = 'https://en.numista.com/catalogue/photos/pakistan/434-original.jpg'
        }else{
            para.innerHTML = `you loss the toss`
            image.src = 'https://en.numista.com/catalogue/photos/pakistan/433-original.jpg'
        }
    }

}
