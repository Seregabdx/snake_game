"use strict";

class SnakeSegments {
  constructor(pos_x, pos_y) {
    this.pos_x = pos_x;
    this.pos_y = pos_y;
  }

  get pos_x() {
    return this._pos_x;
  }
  get pos_y() {
    return this._pos_y;
  }

  set pos_x(pos_x) {
    this._pos_x = pos_x;
  }
  set pos_y(pos_y) {
    this._pos_y = pos_y;
  }
}

class Snake {
  constructor(array_segments, sizeSpace) {
    this.snake_segments = array_segments;
    this.element = Array.from(document.querySelectorAll(".snake_colom"));
    this.lastKey = ["KeyD", false];
    this.flag = true;
    this.apple = new SnakeSegments();
    this.lastSegment = new SnakeSegments();
    this.score = 0;
    this.size = sizeSpace;
  }

  get lastKey() {
    return this._lastKey;
  }
  get size() {
    return this._size;
  }
  get score() {
    return this._score;
  }
  get array_segments() {
    return this._array_segments;
  }
  get element() {
    return this._element;
  }
  get flag() {
    return this._flag;
  }
  get lastSegment() {
    return this._lastSegment;
  }

  set array_segments(array_segments) {
    this._array_segments = array_segments;
  }

  set element(element) {
    this._element = element;
  }
  set size(size) {
    this._size = size;
  }
  set lastKey(lastKey) {
    this._lastKey = lastKey;
  }
  set flag(flag) {
    this._flag = flag;
  }
  set lastSegment(lastSegment) {
    this._lastSegment = lastSegment;
  }
  set score(score) {
    this._score = score;
  }

  startPosition() {
    this.generateApple();
    this.snakeMoves(this.element);
    let Interval = setInterval(() => {
      if (this.flag == false) {
        clearInterval(Interval);
      } else {
        this.moveKeyDown(this.lastKey[0], this.lastKey[1]);
        this.crashSnake();
      }
    }, 300);

    let Interval1 = setInterval(() => {
      if (this.flag == false) {
        clearInterval(Interval1);
      } else {
        let head1 = this.snake_segments[this.snake_segments.length - 1];
        if (
          head1.pos_x == this.apple.pos_x &&
          head1.pos_y == this.apple.pos_y
        ) {
          this.element[
            this.apple.pos_x + this.apple.pos_y * this.size
          ].classList.remove("apple");
        }
      }
    }, 300);
  }

  crashSnake() {
    let head = this.snake_segments[this.snake_segments.length - 1];
    for (let i = 0; i < this.snake_segments.length - 1; i++) {
      if (
        (head.pos_x == this.snake_segments[i].pos_x &&
          head.pos_y == this.snake_segments[i].pos_y) ||
        (head.pos_x == this.lastSegment.pos_x &&
          head.pos_y == this.lastSegment.pos_y)
      ) {
        this.flag = false;
        alert("Lose");
      }
    }
  }

  generateApple() {
    let flag = true;
    do {
      this.apple.pos_x = Math.floor(Math.random() * this.size);
      this.apple.pos_y = Math.floor(Math.random() * this.size);
      for (let i = 0; i < this.snake_segments.length; i++) {
        if (
          this.snake_segments[i].pos_x == this.apple.pos_x &&
          this.snake_segments[i].pos_y == this.apple.pos_y
        ) {
          flag = false;
        }
      }
      flag = true;
    } while (flag == false);

    this.element[this.apple.pos_x + this.apple.pos_y * this.size].classList.add(
      "apple"
    );
  }

  eatApple() {
    let head = this.snake_segments[this.snake_segments.length - 1];

    if (this.lastKey[0] == "KeyD") {
      if (head.pos_x == this.apple.pos_x && head.pos_y == this.apple.pos_y) {
        this.element[
          this.apple.pos_x + this.apple.pos_y * this.size
        ].classList.remove("apple");

        let newHead = new SnakeSegments(
          this.lastSegment.pos_x,
          this.lastSegment.pos_y
        );
        this.snake_segments.unshift(newHead);
        this.generateApple();
        this.viewScore();
      }
    }
    if (this.lastKey[0] == "KeyA") {
      if (head.pos_x == this.apple.pos_x && head.pos_y == this.apple.pos_y) {
        this.element[
          this.apple.pos_x + this.apple.pos_y * this.size
        ].classList.remove("apple");

        let newHead = new SnakeSegments(
          this.lastSegment.pos_x,
          this.lastSegment.pos_y
        );

        this.snake_segments.unshift(newHead);
        this.generateApple();
        this.viewScore();
      }
    }
    if (this.lastKey[0] == "KeyS") {
      if (head.pos_x == this.apple.pos_x && head.pos_y == this.apple.pos_y) {
        this.element[
          this.apple.pos_x + this.apple.pos_y * this.size
        ].classList.remove("apple");

        let newHead = new SnakeSegments(
          this.lastSegment.pos_x,
          this.lastSegment.pos_y
        );
        this.snake_segments.unshift(newHead);
        this.generateApple();
        this.viewScore();
      }
    }
    if (this.lastKey[0] == "KeyW") {
      if (head.pos_x == this.apple.pos_x && head.pos_y == this.apple.pos_y) {
        this.element[
          this.apple.pos_x + this.apple.pos_y * this.size
        ].classList.remove("apple");

        let newHead = new SnakeSegments(
          this.lastSegment.pos_x,
          this.lastSegment.pos_y
        );
        this.snake_segments.unshift(newHead);
        this.generateApple();
        this.viewScore();
      }
    }
  }

