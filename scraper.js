const fs = require('fs');
const fetch = require('node-fetch');
let count = parseInt(fs.readFileSync('./count','utf-8'));

const sites = fs.readFileSync('./sites', 'utf-8').split(',').slice(count);
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function main() {
    for (const site of sites) {
        fetch(site).then(res => res.text()).then(data => fs.writeFileSync(`./pages/${decodeURI(site.slice(29)).replaceAll(/\//g, '---')}`, data, 'utf-8'))
        await sleep(60);
        count++;
        if (count % 10 == 0) {
            fs.writeFileSync('./count',count+"",'utf-8');
            await sleep(1500);
        }
    }
}
main();