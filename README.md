# image-to-average-color
Get the average RGB value of the image

## DEMO
https://tkpea.github.io/image-to-average-color/example/dist/

## install
```
npm i image-to-average-color
```
## function
```
ImageToAverageColor(src: string): Promise<number>
```

## usage
```
import {ImageToAverageColor} from 'image-to-average-color'

ImageToAverageColor(file.target.result).then((res)=>{
  console.log(res) // [R,G,B]
});

```

## Example
```
$ git clone https://github.com/tkpea/image-to-average-color.git
$ cd ./image-to-average-color/example
$ npm install
$ npm run start
```
