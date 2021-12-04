let signIn = document.querySelector("#sign__in");
let signUp = document.querySelector("#sign__up");
let btn = document.getElementById("btn2");
let signInTitle = document.querySelector(".sign__in-title");
let signInSubTitle = document.querySelector(".sign__in-subtitle");
let signUpTitle = document.querySelector(".sign__up-title");
let signUpSubTitle = document.querySelector(".sign__up-subtitle");
let input1 = document.querySelector("#input1");
let input3 = document.querySelector("#input3");
let form = document.querySelector("form");
let sum = 1;

btn.addEventListener("click", ()=>{
  sum++;
  console.log(sum);
  click()
});

function click() {
  if (sum % 2 !== 0) {
    signIn.style.transform = ` translateX(0%)`;
    signUp.style.transform = ` translateX(0%)`;
    signInTitle.textContent = "Sign in";
    input3.style.display = "none";
    input1.style.marginTop = "0";
    signUpTitle.textContent = "Don't have an account?";
    signUpSubTitle.textContent = "Press sign up";
    btn.textContent = "Sign up";
  } else if (sum % 2 === 0) {
    signIn.style.marginTop = "0px";
    signIn.style.transform = ` translateX(100%)`;
    signUp.style.transform = ` translateX(-100%)`;
    signInTitle.textContent = `Create Account`;
    signInTitle.className = "title2";
    signInTitle.style.marginTop = "-30px";
    signInSubTitle.textContent = "or use your email for registration";
    input3.style.display = "block";
    btn.textContent = "Sign in";
    input1.style.marginTop = "14px";
    signUpTitle.textContent = "Already have an account";
    signUpSubTitle.textContent = "Press sign in";
  }
}
console.log("Hello world !")
console.log("hello work")

    
    
    
    
    