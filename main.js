// product increase event handler
function handleProductChange(product, isIncrease){
    const productInput = document.getElementById(product + "-count");
    let productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    else if(isIncrease == false && productCount > 0){
        productNewCount = productCount - 1;

    }
    productInput.value = productNewCount;
    // const productTotal = productNewCount * 1219;
    let productTotal = 0;
    if (product == "phone"){
        productTotal = productNewCount * 1219;
    }else if(product == "case"){
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + "-total").innerHTML = productTotal;
}

// function handlecaseChange(isIncrease){
//     const caseInput = document.getElementById("case-count");
//     let caseCount = parseInt(caseInput.value);
//     let caseNewCount = caseCount;
    
//     if (isIncrease == true) {
//         caseNewCount = caseCount + 1;
//     }
//     if(isIncrease == false && caseCount > 0){
//         caseNewCount = caseCount - 1;

//     }
//     caseInput.value = caseNewCount;
//     const phoneTotal = caseNewCount * 59;
//     document.getElementById("case-total").innerHTML = phoneTotal;
// }