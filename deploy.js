var ghpages = require('gh-pages');

let AnalgyphExerciseSettings = {
    dest: 'Analgyph',
    branch: 'gh-pages'
};

ghpages.publish('dist',AnalgyphExerciseSettings, () => {
     console.log("Analgyph deployed")}
);
// ghpages.publish('dist',
//     {
//     branch: 'gh-pages'
//     },
//     () => {
//     console.log("Analgyph deployed")
// });