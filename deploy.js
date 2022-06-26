let ghpages = require('gh-pages');

let PortfolioSettings = {
    dest: 'Home',
    branch: 'master'
};

ghpages.publish('Portfolio', PortfolioSettings, () => {
    console.log("Portfolio deployed")
})