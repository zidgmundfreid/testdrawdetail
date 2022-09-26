import './styles.css';

let detail = {
  length: 350,
  width: 250,
  lt: { radius: 0 },
  lb: { radius: 0 },
  rt: { radius: 50 },
  rb: { radius: 0 },
};

{
  const app = document.getElementById('app');
  const heightInput = document.getElementById('heightInput');
  const widthInput = document.getElementById('widthInput');
  const leftAngleInput = document.getElementById('rightAngleInput');
  const rotateZ = document.getElementById('rotateZ');

  //your code here....
  const canv = document.getElementById('canvas');

  drawDetail();
  let r = 0;
  rotateZ.addEventListener('click', () => {
    r += 90;
    canv.style.transform = `rotate(${r}deg)`;
    return r;
  });

  heightInput.oninput = function () {
    if (heightInput.value > 500) {
      detail.length = 500;
    } else {
      detail.length = heightInput.value;
    }

    drawDetail();
  };

  widthInput.oninput = function () {
    if (widthInput.value > 500) {
      detail.width = 500;
    } else {
      detail.width = widthInput.value;
    }

    drawDetail();
  };

  leftAngleInput.oninput = function () {
    if (leftAngleInput.value > 500) {
      detail.rt.radius = 500;
    } else {
      detail.rt.radius = leftAngleInput.value;
    }

    drawDetail();
  };

  function drawDetail() {
    canv.width = 600;
    canv.setAttribute('height', 600);
    const ctx = canv.getContext('2d');

    ctx.translate(100, 100);
    ctx.beginPath();

    ctx.lineWidth = 4;
    ctx.moveTo(0, 0);
    ctx.arcTo(0, detail.width, 0, 0, 0);
    ctx.arcTo(detail.length, detail.width, 0, 0, 0);
    ctx.arcTo(detail.length, 0, 0, 0, detail.rt.radius);
    ctx.arcTo(0, 0, 0, 0, 0);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 1;

    ctx.moveTo(detail.length - detail.rt.radius, 0);
    ctx.arcTo(detail.length - detail.rt.radius, detail.rt.radius, 0, 0, 0);
    ctx.arcTo(detail.length, detail.rt.radius, 0, 0, 0);
    ctx.moveTo(detail.length - detail.rt.radius, detail.rt.radius);
    ctx.arcTo(detail.length, 0, 0, 0, 0);
    ctx.moveTo(50, 0);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 50;
    ctx.moveTo(detail.length, 0);
    ctx.arcTo(detail.length, 1, 0, 0, 0);
    ctx.stroke();

    ctx.font = '20px Arial';
    ctx.fillText('R' + detail.rt.radius, detail.length, -6);

    ctx.font = '20px Arial';
    ctx.fillText(detail.length, detail.length - detail.length / 2 - 25, -6);

    ctx.font = '20px Arial';
    ctx.fillText(detail.width, -40, detail.width - detail.width / 2);
  }
}
