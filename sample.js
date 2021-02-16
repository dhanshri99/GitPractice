console.log('This is the sample project');

const svg2 = document.getElementById('svg2');
drawchart(svg2);

function drawchart(svg2){
    for (let i = 1; i <= 12; i += 1) {
        // axis labels
        drawText(svg2, {x: 35 + 30 * i, y: 400, text: i});
        drawText(svg2, {x: 20, y: 25 + 30 * (i - 1), text: 12 - i + 1});
    }

    drawText(svg2, {x: 35, y: 400, text: 0});

    // x-axis
    drawLine(svg2, {x1: 40, y1: 380, x2: 400, y2: 380});
    // y-axis
    drawLine(svg2, {x1: 40, y1: 20, x2: 40, y2: 380});
    drawCircle(svg2, {cx: 140, cy: 400 - 300, r: 20, fill: 'Black'});
    drawCircle(svg2, {cx: 260, cy: 400 - 300, r: 20, fill: 'Black'});

}