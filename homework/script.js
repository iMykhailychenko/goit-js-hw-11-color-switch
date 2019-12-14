const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const setBackground = () => {
  document.body.style.background = colors[randomIntegerFromInterval(0, 5)];
};

const randomColor = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  active: false,
  start() {
    this.startBtn.addEventListener('click', () => {
      if (this.active) return;
      this.active = true;
      this.asyncBackground = setInterval(setBackground, 1000);
    });
  },
  stop() {
    this.stopBtn.addEventListener('click', () => {
      this.active = false;
      clearInterval(this.asyncBackground);
    });
  },
};

randomColor.start();
randomColor.stop();
