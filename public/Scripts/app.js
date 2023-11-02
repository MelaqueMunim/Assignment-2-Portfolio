(function(){
    function Start()
    {
        console.log("App Started");
    }
    window.addEventListener("load", Start);
})();

function opentab(tabName) {
    // Select all elements with the class 'tab-contents' and store them in the variable tabContents.
    var tabContents = document.querySelectorAll('.tab-contents');

    // Hide all tab contents except the selected one
    tabContents.forEach(function (content) {
        if (content.id === tabName) {
            // if the Toggle the display of selected content to block or none
            if (content.style.display === 'block') {
                // the content will be hidden if currently displaying
                content.style.display = 'none';
            //display content if hidden
            } else {
                content.style.display = 'block';
            }
            //if  the content's id isn't the tabName then the display will be none   
        } else {
            content.style.display = 'none';
        }
    });
}
    