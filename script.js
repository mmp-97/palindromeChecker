const inputText = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", ()=>{
  const textValue = inputText.value.trim();
  
  if(!textValue){
  alert("Please input a value")
  return;
  };

  const palindromeCheck = (str) => {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
  }

  if (palindromeCheck(textValue)){
    result.textContent = `${textValue} is a palindrome.`
  } else{
    result.textContent = `${textValue} is not a palindrome`
  }

});