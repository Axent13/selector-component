import './Selector.scss';

class Selector {
  constructor(options) {
    if (options === undefined) {
      options = ['1', '2', '3'];
    }

    this.options = options;
  }

  init($rootElement) {
    this.$selectorElement = document.createElement('div');
    this.$selectorElement.classList.add('selector');

    this.$selectedValueElement = document.createElement('div');
    this.$selectedValueElement.classList.add('selector__selected-value');
    this.$selectedValueTextElement = document.createElement('div');
    this.$selectedValueTextElement.classList.add('selector__selected-value-text');
    this.$selectedValueTextElement.innerText = this.options[0];
    this.$selectedValueElement.appendChild(this.$selectedValueTextElement);

    this.$arrowElement = document.createElement('div');
    this.$arrowElement.classList.add('selector__arrow');
    this.$selectedValueElement.appendChild(this.$arrowElement);

    this.$optionsContainerElement = document.createElement('div');
    this.$optionsContainerElement.classList.add('selector__options-container', 'selector__options-container_hidden');

    this.options.forEach(element => {
      this.$optionElement = document.createElement('div');
      this.$optionElement.classList.add('selector__option');
      this.$optionElement.innerText = element;
      this.$optionElement.addEventListener('click', this.handleOptionClick.bind(this));
      this.$optionsContainerElement.appendChild(this.$optionElement);
    });
    
    this.$selectorElement.appendChild(this.$selectedValueElement);

    this.$selectorElement.appendChild(this.$optionsContainerElement);
    $rootElement.appendChild(this.$selectorElement);

    this.initClickEventListener();
  }

  initClickEventListener() {
    this.$selectedValueElement.addEventListener('click', this.handleSelectorClick.bind(this));
    document.addEventListener('click', this.handleOutsideClick.bind(this));
  }

  handleSelectorClick() {
    this.$optionsContainerElement.classList.toggle('selector__options-container_hidden');
    this.$arrowElement.classList.toggle('selector__arrow_down');
  }

  handleOutsideClick(e) {
    if (e.target !== this.$selectedValueElement && e.target !== this.$selectedValueTextElement && e.target !== this.$arrowElement) {
      this.$optionsContainerElement.classList.add('selector__options-container_hidden');
      this.$arrowElement.classList.remove('selector__arrow_down');
    }
  }

  handleOptionClick(e) {
    this.$selectedValueTextElement.innerText = e.target.innerText;
  }
}

export default Selector;
