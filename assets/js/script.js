function closeInnerContainer() {
    $("#contentContainer1").attr("style", "display: none;");
    $("#contentContainer2").attr("style", "display: none;");
    $("#contentContainer3").attr("style", "display: none;");
}

function removeToggleClass() {
    $("#toggleLink1 i").removeClass("expanded");
    $("#toggleLink2 i").removeClass("expanded");
    $("#toggleLink3 i").removeClass("expanded");
}

$(document).ready(function() {
    $("#toggleLink1").click(function() {
        if (!$('#toggleLink1 i').hasClass("expanded")) {
            closeInnerContainer();
            removeToggleClass();
        }
        $("#contentContainer1").slideToggle('2000', 'linear');
        $("#toggleLink1 i").toggleClass("expanded");
    });
    $("#toggleLink2").click(function() {
        if (!$('#toggleLink2 i').hasClass("expanded")) {
            closeInnerContainer();
            removeToggleClass();
        }
        $("#contentContainer2").slideToggle();
        $("#toggleLink2 i").toggleClass("expanded");
    });
    $("#toggleLink3").click(function() {
        if (!$('#toggleLink3 i').hasClass("expanded")) {
            closeInnerContainer();
            removeToggleClass();
        }
        $("#contentContainer3").slideToggle();
        $("#toggleLink3 i").toggleClass("expanded");
    });
    $(".navbar-toggler").on("click", () => {
        if ($(".navbar-toggler").hasClass("collapsed")) {
            closeInnerContainer();
            $("#toggleLink1 i").removeClass("expanded");
            $("#toggleLink2 i").removeClass("expanded");
            $("#toggleLink3 i").removeClass("expanded");
        }
    });
});

const linkList1 = document.getElementById("linkList1");

linkList1.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        e.preventDefault();

        const contentHeader = document.querySelector(".navbarInnerContainer1");

        // Remove the "active" class from all contentDisplays
        const contentDisplays = contentHeader.querySelectorAll(".contentDisplay");
        contentDisplays.forEach((contentDisplay) => contentDisplay.classList.remove("active"));

        // Get the ID of the clicked link and add the "active" class to the corresponding contentDisplay
        const contentID = e.target.getAttribute("data-content");
        contentHeader.querySelector("#" + contentID).classList.add("active");
    }
});

const linkList2 = document.getElementById("linkList2");

linkList2.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        e.preventDefault();

        const contentHeader = document.querySelector(".navbarInnerContainer2");

        // Remove the "active" class from all contentDisplays
        const contentDisplays = contentHeader.querySelectorAll(".contentDisplay");
        contentDisplays.forEach((contentDisplay) => contentDisplay.classList.remove("active"));

        // Get the ID of the clicked link and add the "active" class to the corresponding contentDisplay
        const contentID = e.target.getAttribute("data-content");
        contentHeader.querySelector("#" + contentID).classList.add("active");
    }
});

const linkList3 = document.getElementById("linkList3");

linkList3.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        e.preventDefault();

        const contentHeader = document.querySelector(".navbarInnerContainer3");

        // Remove the "active" class from all contentDisplays
        const contentDisplays = contentHeader.querySelectorAll(".contentDisplay");
        contentDisplays.forEach((contentDisplay) => contentDisplay.classList.remove("active"));

        // Get the ID of the clicked link and add the "active" class to the corresponding contentDisplay
        const contentID = e.target.getAttribute("data-content");
        contentHeader.querySelector("#" + contentID).classList.add("active");
    }
});

// Search Box JS

const searchIcons = document.querySelectorAll('.search-icon');
const closeModalButton = document.getElementById('close-modal-button');
const searchModal = document.getElementById('search-modal');

searchIcons.forEach((searchIcon) => {
    searchIcon.addEventListener('click', function() {
        searchModal.style.display = 'block';
    });
});

closeModalButton.addEventListener('click', function() {
    searchModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == searchModal) {
        searchModal.style.display = 'none';
    }
});


