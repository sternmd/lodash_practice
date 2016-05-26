// sample data
var data = [
  'mojombo',
  'defunkt',
  'pjhyett',
  'wycats',
  'ezmobius',
  'ivey',
  'evanphx',
  'vanpelt',
  'wayneeseguin',
  'brynary',
  'kevinclark',
  'technoweenie',
  'macournoyer',
  'takeo',
  'Caged',
  'topfunky',
  'anotherjesse',
  'roland',
  'lukas',
  'fanvsfan',
  'tomtt',
  'railsjitsu',
  'nitay',
  'kevwil',
  'KirinDave',
  'jamesgolick',
  'atmos',
  'errfree',
  'mojodna',
  'bmizerany',
  'jnewland',
  'joshknowles',
  'hornbeck',
  'jwhitmire',
  'elbowdonkey',
  'reinh',
  'timocratic',
  'bs',
  'rsanheim',
  'schacon',
  'uggedal',
  'bruce',
  'sam',
  'mmower',
  'abhay',
  'rabble',
  'benburkert',
  'indirect',
  'fearoffish',
  'ry',
  'engineyard',
  'jsierles',
  'tweibley',
  'peimei',
  'brixen',
  'tmornini',
  'outerim',
  'daksis',
  'sr',
  'lifo',
  'rsl',
  'imownbey',
  'dylanegan',
  'jm',
  'willcodeforfoo',
  'jvantuyl',
  'BrianTheCoder',
  'freeformz',
  'hassox',
  'automatthew',
  'queso',
  'lancecarlson',
  'drnic',
  'lukesutton',
  'danwrong',
  'hcatlin',
  'jfrost',
  'mattetti',
  'ctennis',
  'lawrencepit',
  'marcjeanson',
  'grempe',
  'peterc',
  'ministrycentered',
  'afarnham',
  'up_the_irons',
  'evilchelu',
  'heavysixer',
  'brosner',
  'danielmorrison',
  'danielharan',
  'kvnsmth',
  'collectiveidea',
  'canadaduane',
  'nate',
  'dstrelau',
  'sunny',
  'dkubb',
  'jnicklas',
  'richcollins'
];

function displayData(data) {
  // load template text
  var template = $('#template').html();
  // compile template and bind data text
  var compiled_html = _.template(template)({
    data: data
  });
  // append to body
  $('body').append(compiled_html);
}

$(function() {
  displayData(data);
});


// matches
var f = _.matches('hello');
f('world');
// -> false
f('hello');
// -> true

// find
var users = [
  {
    name: 'Alex',
    age: 30,
    is_premium: false
  },
  {
    name: 'Bob',
    age: 20,
    is_premium: true
  },
  {
    name: 'Mary',
    age: 25,
    is_premium: false
  }
];

_.find(users, function(user) {
  console.log (user);
  return user.age > 18;
});

_.find(users, 'is_premium');

_.map(users, {name: 'Alex'}); // Use _.matches
// -> [true, false, false]

_.map(users, ['name', 'Alex']); // Use _.matchesProperty
// -> [true, false, false]

_.map(users, 'name'); // Use _.property
// -> ["Alex", "Bob", "Mary"]

// loops
// traditional js
var grandTotal = 0,
  somePercentage = 1.07,
  severalNumbers = [33, 54, 42],
  i; // don't forget to hoist those indices;

for(i = 0; i < severalNumbers.length; i++) {
  var aNumber = severalNumbers[i];
  grandTotal += aNumber * somePercentage;
}

// loops
//underscore
var somePercentage = 1.07,
  severalNumbers = [33, 54, 42],
  grandTotal;

grandTotal = _.reduce(severalNumbers, function(runningTotal, aNumber) {
  return runningTotal + (aNumber * somePercentage);
}, 0)
