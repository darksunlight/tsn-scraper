const Sitemapper = require('sitemapper');
const fs = require('fs')

const sitemap = new Sitemapper();

const url = process.argv[2] ? `https://www.thestandnews.com/sitemap/article/${process.argv[2]}.xml` : 'https://www.thestandnews.com/sitemap.xml';

sitemap.fetch(url).then(function(sites) {
  fs.writeFileSync('./.sites', sites.sites.join(','), 'utf-8');
});
fs.writeFileSync('./count', '0', 'utf-8');