// const jsonData = [
//     {"name": "automation", "url": "https://abc.com"},
//     {"name": "analytics", "url": "https://def.com"},
// ];
const jsonData = [
    { "name": "Automation", "url": "https://abc.com" },
    { "name": "Analytics", "url": "https://def.com" },
    { "name": "Google", "url": "https://google.com" },
    { "name": "Biscuits", "url": "https://banana.com" },
    { "name": "Cactus", "url": "https://cactus.com" },
    { "name": "Dolphin", "url": "https://dolphin.com" },
    { "name": "Elephant", "url": "https://elephant.com" },
    { "name": "Flamingo", "url": "https://flamingo.com" },
    { "name": "Giraffe", "url": "https://giraffe.com" },
    { "name": "Hedgehog", "url": "https://hedgehog.com" },
    { "name": "Iguana", "url": "https://iguana.com" },
    { "name": "Jaguar", "url": "https://jaguar.com" },
    { "name": "Kangaroo", "url": "https://kangaroo.com" },
    { "name": "Lion", "url": "https://lion.com" },
    { "name": "Mango", "url": "https://mango.com" },
    { "name": "Nightingale", "url": "https://nightingale.com" },
    { "name": "Ostrich", "url": "https://ostrich.com" },
    { "name": "Peacock", "url": "https://peacock.com" },
    { "name": "Quokka", "url": "https://quokka.com" },
    { "name": "Raccoon", "url": "https://raccoon.com" }
];

const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const noResultsMessage = document.getElementById('no-results-message');

// Function to perform the search and update the results
function performSearch(query) {
    searchResults.innerHTML = '';
    const filteredData = jsonData.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));

    if (filteredData.length === 0) {
        searchResults.innerHTML = '<div class="no-results-message">No content available.</div>';
        // noResultsMessage.style.display = 'block';
    } else {
        searchResults.innerHTML = '';
        // noResultsMessage.style.display = 'none';

        // Show the first 10 results or fewer if there are fewer than 10
        const resultsToShow = filteredData.slice(0, 10);

        resultsToShow.forEach(result => {
            const resultLink = document.createElement('span');
            // resultLink.href = result.url;
            resultLink.textContent = result.name;
            // resultLink.target = '_blank';

            const resultItem = document.createElement('div');
            resultItem.classList.add('search-result');
            resultItem.setAttribute('onclick', 'window.open("' + result.url + '","_blank")');
            resultItem.appendChild(resultLink);

            searchResults.appendChild(resultItem);
        });
    }
}

// Event listener to trigger the search on input change
searchInput.addEventListener('input', function() {
    const query = searchInput.value;
    performSearch(query);
});


// sidebar js
function setActive(index) {
    const infoContainer = document.querySelector('.information-container');
    const listItems = infoContainer.querySelectorAll('li');
    const activeBar = document.querySelector('.active-bar');

    const selectedItem = listItems[index - 1];
    const barTop = selectedItem.offsetTop;
    const barHeight = selectedItem.clientHeight;

    listItems.forEach((item, i) => {
        if (i === index - 1) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    activeBar.style.top = `${barTop}px`;
    activeBar.style.height = `${barHeight}px`;

    //side navbar to show the place

    // var navbarHeight = document.querySelector('.navbar').offsetHeight;
    // var targetSection = document.getElementById('section' + index);

    // if (targetSection) {
    //     var offset = targetSection.getBoundingClientRect().top - navbarHeight;
    //     window.scrollTo({
    //         top: offset,
    //         behavior: 'smooth'
    //     });
    // }
}

// Set "Item 1" as the default active item when the page loads
setActive(1);


// $.fn.isInViewport = function() {
//     let elementTop = $(this).offset().top;
//     let elementBottom = elementTop + $(this).outerHeight();

//     let viewportTop = $(window).scrollTop();
//     let viewportBottom = viewportTop + $(window).height();

//     return elementBottom > viewportTop && elementTop < viewportBottom;
// };


// let sectionIds = [];
// let section_select = -1;
// var sections = document.querySelectorAll('.section-content');

// $(document).ready(function() {
//     sections.forEach(function(section) {
//         sectionIds.push(section.id);
//     });
// })

// if (active_section) {
//     $(window).scroll(function() {

//         sections.forEach(function(section) {
//             if ($(section).isInViewport()) {
//                 if (section_select == -1) {
//                     section_select = Number((section.id).replace("section", ""));
//                 }
//             }
//         });

//         const infoContainer = document.querySelector('.information-container');
//         const listItems = infoContainer.querySelectorAll('li');
//         listItems.forEach((item, i) => {
//             if (i === section_select - 1) {
//                 item.classList.add('active');
//             } else {
//                 item.classList.remove('active');
//             }
//         });

//         const activeBar = document.querySelector('.active-bar');

//         const selectedItem = listItems[section_select - 1];
//         const barTop = selectedItem.offsetTop;
//         const barHeight = selectedItem.clientHeight;


//         activeBar.style.top = `${barTop}px`;
//         activeBar.style.height = `${barHeight}px`;

//         section_select = -1;
//     });
// }