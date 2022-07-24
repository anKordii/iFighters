/*!
 * BeyondLabs
 * https://beyondlabs.pl/
 * 
 * Github
 * https://github.com/4uss
 * 
 * Contact
 * tonieholak@beyondlabs.pl
 * @twitter: XanaxWasTaken
 */
function fightsFilter(data, nameOfsort) {
    function sortingBeyondlabs(){

        function sortNewest(a, b){
            return b.id-a.id 
        }
        function sortOldest(a, b){
            return a.id-b.id 
        }

        if(nameOfsort === "fromOldest"){
            return data.sort(sortOldest);
        }else if(nameOfsort === "fromNewest"){
            return data.sort(sortNewest);
        }
    }
    return sortingBeyondlabs();
}
export default fightsFilter