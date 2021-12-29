const fs = require('fs');
const fetch = require('node-fetch');

const sites = fs.readFileSync('./sites', 'utf-8').split(',').slice(2536);
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
async function main() {
    for (const site of sites) {
        fetch(site).then(res => res.text()).then(data => fs.writeFileSync(`./pages/${decodeURI(site.slice(29)).replaceAll(/\//g, '---')}`, data, 'utf-8'))
        await sleep(60);
    }
}
main()