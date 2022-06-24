

  function tabuada() {
     let num = window.document.getElementById('txtn')
     let tab = window.document.getElementById('seltab')
     if (num.value.length == 0){
       window.alert('Por favor Dígite um numero !')
     } else{
       let n = Number(num.value)
       tab.innerHTML = ''
       for(let c = 1; c <= 20; c++){
         let item = document.createElement('option')
         item.text = `${n} x ${c} = ${n*c}`
         tab.appendChild(item)
        }
     }  
  }
  