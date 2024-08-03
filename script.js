document.addEventListener("DOMContentLoaded", function() {
    const homeData = [
        {
            id: 1,
            name: "Harry Poeter",
            rating: 4.7,
            time: "2hr : 22mins",
            desc: "Sand and dust storms (SDS), also known as sirocco, haboob, yellow dust, white storms, and the harmattan, are a natural phenomenon linked with land and water management and climate change.",
            starring: "Karen Gilchrist, James Earl Jones",
            genres: "Action",
            tags: "Action, Adventures, Horror",
            cover: "../images/img3.jfif",
            video: "./videos/harry.mp4",
            url: "./shershaahh.html",
            date: "20-Jan-1997",
        },
        {
            id: 2,
            name: "Money Heist",
            rating: 4.6,
            time: "2hr : 22mins",
            desc: "The island, like its inhabitants, is wholly fictional. Kong's island home in the Pacific makes its first appearance, along with Kong himself, in the 1933 film King Kong. ",
            starring: "Brenda Chapman, Jeff Nathanson",
            genres: "Adventures",
            tags: "Adventures,Animation,Family",
            cover: "../images/home2.jpg",
            video: "./videos/money.mp4",
            date: "10-JUL-2021",
          },
          {
            id: 3,
            name: "Krishna",
            rating: 4.8,
            time: "2hr : 22mins",
            desc: "Piracy is an act of robbery or criminal violence by ship or boat-borne attackers upon another ship or a coastal area, typically with the goal of stealing cargo and other valuable items or properties. ",
            starring: "James Chinlund, Jeff Nathanson",
            genres: "Adventures",
            tags: "Adventures,Action ",
            cover: "../images/krishna.jpg",
            video: "./videos/krishna.mp4",
            date: "20-FEB-2010",
          },
          {
            id: 4,
            name: "Kgf",
            rating: 4.9,
            time: "2hr : 22mins",
            desc: "Sand and dust storms (SDS), also known as sirocco, haboob, yellow dust, white storms, and the harmattan, are a natural phenomenon linked with land and water management and climate change.",
            starring: "Karen Gilchrist, James Earl Jones",
            genres: "Action",
            tags: "Action, Adventures, Horror",
            cover: "../images/kgf.jfif",
            video: "./videos/kgf.mp4",
            date: "12-Aug-2015",
          },
        // Other items can go here
    ];

   
    function renderHome(items) {
        const homeSection = document.getElementById("home");
        homeSection.innerHTML = ""; // Clear existing content

        items.forEach(item => {
            const homeDiv = document.createElement("div");
            homeDiv.className = "home-item";

            const title = document.createElement("h2");
            title.textContent = item.name;

            const cover = document.createElement("img");
            cover.src = item.cover;
            cover.alt = item.name;

            const button = document.createElement("button");
            button.textContent = "Play Video";
            
            button.addEventListener("click", () => {
                const video = document.createElement("video");
                video.src = item.video;
                video.controls = true;
                video.width = 320; // Adjust width as needed
                video.height = 240; // Adjust height as needed

                homeDiv.appendChild(video);
                button.disabled = true; // Disable button after click to prevent multiple videos
            });

            homeDiv.appendChild(title);
            homeDiv.appendChild(cover);
            homeDiv.appendChild(button);
            homeSection.appendChild(homeDiv);
        });
    }

    renderHome(homeData);
});

function validateEmail() {
    const emailInput = document.getElementById('email');
    const getStartedButton = document.getElementById('getStarted');
    const email = emailInput.value;

    // Basic email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        getStartedButton.disabled = false;
    } else {
        getStartedButton.disabled = true;
    }
}