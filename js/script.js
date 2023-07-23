const bright = document.getElementById('bright')
const contrast = document.getElementById('contrast')
const opacity = document.getElementById('opacity')
const grayscale = document.getElementById('grayscale')
const saturate = document.getElementById('saturate')
const invert = document.getElementById('invert')
const blur = document.getElementById('blur')

const brightPercent = document.getElementById('bright-percent')
const contrastPercent = document.getElementById('contrast-percent')
const opacityPercent = document.getElementById('opacity-percent')
const grayscalePercent = document.getElementById('grayscale-percent')
const saturatePercent = document.getElementById('saturate-percent')
const invertPercent = document.getElementById('invert-percent')
const blurPercent = document.getElementById('blur-percent')

const img = document.createElement('img')

document.getElementById('fileInput').addEventListener('change', function(event){
	const file = event.target.files[0]
	if(file){
		const reader = new FileReader()
		reader.onload = function(){
			const imgContainer = document.getElementById('imgContainer')
			img.src = reader.result
			imgContainer.innerHTML = ''
			imgContainer.appendChild(img)
		}
		reader.readAsDataURL(file)
	}
})

function change(e){
	switch(e){
	  case 'bright':
	    img.style.filter = `brightness(${bright.value}%)`
	    brightPercent.innerHTML = `${bright.value}%` 
	    break
      case 'contrast':
      	img.style.filter = `contrast(${contrast.value}%)`
      	contrastPercent.innerHTML = `${contrast.value}%` 
      	break
      case 'opacity':
      	img.style.filter = `opacity(${opacity.value}%)`
      	opacityPercent.innerHTML = `${opacity.value}%` 
      	break
      case 'grayscale':
      	img.style.filter = `grayscale(${grayscale.value}%)`
      	grayscalePercent.innerHTML = `${grayscale.value}%` 
      	break
      case 'saturate':
      	img.style.filter = `saturate(${saturate.value}%)`
      	saturatePercent.innerHTML = `${saturate.value}%` 
      	break
      case 'invert':
      	img.style.filter = `invert(${invert.value}%)`
      	invertPercent.innerHTML = `${invert.value}%`
      	break
      case 'blur':
      	img.style.filter = `blur(${blur.value}px)`
      	blurPercent.innerHTML = `${blur.value}px`	 
    }
}

