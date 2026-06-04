let searchResults = [];
let searchInput = document.getElementById("searchInput");
let searchBtnElm = document.getElementById("searchBtn");
let resetSearchBtn = document.getElementById("resetSearchBtn");

searchBtnElm.addEventListener("click", (event) => {
    const searchKey = searchInput.value;
});

resetSearchBtn.addEventListener("click", (event) => {
    searchInput.value = "";
});
let responseData = [];
function loadData() {
    try {
        fetch("./data/travel_recommendation_api.json")
            .then((response) => response.json())
            .then((data) => {console.log(data); responseData = data;})
            .catch((error) => {
                console.error(error);
            });
    } catch(error) {
        console.log(error);
    }
}

loadData();



