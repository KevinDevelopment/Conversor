class Processor {

  static Process(data) {
    const list = data.split('\r\n');
    const rows = [];

    list.forEach((row) => {
      const arr = row.split(",");
      rows.push(arr);
    })
    return rows;
  }


}

module.exports = Processor;