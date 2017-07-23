var gameHistory = {
  addState: function (state) {
    var newState = this.cloneState(state);
    this.state.push(newState);

    console.log('history:', this.state);
  },

  init: function () {
    this.state =  [];
    console.log('History initialized');
  },

  cloneState: function (state) {
    return JSON.parse(JSON.stringify(state));
  }
};