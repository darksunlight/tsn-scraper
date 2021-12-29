const Sitemapper = require('sitemapper');
const fs = require('fs')

const sitemap = new Sitemapper();

sitemap.fetch('https://www.thestandnews.com/sitemap.xml').then(function(sites) {
  fs.writeFileSync('./sites', sites.sites.join(','), 'utf-8');
});