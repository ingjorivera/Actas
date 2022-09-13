
fjs = document.getElementsByTagName("head")[0];
js = document.createElement("title");
fjs.appendChild(js, fjs);


let objetos=document.querySelectorAll('[tipo]');
let o=new Object()
for(let i=0;i<objetos.length;i++){
    
    nodos=retornaHijos(objetos[i],'tipo','nodo')
    if(nodos.length>0){
        let f=new Array()
        for(let j=0;j<nodos.length;j++){
            let n=[]
            let elementos=retornaHijos(nodos[j],'tipo','subtipo')
                for(k=0;k<elementos.length;k++){
                    let e=new Object()
                    let atributos=elementos[k].attributes
                    for(let l=0;l<atributos.length;l++){
                        e[atributos[l].name]=atributos[l].value
                    }
                    //limpiar tabla
                    
                    let tabla=elementos[k].getElementsByTagName('table')
                    
                    if(tabla.length>0){
                        
                        limpiarTabla(tabla)
                    }
                    e.valor=elementos[k].innerHTML
                    n.push(e)
                }
                
            
                
           f.push(n) 
        }
        o[objetos[i].getAttribute("tipo")]=f
    
    }   
    else{
        let tabla1=objetos[i].getElementsByTagName('table')
                    
        if(tabla1.length>0){
            
            limpiarTabla(tabla1)
        }
    o[objetos[i].getAttribute("tipo")]=objetos[i].innerHTML
    }
}
function enviarObjeto(){
    document.title=o['titulo-reporte']+' - '+o['empresa']
let reporte=document.getElementById('reporte').contentWindow
reporte.postMessage(JSON.stringify(o),'*');
//window.removeEventListener('message',enviarObjeto)
}


function retornaHijos(obj,tipo,valor){
if(tipo==='tipo'){
    nodo=obj.querySelectorAll('['+valor+']')
}
else if(tipo==='html'){
    nodo=obj.getElementsByTagName(valor)
}
return nodo
}

function limpiarTabla(tabla){
for(let i=0;i<tabla.length;i++){
tabla[i].removeAttribute('style')
tabla[i].removeAttribute('class')
tabla[i].removeAttribute('align')
tabla[i].removeAttribute('width')
tabla[i].removeAttribute('height')
tabla[i].setAttribute('class','table striped row-hover table-border row-border compact')

agregarHead(tabla[i])

limpiar(tabla[i],'th')
limpiar(tabla[i],'tr')
limpiar(tabla[i],'td')
limpiar(tabla[i],'thead')
limpiar(tabla[i],'span')
limpiar(tabla[i],'p')
}



function limpiar(tabla,elemento){
    let e=tabla.getElementsByTagName(elemento)
    for(let i=0;i<e.length;i++){
        e[i].removeAttribute('style')
        e[i].removeAttribute('class')
        e[i].removeAttribute('align')
        e[i].removeAttribute('width')
        e[i].removeAttribute('height')
    }
    
}
function agregarHead(tabla){
   
    let head=tabla.createTHead()
    let tbody=tabla.getElementsByTagName('tbody')
    let firstRow=tbody[0].getElementsByTagName('tr')
    let cols=firstRow[0].getElementsByTagName('td')
    head.innerHTML=firstRow[0].innerHTML
    if(cols.length>4){
        tabla.classList.add('tabla-wide');
    }
    firstRow[0].remove()
}

}