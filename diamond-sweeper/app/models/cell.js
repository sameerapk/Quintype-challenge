const UNKNOWN = 'unknown';
const EMPTY = '';
const DIAMOND = 'diamond';
const ARROW_LEFT = 'arrow-left';
const ARROW_RIGHT = 'arrow-right';
const ARROW_UP = 'arrow-up';
const ARROW_DOWN = 'arrow-down';

class Cell {
  constructor(id) {
    this.id = id;
    this.image = UNKNOWN;
    this.value = '';
  }

  addDiamond() {
    if (this.value === '') {
      this.value = DIAMOND;
      return true;
    }
    return false;
  }

  addHint(direction) {
    switch (direction) {
      case 'left':
        this.image = ARROW_LEFT;
        break;
      case 'right':
        this.image = ARROW_RIGHT;
        break;
      case 'up':
        this.image = ARROW_UP;
        break;
      case 'down':
        this.image = ARROW_DOWN;
        break;
      default:
    }
  }

  clearHint() {
    this.image = EMPTY;
  }

  reveal() {
    if (this.value === DIAMOND) {
      this.image = DIAMOND;
      return true;
    }

    this.image = EMPTY;
    return false;
  }
}

module.exports = Cell;
