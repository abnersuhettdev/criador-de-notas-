//Função para fazer Login
const loginForm = document.querySelector("#loginForm");
const users = JSON.parse(localStorage.getItem("users"))

function changeForm(){
    window.location.href = "index.html"

}

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
  
    verifyUser(users) 
  })
  
  //Verifica os usuários
  function verifyUser(users) {
   
    let loggedUser;
  
    //percorre o localStorage
     let user = users.find((user)=> loginForm.username.value === user.username && loginForm.password.value === user.password)
    
    
      //Se o usuário for válido, adiciona ao localStorage o Objeto LoggedUser para monitorar a sessão ativa
      if (user) {
       loggedUser = user
       loggedUser.notes = user.notes ?? []
       
       localStorage.setItem("loggedUser", JSON.stringify(loggedUser))
       window.location.href = "dashboard.html"
  
      //Se não for válido aparece um erro no formulário  
      } else { 
      document.querySelector(".form h2").innerText = "Usuário ou senha Incorretos"
      loginForm.username.setAttribute("style", "border: 2px solid red")
      loginForm.password.setAttribute("style", "border: 2px solid red")
      }
    
  }
  