  snakeMoves(element) {
    document.addEventListener(
      "keydown",
      (event) => (this.lastKey = [event.code, event.repeat]),
      {
        capture: true,
      }
    );
  }

  viewScore() {
    this.score++;
    document.querySelector(".score").innerHTML = `Score: ${this.score}`;
  }

  moveSegments() {
    this.lastSegment.pos_x = this.snake_segments[0].pos_x;
    this.lastSegment.pos_y = this.snake_segments[0].pos_y;
    let x1 = this.snake_segments[this.snake_segments.length - 1].pos_x;
    let y1 = this.snake_segments[this.snake_segments.length - 1].pos_y;
    let x = 0;
    let y = 0;
    for (let i = this.snake_segments.length - 2; i >= 0; i--) {
      x = this.snake_segments[i].pos_x;
      y = this.snake_segments[i].pos_y;
      this.element[x1 + y1 * this.size].classList.add("active");
      this.snake_segments[i].pos_x = x1;
      this.snake_segments[i].pos_y = y1;
      x1 = x;
      y1 = y;
      this.element[x + y * this.size].classList.remove("active");
    }
  }

  moveKeyDown(eventCode, eventRep) {
    let snakeHead = this.snake_segments[this.snake_segments.length - 1];
    if (eventCode == "KeyD" && eventRep == false && this.flag == true) {
      this.eatApple();

      if (snakeHead.pos_x + 1 == this.size) {
        alert("Lose!");
        this.flag = false;
      } else {
        this.moveSegments();
        let len = this.snake_segments.length - 1;
        this.element[
          this.snake_segments[len].pos_x +
            this.snake_segments[len].pos_y * this.size
        ].classList.remove("snakeHead");
        this.snake_segments[len].pos_x = this.snake_segments[len].pos_x + 1;
        this.element[
          this.snake_segments[len].pos_x +
            this.snake_segments[len].pos_y * this.size
        ].classList.add("snakeHead");
      }
      this.lastKey = [eventCode, eventRep];
    }
    if (eventCode == "KeyA" && eventRep == false && this.flag == true) {
      this.eatApple();

      if (snakeHead.pos_x - 1 == -1) {
        alert("Lose!");
        this.flag = false;
      } else {
        this.moveSegments();
        let len = this.snake_segments.length - 1;
        this.element[
          this.snake_segments[len].pos_x +
            this.snake_segments[len].pos_y * this.size
        ].classList.remove("snakeHead");
        this.snake_segments[len].pos_x = this.snake_segments[len].pos_x - 1;
        this.element[
          this.snake_segments[len].pos_x +
            this.snake_segments[len].pos_y * this.size
        ].classList.add("snakeHead");
      }
      this.lastKey = [eventCode, eventRep];
    }
    if (eventCode == "KeyS" && eventRep == false && this.flag == true) {
      this.eatApple();

      if (snakeHead.pos_y + 1 == this.size) {
        alert("Lose!");
        this.flag = false;
      } else {
        this.moveSegments();
        let len = this.snake_segments.length - 1;
        this.element[
          this.snake_segments[len].pos_x +
            this.snake_segments[len].pos_y * this.size
        ].classList.remove("snakeHead");
        this.snake_segments[len].pos_y = this.snake_segments[len].pos_y + 1;
        this.element[
          this.snake_segments[len].pos_x +
            this.snake_segments[len].pos_y * this.size
        ].classList.add("snakeHead");
      }
      this.lastKey = [eventCode, eventRep];
    }
    if (eventCode == "KeyW" && eventRep == false && this.flag == true) {
      this.eatApple();

      if (snakeHead.pos_y - 1 == -1) {
        alert("Lose!");
        this.flag = false;
      } else {
        this.moveSegments();
        let len = this.snake_segments.length - 1;
        this.element[
          this.snake_segments[len].pos_x +
            this.snake_segments[len].pos_y * this.size
        ].classList.remove("snakeHead");
        this.snake_segments[len].pos_y = this.snake_segments[len].pos_y - 1;
        this.element[
          this.snake_segments[len].pos_x +
            this.snake_segments[len].pos_y * this.size
        ].classList.add("snakeHead");
      }
      this.lastKey = [eventCode, eventRep];
    }
  }
}

function generateGameSpace(sizeSpace) {
  let space = document.querySelector(".space");
  let string = "";
  for (let i = 0; i < sizeSpace; i++) {
    string += '<div class="snake_row"></div>';
  }
  space.insertAdjacentHTML("afterbegin", string);
  let space_colom = space.querySelectorAll(".snake_row");

  string = "";
  for (let j = 0; j < sizeSpace; j++) {
    string += '<div class="snake_colom"></div>';
  }
  space_colom.forEach((elem) => {
    elem.insertAdjacentHTML("afterbegin", string);
  });
}

function start() {
  let sizeSpace = 15;

  generateGameSpace(sizeSpace);
  let Segment = new SnakeSegments(0, 0);
  let Segment1 = new SnakeSegments(1, 0);

  let array = [Segment, Segment1];
  let snake_body = new Snake(array, sizeSpace);

  snake_body.startPosition();
}

start();
document.addEventListener("keydown", function (event) {
  if (event.code == "KeyR" && event.repeat == false) {
    this.location.reload();
    start();
  }
});
