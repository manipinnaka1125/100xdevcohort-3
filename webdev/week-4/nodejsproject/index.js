/*const fs=require("fs");
function counter(fileName){
    fs.readFile(fileName,"utf-8",function(err,data){
        let total=0;
        for(let i=0;i<data.length;i++){
            if(data[i]==" "){
                total++;
            }
           
        }
        console.log(total+1)
    })

}
counter(process.argv[2]);*/
//now creating own command line interface(cli)

const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('1000.2.0');

program.command('count_words')
  .description('Count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let words=0;
        for(let i=0;i<data.length;i++){
            if(data[i]==" "){
                words++;
            }

        }
        console.log(`there are ${words} words in the file${file}`)
      }
    });
  });
  program.command('count_sentences')
  .description('Count the number of lines in a file')
  .argument(process.argv[2], 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let sentences=0;
        for(let i=0;i<data.length;i++){
            if(data[i]=="\n"){
                sentences++;
            }

        }
        console.log(`there are ${sentences+1} in the file${file}`)
      }
    });
  });

program.parse();