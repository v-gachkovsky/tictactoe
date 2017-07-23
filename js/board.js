var board = {
  render: function () {
    var self = this;
    self.boardElement.innerHTML = '';

    this.squares.forEach(function (square, index) {
      var squareElement = document.createElement('div');
      squareElement.innerHTML = square;
      squareElement.setAttribute('class', 'square');

      squareElement.addEventListener('click', function () {
        if (self.squares[index] !== null) return;
        
        self.squares[index] = self.isXNext ? 'X' : 'O';
        self.isXNext = !self.isXNext;

        gameHistory.addState(self.squares);
        self.render();
      });

      self.boardElement.appendChild(squareElement);
    });
  },

  init: function () {
    this.isXNext = true;
    this.boardElement = document.getElementById('board');
    this.squares = [
      null, null, null,
      null, null, null,
      null, null, null
    ];

    gameHistory.addState(this.squares);
    this.render();

    console.log('Board initialized');
  }

};