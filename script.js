let nomes = ["pai", "mãe", "filho", "filha"]
let imagens = ["https://img.freepik.com/vetores-premium/homem-de-desenho-animado-isolado_376167-176.jpg", "https://i.pinimg.com/736x/f2/de/f3/f2def3d2d5f9a2fd3ac0d45f4d612b64.jpg","https://static.vecteezy.com/ti/vetor-gratis/p1/5203676-cartoon-engracado-garotinho-de-pe-gr%C3%A1tis-vetor.jpg", "https://img.freepik.com/vetores-premium/desenho-de-menina-bonito-escola-com-mochila_160606-169.jpg"]

let i = 0;

function Update() {
  if (i>3){
    i=0
  }else{
    document.getElementById("foto").src = imagens[i]
 document.getElementById("nome").innerHTML = nomes[i]
  i++;
  }
}