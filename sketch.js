

var sombra = document.getElementById("bazan");
var aguardar = document.getElementById('imagen');

function escribir() {
  var input = document.getElementById("cajaTesto").value;
if(input != ""){
  sombra.innerHTML = input;
  sombra.className = input;
}
}

function guardar() {
  domtoimage.toPng(aguardar).then(function (dataUrl) {
    var img = new Image();
    img.src = dataUrl;
    document.body.appendChild(img);
  }).catch(function (error) {
    console.error('oops, something went wrong!', error);
  });

}

function fondo(colNum) {
  document.body.style.backgroundColor = colorines[colNum];
}

var colorines = ['#eb0d8c','#eb0d8c', 'white','black'];