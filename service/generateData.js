const fs = require("fs");
const path = require("path");
const axios = require("axios");
const Jabber = require("jabber");
const { nanoid } = require("nanoid");

const jabber = new Jabber();

const categories = [
  "transport",
  "household",
  "healthcare",
  "decoration",
  "sports",
  "clothing",
];

class Product {
  constructor({ year, title }) {
    this.id = nanoid();
    this.year = year;
    this.title = title;
    this.details = jabber.createParagraph(18);
    this.attrRare = Math.random() > 0.9;
    this.attrFancy = Math.random() > 0.6;
    this.price = (Math.random() * 10000).toFixed(2);
    this.category = categories[Math.round(Math.random() * (categories.length - 1))];
  }
}

async function generateData() {
  try {
    const res = await axios.get("https://www.acme.com/catalog/acme.txt", {
      responseType: "text",
    });

    let data = await res.data;

    data = data.split("\r\n");
    data = data.map((item) => {
      let title = item.match(/[\w\s-\.\0-9]+\-\"/);
      let year = item.match(/\/[0-9]{4}/);

      if (title !== null) {
        title = title[0].slice(0, -2);
        if (!title.match(/[\w]+/)) title = null;
      }

      if (year !== null) {
        year = year[0].slice(1);
      }

      if (year && title) {
        return new Product({ year, title });
      }
    });

    return data.filter(Boolean);
  } catch (err) {
    throw err;
  }
}

function writeData() {
  const outputPath = path.join(__dirname, "../public");
  const outputName = "db.json";

  console.log("DATA generation...");

  generateData()
    .catch((err) => {
      console.log("ERROR getting data", err);
    })
    .then((data) => {
      fs.writeFileSync(path.join(outputPath, outputName), JSON.stringify(data));

      console.log("DATA generation success");
    });
}

writeData();
