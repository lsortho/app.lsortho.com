//https://cdn.jsdelivr.net/npm/alasql/dist/alasql.js
/*
var url='https://httpbin.org/ip'

if(typeof self==='undefined'){//we are in a backend javascript runtime environment (node.js? recommended)
  import('https').then((https)=>{
    https.get(url,(urlSource)=>{
      urlSource.setEncoding('utf8')
      urlSource.on('data',(urlSourceData)=>{console.log(urlSourceData)})
      urlSource.on('error',(error)=>{console.log(error)})
    })
  })
}
else{//we are in a frontend browser environment (chromium? recommended)
  fetch(url).then(urlSource=>{return urlSource.text()}).then(urlSourceData=>{document.write(urlSourceData)}).catch(error=>{log('request failed',error)})
}
*/
/*
if(typeof self==='undefined'){//we are in a backend javascript runtime environment (node.js? recommended)
  import('fs').then((fileSystem)=>{import('https').then((https)=>{
    for(var index=0;index<Object.keys(JSON.parse(fileSystem.readFileSync('./base.json','utf8'))['code-to-load'][0]).length;index++){
      const file=fileSystem.createWriteStream('./code/cache/'+Object.keys(JSON.parse(fileSystem.readFileSync('./base.json','utf8'))['code-to-load'][0])[index])
      https.get(Object.values(JSON.parse(fileSystem.readFileSync('./base.json','utf8'))['code-to-load'][0])[index],(response)=>{response.pipe(file)})
    }
  })})
}
//TODO
else{//we are in a frontend browser environment (chromium? recommended)
  fetch('./base.json').then(source=>source.json()).then(json=>console.log(json))
  fetch(url).then(urlSource=>{return urlSource.text()}).then(urlSourceData=>{document.write(urlSourceData)}).catch(error=>{log('error',error)})
}
*/
export {default as workerpool} from './workerpool.js'//https://cdn.jsdelivr.net/npm/workerpool/dist/workerpool.js - Apache 2.0 license
//export {default as worker} from './cache/worker.js'//https://cdn.jsdelivr.net/npm/workerpool/dist/worker.js - Apache 2.0 license
export {default as sidh} from './sidh.js'//https://cdn.jsdelivr.net/npm/sidh/dist/sidh.js OR https://cdn.jsdelivr.net/gh/cyph/sidh.js/dist/sidh.js - BSD 2 Clause license - The parameters are configured to 128-bit strength (SIKEp503)
export {default as alasql} from './alasql.js'//https://cdn.jsdelivr.net/npm/alasql/dist/alasql.js - MIT license

export {default as processor} from './processor.mjs'