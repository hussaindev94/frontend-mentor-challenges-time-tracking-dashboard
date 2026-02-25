//Grap the timeFrameSelector parent
const timeFrameParent = document.querySelector(".timeframe-selector");

//Function to Update the UI.
function updateUiElements(){}
//Function to grap the right data.
function getTimeFrameData(data, timeFrameName) {
    console.log(timeFrameName);
    const selectedTimeFrameData = data.map(dataItem => {
        return {
            title: dataItem.title,
            timeFrameData: dataItem.timeframes[timeFrameName]
        }
    });
    //Call the updateUiElement function and pass the returnd data to it:

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
        fetch("./data.json").then(res => {
            if (!res.ok) return console.log("No Response")

            return res.json();

        }).then(data => getTimeFrameData(data, nextTimeFrameName)).catch(e => console.log(e));
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
