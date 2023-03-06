let searchInput = document.getElementById("searchInput");
let Para = document.getElementById("Para");
let textContentDiv = document.getElementById("textContentDiv");
let Data;
let spinner = document.getElementById("spinner");
let DivEle = document.getElementById("searchResults");
let HeadingBottom = document.getElementById("HeadingBottom");

let RowDiv = document.createElement("div");
RowDiv.classList.add("row");
DivEle.appendChild(RowDiv);

function ResultContainer(item) {



    let ColumnDiv = document.createElement("div");
    ColumnDiv.classList.add("col-6", "text-center");
    RowDiv.appendChild(ColumnDiv);

    let BookImage = document.createElement("img");
    BookImage.src = item.imageLink;
    ColumnDiv.appendChild(BookImage);

    let BookName = document.createElement("p");
    BookName.classList.add("paraaa");
    BookName.textContent = item.author;
    ColumnDiv.appendChild(BookName);




}


function Elementss(Data) {
    for (let item of Data) {

        ResultContainer(item);

    }
}

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        HeadingBottom.textContent = "";
        Para.textContent = "";
        RowDiv.textContent = " ";
        spinner.classList.toggle("d-none");
        let InputValue = searchInput.value;
        //console.log(InputValue);
        let url = "https://apis.ccbp.in/book-store?title=" + InputValue;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);
                Data = data;
                let Total = data.total;
                console.log(Total);
                //textContentDiv.textContent = "";
                if (Total === 0) {
                    HeadingBottom.textContent = "";
                    Para.textContent = "No results found";
                    spinner.classList.toggle("d-none");
                    HeadingBottom.textContent = "";
                } else {
                    HeadingBottom.textContent = "Popular Books";
                    spinner.classList.toggle("d-none");
                    Para.textContent.textContent = "";
                    Elementss(Data.search_results);

                }

            });
    }


});
