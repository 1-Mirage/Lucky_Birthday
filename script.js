const DOB = document.getElementById("dob");

const checkNumberButton = document.getElementById("check-number");

const luckynumber = document.getElementById("lucky-number");

const outputbox = document.getElementById("output-box");

function compareValues(sum,luckynumber)
{
  if(sum%luckynumber===0)
  {
    outputbox.innerText="The birthday is lucky";
  }
  else 
  {
    outputbox.innerText="The birthday is not lucky";
  }
}

function checklucky()
{
  const dob =DOB.value;
  const sum = calculateSum(dob);
  if(sum&&dob)
  compareValues(sum,luckynumber.value)
  else 
  outputbox.innerText="Please enter both the fields";
}

function calculateSum(dob) 
{
  const arrdob= dob.split("-");
  let sum =0;
  for(let ind=0;ind<arrdob.length;ind++){
    sum = sum + Number(arrdob[ind]);
  }
  return sum;
}

checkNumberButton.addEventListener('click',checklucky);
