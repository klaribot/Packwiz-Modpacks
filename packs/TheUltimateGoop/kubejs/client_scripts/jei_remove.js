// priority: 0

// Listen for the "removeCategories" client event for JEI.
JEIEvents.removeCategories(event => {

    // List of banned recipe categories
    // Will not show up in JEI
    //let removeCategories = [
    //'create:fan_blasting'
    //]

    //removeCategories.forEach((catid) => {
        //console.log('Removing category id for: ' + catid)
    //    event.remove(catid)
    //})
});

JEIEvents.hideItems(event => {
    
})
