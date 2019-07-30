# image-to-average-color

## function
ImageToAverageColor(src: string): Promise<number>

## use
```
import {ImageToAverageColor} from 'image-to-average-color'

ImageToAverageColor(file.target.result).then((res)=>{
  console.log(res) // [R,G,B]
});

```
