//Grap the timeFrameSelector parent
const timeFrameParent = document.querySelector(".timeframe-selector");

console.log(timeFrameParent);

//Function to check on the timeFrameSelector state:
function checkOnTimeFrameState(child) {
    //For futuer updates if the yearly timeFrameSelector has been added, add the "timeFrameSelector" class to it.

    //Grap the timeFrameSelectors and convert them into array:
    const arrayOfTimeSelectors = [...document.querySelectorAll(".timeFrameSelector")];

    //If the user clicked on active timeFrameSelector:
    //Do nothing:
    //If the user clicked on non active timeFrameSelector:
    //Turn off the active one and turn on the non active.
    if (child.dataset.selected === "true") {
        return
    } else {
        //Loop through the timeFrameSelector and filter them with the one tht has true value
        //Change the true into false:
        arrayOfTimeSelectors.filter(timeFrameSelector => timeFrameSelector.dataset.selected === "true")[0].dataset.selected = "false";
        child.dataset.selected = "true";

    }

}

//Event Listener CB function here:
const handelClick = (event) => {
    const timeFrameSelector = event.target;
    checkOnTimeFrameState(timeFrameSelector);
    //Also fitch the data based on the user action: Daily, Weekly or Monthly.
}
//There is another approch of adding event listener to the childs, but this will consume more memory.
//Add the Event Listener to the parent:
timeFrameParent.addEventListener("click", handelClick);
