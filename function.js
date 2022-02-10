function dis(val)
{
    document.getElementById("result").value+=val
}
  
function solve()
{
    let x = document.getElementById("result").value
    
    if (x.includes('*') | x.includes('+') | x.includes('-') | x.includes('/')) {
        
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
        
        document.getElementById("ultimaOP").value = z
        document.getElementById("result").value = eval(x)

    } else { 
        x += document.getElementById("ultimaOP").value
        document.getElementById("result").value = eval(x)
    }
        
   
    

}
  
function clr()
{
    document.getElementById("result").value = ""
}