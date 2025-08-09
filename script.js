// metoda e pare bazike;
// const fs = require('fs');
// fs.writeFile('text.txt','Hello World',(err)=>{
//     if (err) throw err;
//     fs.readFile('text.txt','utf8',(err,data)=>{
//         if (err) throw err;
//         console.log(data)
//         fs.appendFile('text.txt','\nHello javaScript',(err)=>{
//             if(err) throw err;
//             fs.unlink('text.txt',(err)=>{
//                 console.log('file is deleted')
//             })
//         })
//     })
// })
// metoda e dyte me funksione arrow;
// const fs = require('fs').promises;
// const path = require('path');

// (async () => {
//     try {
//         const folder = path.join(__dirname,'folder')
//         const filePath = path.join(folder,'text.txt')
//         const data = await fs.readFile(filePath,'utf8')

//         await fs.mkdir(folder,{recursive:true});
//         await fs.writeFile(filePath,'Hello JavaScript')
//         await fs.appendFile(filePath,'\nHello World in the javascript')
//         await fs.unlink(filePath)
//         console.log(data);
//     } catch (error) {
//         console.log(error)
//     }
// })()

