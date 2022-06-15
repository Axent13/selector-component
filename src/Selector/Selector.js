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

    $rootElement.appendChild(this.$selectorElement);
  }
}

export default Selector;
