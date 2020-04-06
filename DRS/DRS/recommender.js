const brain = require("brain.js");
console.log("Just inside recommender", symptoms);

const recommender = {
  "Cardiology" : "ChestPain",
  "ChildDevelopment" :"SpeechDelay",
  "Dental" :"BadBreath",
  "Dermatology" :"Rash",
  "ENT" : "EarPain" ,
  "Nephrology" : "SevereSwelling",
  "Opthalmalogy" :"BlurredVision",
  "Psychiatry" :"SuicidalTendency" ,
  "Urology" :"BloodUrine"
}

console.log("After initiation", symptoms);

//input : symptoms
//output: doc. dept

const trainingData = [];


for (let dept in recommender) {
  const symptoms = recommender[dept];
  trainingData.push({
    input: { [symptoms] : 1},
    output: { [dept] : 1}
  });
}

console.log("After pushing", symptoms);

const net = new brain.NeuralNetwork({ hiddenLayer : [3]});

const result = net.train(trainingData);

//console.log(result);

console.log("After training", symptoms);

function departmentName(symptom){
  console.log("Just inside departmentName", symptom);
  const result = net.run({[symptom] : 1});
  //console.log(result);
  let highestValue = 0.7;
  let highestDeptName = "";
  for(let deptName in result){
    if(result[deptName] > highestValue){
      highestvalue = result[deptName];
      highestDeptName = deptName;
    }
  }
  console.log("result highst deptName", highestDeptName);
  return highestDeptName;
}

departmentName(symptoms);


