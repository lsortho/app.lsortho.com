import('fs').then((fileSystem)=>{import('https').then((https)=>{
  for(var index=0;index<Object.keys(JSON.parse(fileSystem.readFileSync('../base.json','utf8'))['code-to-load'][0]).length;index++){
    const file=fileSystem.createWriteStream('../code/'+Object.keys(JSON.parse(fileSystem.readFileSync('../base.json','utf8'))['code-to-load'][0])[index])
    https.get(Object.values(JSON.parse(fileSystem.readFileSync('../base.json','utf8'))['code-to-load'][0])[index],(response)=>{response.pipe(file)})
  }
})})