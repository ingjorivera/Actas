
let objTexto=o
let objeto=o
let fecha=objeto['fecha'].split(/-/s)
let desarrollo=objeto['matrices'][0]
let participantes=objeto['matrices'][1]
let raiz=document.getElementById('cuerpo_final')
let desarrolloweb=``
for(const d of desarrollo){
    desarrolloweb+=`
    
    ${d.Desarrollo}
    <div class="spacer"></div>
    `
}
console.log(participantes)
let participantesweb=``
for(const p of participantes){
    participantesweb+=`
    
    <div class="participante">
            <div class="caja-infop">
                <div class="nombre">${p['Nombre']}</div>
                <div class="cargo">${p['Cargo']}</div>
            </div>
            <div class="caja-firma">
                
                <div class="firma-elec">firmado electronicamente por</div>
            </div>
        </div>
  
    `
}
let adjuntos=objeto['valor5']

let body=`
<div class="header">
        <div class="cabecera-full">
            <div class="cabecera">
                <div class=" fecha">
                    <div class="caja-fecha">
                        <div class="titulo fg-blanco">AÑO</div>
                        <div class="texto">${fecha[2]}</div>
                    </div>
                    <div class="caja-fecha">
                        <div class="titulo fg-blanco">MES</div>
                        <div class="texto">${fecha[1]}</div>
                    </div>
                    <div class="caja-fecha">
                        <div class="titulo fg-blanco">DIA</div>
                        <div class="texto" >${fecha[0]}</div>
                    </div>
                </div>
                <div class="titulo-central fg-primario-oscuro">${objeto['titulo_acta']}</div>
                <div class="logotipo"><img src="${objeto['logo']}"></div>
            </div>
            <div class="cabecera2 bg-secundario-claro">
                <div class="caja-info">
                    <div class="titulo-info fg-secundario-oscuro" >${objeto['label1']}</div>
                    <div class="texto-info fg-secundario">${objeto['val1']}</div>
                </div>
                <div class="caja-info">
                <div class="titulo-info fg-secundario-oscuro" >${objeto['label2']}</div>
                <div class="texto-info fg-secundario">${objeto['val2']}</div>
                </div>
                <div class="caja-info">
                <div class="titulo-info fg-secundario-oscuro" >${objeto['label3']}</div>
                <div class="texto-info fg-secundario">${objeto['val3']}</div>
                </div>
            </div>
            <div class="subtitulo1 fg-secundario"></div>
        </div>
      </div>
      <div class="signi texto-izquierda">${objeto['creado_modificado']}</div>
      <div class="signa texto-derecha">${objeto['impreso_por']}</div>
      <h6>${objeto['titulo1']}</h6>
      <div class="desarrollo">
      ${desarrolloweb}</div>
      <div class="divisor"></div>
      <h6>${objeto['titulo2']}</h6>
      <div class>${objeto['valor2']}</div>
      <div class="divisor"></div>
      <h6>${objeto['titulo3']}</h6>
      <div>${objeto['valor3']}</div>
      <div class="divisor"></div>
      <h6>${objeto['titulo4']}</h6>
      ${participantesweb}
      <div class="divisor"></div>
      <h6>${objeto['titulo5']}</h6>
      <div class="adjuntos">
        ${adjuntos}
      </div>
      
      
`
raiz.innerHTML=body
// document.head.innerHTML += ' <link id="style-screen" href="../css/style-screen.css" rel="stylesheet" type="text/css">';
document.head.innerHTML += ' <link href="../css/interface.css" rel="stylesheet" type="text/css">';
document.head.innerHTML += ' <link href="../css/main.css" rel="stylesheet" type="text/css">';
document.head.innerHTML += '<link rel="stylesheet" href="https://cdn.korzh.com/metroui/v4/css/metro-all.min.css">';

