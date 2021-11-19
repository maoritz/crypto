
const handleMarketValueData = (response) => {
    const value = Object.values(response)[0]
    const number = exractNumberFromPercetageString(value)
    return number
}

const exractNumberFromPercetageString = (percentageString) => {
    const cutPercent = percentageString.split("%")[0]
    const number = Number(cutPercent)
    return number
}

const getMarketStatusFormating = (marketStatusNumber) => {
    const marketStatusFormating = {}

    if(marketStatusNumber > 0 ){ 
       marketStatusFormating.text = 'Market is up'
       marketStatusFormating.imageSource = "/green_arrow.png"
       marketStatusFormating.textColor = '#59bb6e'
    }else{
       marketStatusFormating.text = 'Market is down'
       marketStatusFormating.imageSource = "/red_arrow.png"
       marketStatusFormating.textColor = '#DB4848'
    }
    return marketStatusFormating
}

export {exractNumberFromPercetageString,handleMarketValueData,getMarketStatusFormating}