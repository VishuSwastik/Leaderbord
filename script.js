let button = document.querySelector('button');
let fname = document.querySelector('.fname');
let lname = document.querySelector('.lname');
let country = document.querySelector('.country');
let score = document.querySelector('.score');
let container = document.querySelector('.container');
let playerList = [];

button.addEventListener('click', function(e) {
    e.preventDefault();
    if (fname.value === "" || lname.value === "" || score.value === "" || country.value === "") {
        alert("Please fill in all fields");
    } else {
        let Mdate = new Date();
        let a = Mdate.getDate();
        let b = Mdate.getDay();
        let c = Mdate.getFullYear();
        
        let player = {
            name: `${fname.value} ${lname.value}`,
            country: country.value,
            date: `${a}-${b}-${c}`,
            score: parseInt(score.value)
        };
        
        playerList.push(player);
        updatedata();
        fname.value = "";
        lname.value = '';
        country.value = "";
        score.value = "";
    }
});

function updatedata() {
    container.style.display = playerList.length > 0 ? "block" : "none";
    container.innerHTML = '';
    
    playerList.sort((player1, player2) => player2.score - player1.score);
    
    playerList.forEach((item) => {
        let main = document.createElement("div");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");
        let div4 = document.createElement("div");
        let del = document.createElement("div");
        let inc = document.createElement("div");
        let dec = document.createElement("div");
        del.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"></path>
        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"></path>
    </svg>`;
        dec.innerText = "-5";
        inc.innerText = "+5";

        div4.appendChild(del);
        div4.appendChild(dec);
        div4.appendChild(inc);
        main.appendChild(div1);
        main.appendChild(div2);
        main.appendChild(div3);
        main.appendChild(div4);
        
        div1.innerText = `${item.name} \n ${item.date}`;
        div2.innerText = item.country;
        div3.innerText = item.score;

        del.addEventListener('click', function() {
            const index = playerList.indexOf(item);
            if (index !== -1) {
                playerList.splice(index, 1);
            }
            updatedata();
        });

        dec.addEventListener('click', function() {
            item.score -= 5;
            if (item.score > 0) {
                div3.innerText = item.score;
                updatedata();
            } else {
                alert("You can't select a negative score");
            }
        });

        inc.addEventListener('click', function() {
            item.score += 5;
            div3.innerText = item.score;
            updatedata();
        });

        container.appendChild(main);
    });
}