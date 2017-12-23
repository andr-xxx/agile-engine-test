export default class CsvParser {
  constructor(delimiter) {
    this.delimiter = delimiter;
  }

  parseCsv(csvString) {
    const lines = csvString.split(this.delimiter);

    return lines.map(item => {
      const list = item.match(/"[^"]+"|[^,]+/g);
      if (list) {
        return list.map(str => {
          return str.replace(/['"]+/g, '');
        });
      } else {
        return []
      }
    });
  }
}