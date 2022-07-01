import { DecisionTree } from "./libraries/decisiontree.js"
import { VegaTree } from "./libraries/vegatree.js"

// DATA

const csvFile = "./archive/Stores.csv"
const trainingLabel = "Store_Sales"
const ignored = ["Store_ID", "Daily_Customer_Count"]

let decisionTree

document.getElementById("btn").onclick = predict
let predictions = document.getElementById("prediction")

// laad csv data als json

function loadData() {
    Papa.parse(csvFile, {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: results => trainModel(results.data),   // traindata
    })
}

// MACHINE LEARNING - Decision Tree

function trainModel(data) {
    // maak het algoritme aan
    decisionTree = new DecisionTree({
        ignoredAttributes: ignored,
        trainingSet: data,
        categoryAttr: trainingLabel
    })


}

//Predict store income and show results
function predict(){
    let area = document.getElementById("areaInput").value
    let products = document.getElementById("productsInput").value

    let store = {Store_Area:area, Items_Available:products}
    
    let prediction = decisionTree.predict(store)
  
    let result1 = Number(prediction) - Number(5000)
    let result2 = Number(prediction) + Number(5000)

   document.getElementById("prediction").innerHTML = `Your store's income will be around $${result1} and $${result2}`
}

loadData()
