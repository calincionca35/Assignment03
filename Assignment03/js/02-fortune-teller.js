/*eslint-env browser*/
//2. The Fortune Teller
function tellFortune(jobTitle, geoLocation, partnerName, numChildren) {
    "use strict";
    var future = "You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numChildren + " kids." + "<br>";
    window.document.write(future);
}
tellFortune("developer", "Seattle", "Mary", 5);
tellFortune("teacher", "NYC", "John", 3);
tellFortune("secretary", "San Diego", "Sally", 2);