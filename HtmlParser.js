const ejs = require("ejs");

 class HtmlParser{
   static async Parse(Table){
    return await ejs.renderFile("./Table.ejs",{header: Table.header, rows: Table.rows});
  }
}

module.exports = HtmlParser;