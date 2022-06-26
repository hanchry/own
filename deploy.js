var ghpages = require('gh-pages');

ghpages.publish('', function(err) {});
// ghpages.publish('dist',
//     {
//     branch: 'gh-pages'
//     },
//     () => {
//     console.log("Analgyph deployed")
// });