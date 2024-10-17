const images = ["Christ.jpeg","Eiffel.jpeg","Great_Wall_of_China,_stret.jpeg","Machu_Picchu.jpeg","Opera_House.jpeg","Pyramids.jpeg","Statue_of_Liberty.jpeg","Taj_Mahal.jpeg",]

chosenImage = images[Math.floor(Math.random()*images.length)]
const bgImage = document.createElement("img")
bgImage.src = `img/${chosenImage}`

document.body.appendChild(bgImage)