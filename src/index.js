import './index.scss';
import Selector from './Selector/Selector';

const options = [
  [
    'Алтайский край',
    'Амурская область',
    'Архангельская область',
    'Астраханская область'
  ],
  [
    'Java',
    'JavaScript',
    'С#',
    'C++',
    'Python',
    'Kotlin',
    'Swift',
    'PHP'
  ]
];

const $selectorsContainer = document.querySelector('.selectors-container');
const $selectorsElements = $selectorsContainer.querySelectorAll('.selector-element');


$selectorsElements.forEach( ($element, index) => {
  const newSelector = new Selector(options[index]);
  newSelector.init($element);
});