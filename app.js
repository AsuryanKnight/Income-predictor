import { DecisionTree } from "./libraries/decisiontree.js"
import { VegaTree } from "./libraries/vegatree.js"

// DATA

const csvFile = "./archive/Stores.csv"
const trainingLabel = "Store_Sales"
const ignored = ["Store_ID", "Daily_Customer_Count"]

let decisionTree; 

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

    // todo : splits data in traindata en testdata
    data.sort(() => (Math.random() - 0.5))

    let trainData = data.slice(0, Math.floor(data.length * 0.8))
    let testData = data.slice(Math.floor(data.length * 0.8) + 1)

    // maak het algoritme aan
    decisionTree = new DecisionTree({
        ignoredAttributes: ignored,
        trainingSet: trainData,
        categoryAttr: trainingLabel
    })

    // Teken de boomstructuur - DOM element, breedte, hoogte, decision tree
    let visual = new VegaTree('#view', 800, 400, decisionTree.toJSON())

    // todo : maak een prediction met een sample uit de testdata

    let estimate = testData[0]
    let storesPrediction = decisionTree.predict(estimate)

    console.log(storesPrediction)
    let accuracyNumbers1 = Number(estimate.Store_Sales) + Number(5000)
    let accuracyNumbers2 = Number(estimate.Store_Sales) - Number(5000)
    
    //console.log(`Customers : ${estimate.Daily_Customer_Count} income : ${storesPrediction} actual income : ${estimate.Store_Sales} < ${accuracyNumbers1} > ${accuracyNumbers2}`)
    if (storesPrediction < accuracyNumbers1 && storesPrediction > accuracyNumbers2) {
        console.log("test")
    }
    testStores(testData)
}

// todo : bereken de accuracy met behulp van alle test data

function testStores(testData) {
    let amountCorrect = 0;
    let storesAmount = 897;

    for (let estimate of testData) {
        // kopie van passenger maken, zonder het label
        const storeWithoutLabel = Object.assign({}, estimate)
        delete storeWithoutLabel.Store_Sales

        // prediction
        let prediction = decisionTree.predict(storeWithoutLabel)

        let accNum1 = Number(estimate.Store_Sales) + Number(5000)
        let accNum2 = Number(estimate.Store_Sales) - Number(5000)

        // vergelijk de prediction met het echte label
        if (prediction < accNum1 && prediction > accNum2) {
            amountCorrect++;
            storesAmount--;
        }
    }

    let accuracy = amountCorrect / testData.length * 100;

    let text = document.getElementById('accuracy').innerHTML = "Accuracy : " + accuracy;

    let FalseNegative = amountCorrect;
    let trueNegative = testData.length - amountCorrect;


    document.getElementById('trueNegative').innerHTML = trueNegative;
    document.getElementById('FalseNegative').innerHTML = FalseNegative;
}

loadData()
