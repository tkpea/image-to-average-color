import {GetAverageColorFromImage} from './js/GetAverageColorFromImage'
import {rgbToHsl,hslToRgb, rgbToColorCode} from './js/ColorUtils'

const fileInput = document.querySelector('.file-input')
fileInput.addEventListener('change', (event) =>{
  const file = event.target.files[0]
  const reader = new FileReader()

  // 画像ファイル以外の場合は処理を中断
  if( file.type.indexOf('image') < 0){
    return false;
  }
  reader.onload = ((file) => {
    GetAverageColorFromImage(file.target.result).then((res)=>{
      let bgColor = `rgba(${res[0]}, ${res[1]}, ${res[2]},1.0)`
      // テキストカラーを計算
      let hsl = rgbToHsl(res)
      let txtRgb
      if(hsl[2] >= 0.50){
        txtRgb = hslToRgb([hsl[0],hsl[1],0.2])
      }else{
        txtRgb = hslToRgb([hsl[0],hsl[1],0.8])
      }
      let txtColor =  `rgba(${txtRgb[0]}, ${txtRgb[1]}, ${txtRgb[2]},1.0)`;

      let newFigure = document.createElement('figure')
      let newImage = document.createElement('img')
      newImage.src = file.target.result
      newFigure.append(newImage)

      let newArticle = document.createElement('article')
      newArticle.innerHTML = '<h1>Lorem ipsum dolor sit amet</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>';
      let newInfomation = document.createElement('div')
      newInfomation.classList.add('info')
      newInfomation.innerHTML = `bg.${rgbToColorCode(res).toUpperCase()}  /  tx.${rgbToColorCode(txtRgb).toUpperCase()}`
      newInfomation.style.backgroundColor = txtColor
      newInfomation.style.color = bgColor
      newArticle.append(newInfomation)

      let newSection = document.createElement('section')
      newSection.classList.add('item')
      newSection.appendChild(newFigure)  
      newSection.appendChild(newArticle)  
      newSection.style.backgroundColor = bgColor
      newSection.style.color = txtColor

      let resultsView = document.querySelector('.results')
      resultsView.prepend(newSection)
    
    })
  })
  reader.readAsDataURL(file)
})

window.onload = function() {
  let items = document.querySelectorAll('.item')
  items.forEach(v => {
    let item = v.querySelector(".thumbnail img")
    GetAverageColorFromImage(item.src).then(res => {
      let hsl = rgbToHsl(res)
      if(hsl[2] >= 0.50){
        let rgb = hslToRgb([hsl[0],hsl[1],0.2])
        v.style.color = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]},1.0)`;
      }else{
        let rgb = hslToRgb([hsl[0],hsl[1],0.8])
        v.style.color = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]},1.0)`;
      }
      v.style.backgroundColor = `rgba(${res[0]}, ${res[1]}, ${res[2]},1.0)`;
    }).catch((e) =>{
      console.error(e)
    })  
  })
};

