module.exports = {
  controller($scope, board) {
    $scope.board = board
    $scope.state = board.state()
  },
  template: `
    <div class="navbar navbar-light fg-faded">
      <a href="#" class="navbar-brand">Minesweeper</a>
      <div class="label label-default">{{state}}</div>
    </div>
  `
}
