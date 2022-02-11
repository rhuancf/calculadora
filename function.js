function dis(val)
{
    document.getElementById("result").value+=val
}
  
function solve()
{
    //Pegar string no display
    let x = document.getElementById("result").value
    //Checar se string contém letras ou caracteres inválidos
    if(/[a-zA-Z!?@#$%¨&]/.test(x)){
        //Limpar display
        document.getElementById("result").value = ""
        Swal.fire({
            position: 'center',
            toast: false,
            icon: 'error',
            title: 'Caractere inválido!',
            showConfirmButton: false,
            timer: 1500
          })
        return false
    }
    //Checar se a string contém operadores
    if (x.includes('*') | x.includes('+') | x.includes('-') | x.includes('/')) {
        //Tratar cada operador e salvar a ultima operação em uma variável
        if (x.includes('-')) {
            o = '-'
        } else {o = x.match(/[*-+'/']/)[0]}

        switch(o){
            case '*':
             z ='*' + x.match(/[^*-+'/']*$/)[0]
             break
            case '-':
             z = '-' + x.match(/[^-]*$/)[0]
             break
            case '+':
             z ='+' + x.match(/[^*-+'/']*$/)[0]
             break
            case '/':
             z ='/' + x.match(/[^*-+'/']*$/)[0]
             break
        }
        //Salvar a ultima operação em "ultimaOP"
        document.getElementById("ultimaOP").value = z
        //Exibir no display o resultado
        document.getElementById("result").value = eval(x)

    } else { 
        //Pegar última operação salva e concatenar com string do display
        x += document.getElementById("ultimaOP").value
        //Exibir no display o resultado
        document.getElementById("result").value = eval(x)
    }
        
   
    

}
  
function clr()
{
    document.getElementById("result").value = ""
}