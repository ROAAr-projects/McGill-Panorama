var canvas = new fabric.Canvas('map');
var img = "../images/map.jpg"; 


canvas.setHeight(700);
canvas.setWidth(1380);
canvas.isDrawingMode = true;
canvas.freeDrawingBrush.width = 12;

canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
    scaleX: 0.5,
    scaleY: 0.4
});
canvas.renderAll();

function clearCanvas(){
    canvas.clear();
    canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        scaleX: 0.5,
        scaleY: 0.4
    });
    canvas.renderAll();
}