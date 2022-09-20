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

//obtener filas de desarrollo
let multi=document.querySelectorAll('[multi]')


let objmulti=[]
for(const m of multi){
    let matriz=[]
    
    
    let filas
    if(m.childNodes[0].nodeName=='TABLE'){
        filas=m.childNodes[0].childNodes[0].childNodes
    }
    else{
        filas=m.childNodes[0].nextSibling.childNodes[0].childNodes
    }
   
    let titulos=filas[0].childNodes
    
    for(const f of filas){
        let m={}
        let contador=0
       
        let celdas=f.childNodes
       
        for(const c of celdas){
            m[titulos[contador].innerText]=c.innerHTML
            
            
            contador++
        }
        matriz.push(m)
    }
    matriz.shift()
    objmulti.push(matriz)
}

// for(const m of multi){
//     let matriz=[]
//     let filas = m.getElementsByTagName('tr')
//     let titulos = filas[0].getElementsByTagName('td')
//     for(const f of filas){
//         let celdas=f.getElementsByTagName('td')
//         contador=0
//         let m={}
//         for(const c of celdas){
//             m[titulos[contador].innerText]=c.innerHTML
//             contador++
//         }
//         matriz.push(m)   
//     }
//     matriz.shift()
//     objmulti.push(matriz)
    
// }
o['matrices']=objmulti

console.log(o)


// function enviarObjeto(){
//     document.title=o['titulo-reporte']+" - "+['empresa']
// let reporte=document.getElementById('reporte').contentWindow
// reporte.postMessage(JSON.stringify(o),'*');
// console.log(o)
// //window.removeEventListener('message',enviarObjeto)
// }


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
let head=tabla[i].getElementsByTagName('thead')
if(head.length==0){
//  agregarHead(tabla[i])
}

limpiar(tabla[i],'th')
limpiar(tabla[i],'tr')
limpiar(tabla[i],'td')
limpiar(tabla[i],'thead')
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
    let tab=tabla.getElementsByTagName('tr')
    let b=tabla.getElementsByTagName('tbody')
    let tr=tab[0].innerHTML
    let c=tr.replace(/td/g,'th')
    
    let head=document.createElement('thead')
    let row=document.createElement('tr')
    tabla.insertBefore(head,tabla.firstChild)
    let newHead=document.getElementsByTagName('thead')
    newHead[0].insertBefore(row,newHead.firstChild)
    newHead[0].getElementsByTagName('tr')[0].innerHTML=tr
    let fc=b[0].getElementsByTagName('tr')
    fc[0].remove()
}

}
