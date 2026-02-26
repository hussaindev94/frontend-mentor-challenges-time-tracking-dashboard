//Grap the timeFrameSelector parent
const timeFrameParent = document.querySelector(".timeframe-selector");

//Function to append data to the card:
function appendData(data, cardItems) {
    const [cardTitle, currentHours, previusHours] = [...cardItems];

    data.forEach(dataItem => {
        if (dataItem.title === cardTitle) {
            currentHours.textContent = dataItem.timeFrameData["current"];
            previusHours.textContent = dataItem.timeFrameData["previous"];
        }
    });
    //We could use switch case to check on the card title and then populate the data to the card.
    //There will be more repetitive code.
}
//Function to Update the UI.
function updateUiElements(selectedData){
    //grap all the cards:
    const cards = document.querySelectorAll(".card");
    console.log(cards);

    //loop through the cards and pass the following:
    //The card title => to check with the data title.
    //The current hours and previus hours.
    cards.forEach(card => {
        const cardTitle = card.querySelector(".card-title").textContent;
        const currentHours = card.querySelector(".current-hours .hours");
        const previusHours = card.querySelector(".last-hours .hours");
        console.log(cardTitle, currentHours, previusHours);
        appendData(selectedData, [cardTitle, currentHours, previusHours]);
    })
}
//Function to grap the right data.
function getTimeFrameData(data, timeFrameName) {
    console.log(timeFrameName);
    const selectedTimeFrameData = data.map(dataItem => {
        return {
            title: dataItem.title,
            timeFrameData: dataItem.timeframes[timeFrameName]
        }
    });
    console.log(selectedTimeFrameData);
    //Call the updateUiElement function and pass the returnd data to it:
    updateUiElements(selectedTimeFrameData);

}


//function change the selected timeFrame.
function changeTimeFrame(nextTimeFrame) {
    //Grap the timeFrameSelectors and convert them into array:
    const arrayOfTimeSelectors = [...document.querySelectorAll(".timeFrameSelector")];

    //Loop through the timeFrameSelector and filter them with the one tht has true value.
    //Change the true into false:
    arrayOfTimeSelectors.filter(timeFrameSelector => timeFrameSelector.dataset.selected === "true")[0].dataset.selected = "false";
    nextTimeFrame.dataset.selected = "true";

}
//Fetching data:
async function fetchingData(nextTimeFrameName) {
    try {
        const res = await fetch("./data.json");
        if (!res.ok) throw Error("Bad Request");
        const data = await res.json();

        getTimeFrameData(data, nextTimeFrameName);

    } catch (error) {
        console.log(error);
    }
}
//Function to check on the timeFrameSelector state:
function checkOnTimeFrameState(nextTimeFrame) {
    //For futuer updates if the yearly timeFrameSelector has been added, add the "timeFrameSelector" class to it.


    //If the user clicked on active timeFrameSelector:
    //Do nothing:
    //If the user clicked on non active timeFrameSelector:
    //Turn off the active one and turn on the non active.
    if (nextTimeFrame.dataset.selected === "true") {
        return
    } else {
        changeTimeFrame(nextTimeFrame);


        const nextTimeFrameName = nextTimeFrame.textContent.toLowerCase();
        //Fetch the data based on the user action: Daily, Weekly or Monthly.
        fetchingData(nextTimeFrameName)
    }

}

//Event Listener CB function here:
const handelClick = (event) => {

    const nextTimeFrame = event.target;
    //console.log(timeFrameSelector.textContent);
    checkOnTimeFrameState(nextTimeFrame);
}
//There is another approch of adding event listener to the childs, but this will consume more memory.
//Add the Event Listener to the parent:
timeFrameParent.addEventListener("click", handelClick);

//For futuer audates we could use local storage to preserve the status of the page when the user reviset the page or refresh it.
