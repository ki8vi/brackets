module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let splited = str.split("");
  let bracketsExs = [];
  for(let i = 0; i < bracketsConfig.length; i++){
    bracketsExs.push(bracketsConfig[i].join(""))
  }
  
  for(let i = 0; i < splited.length; i++) {
   
    if(bracketsExs.includes(stack[stack.length-1] + splited[i])) {
      stack.pop()
    } else {
       stack.push(splited[i]);
    }
  }
  return !stack.length
}
