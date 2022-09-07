//url_gethtml.txt に記載されたIDとURLから特定のHTML要素を取得（書式：ID,URL）
import cheerio from 'cheerio';
import axios from 'axios'; 
import fs from 'fs';
import readline from 'readline';

const asyncLineReader = async (iterater) => {
    const rl = readline.createInterface({
      input: fs.createReadStream('./list/url_gethtml.txt', { encoding: 'utf8' }),
      crlfDelay: Infinity
    });
  
    for await (const line of rl) {
      await iterater(line);
    }
}
(async () => { 

    await asyncLineReader(async (lineString) => {   
        //分割してURLとIDに分ける
        const lineText = lineString.split(',');
        const response = await axios.get(lineText[1])
          .then(function(response) {
            return response;
          })
          .catch(function(error) {
            return error.response;
          });
        const $ = await cheerio.load(response.data);
        const id = lineText[0];
        let targetdiv;
        console.log(response.status);
        if (response.status === 200){
          //取得したい要素の指定と末尾に追加記述（あれば）
          targetelm = $('.target_class').html();
        }
        if (targetdiv) {
          let filename = id + ".txt";
          //IDごとに別ファイルで出力
          fs.writeFileSync(filename,targetelm);
        }

    })

})();