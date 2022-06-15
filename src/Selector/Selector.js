import './Selector.scss';

class Selector {
  constructor(options) {
    if (options === undefined) {
      options = ['1', '2', '3'];
    }

    this.options = options;
    console.log('Selector succesfully created!');
    console.log(this.options);
  }

  init($rootElement) {
    this.$selectorElement = document.createElement('div');
    this.$selectorElement.classList.add('selector');

    this.$selectedValueElement = document.createElement('div');
    this.$selectedValueElement.classList.add('selector__selected-value');
    this.selectedValue = this.options[0];
    this.$selectedValueElement.innerText = this.selectedValue;

    this.$arrowElement = document.createElement('div');
    this.$arrowElement.classList.add('selector__arrow');
    this.$selectedValueElement.appendChild(this.$arrowElement);

    this.$optionsContainerElement = document.createElement('div');
    this.$optionsContainerElement.classList.add('selector__options-container');

    this.options.forEach(element => {
      this.$optionElement = document.createElement('div');
      this.$optionElement.classList.add('selector__option');
      this.$optionElement.innerText = element;
      this.$optionsContainerElement.appendChild(this.$optionElement);
    });
    
    this.$selectorElement.appendChild(this.$selectedValueElement);

    this.$selectorElement.appendChild(this.$optionsContainerElement);
    $rootElement.appendChild(this.$selectorElement);
  }
}

export default Selector;
