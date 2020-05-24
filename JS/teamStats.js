const team = {
  _players: [
    {
      firstName: 'Kepa',
      lastName: 'Arrizabalaga',
      age: 25
    },
    {
      firstName: 'Antonio',
      lastName: 'Rudiger',
      age: 27
    },
    {
      firstName: 'Olivier',
      lastName: 'Giroud',
      age: 33
    }
  ],
  _games: [
    {
      opponent: 'Everton',
      teamPoints: 4,
      opponentPoints: 0
    },
    {
      opponent: 'Liverpool',
      teamPoints: 2,
      opponentPoints: 0
    },
    {
      opponent: 'Bayern Munchen',
      teamPoints: 0,
      opponentPoints: 3
    }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let newPlayer = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this._players.push(newPlayer);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    let newGame = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this._games.push(newGame);
  }
};

team.addPlayer('Christian', 'Pulisic', 21);
team.addPlayer('Cesar', 'Azpilicueta', 30);
team.addPlayer('N\'Golo', 'Kante', 29);

team.addGame('Arsenal', 5, 0);

console.log(team._players);
console.log(team._games);