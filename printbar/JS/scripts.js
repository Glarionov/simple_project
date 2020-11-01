/**
 * Высота холста
 * @type {number}
 */
let canvasHeight = $('#main-canvas').height();

/**
 * Ширина холста
 * @type {number}
 */
let canvasWidth = $('#main-canvas').width();

/**
 * Рисует прямоугольник в центре холста
 *
 * @param width     Ширина прямоугольника
 * @param height    Высота прямоугольника
 * @param angle     Угол наклона прямоугольника
 */
function drawRectangleInCenter(width, height, angle = 0) {
    let canvas = document.getElementById('main-canvas');
    let ctx = canvas.getContext('2d');
    if (ctx) {
        // Очистка холста
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        // Смещение контекста на нужную позицию и угол для рисования
        ctx.translate(canvasWidth / 2, canvasHeight / 2);
        ctx.rotate(angle * Math.PI / 180);

        ctx.fillRect(width / -2, height / -2, width, height);
    }
}

$( ".main-rotator" ).on( "click", function() {
    drawRectangleInCenter(300,200,45);
});

$( document ).ready(function() {
    drawRectangleInCenter(200, 100);
});
