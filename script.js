
document.addEventListener('DOMContentLoaded', function () {
    // side bar 

    const menuOpen = document.querySelector('#menu-open');
    const menuClose = document.querySelector('#menu-close');
    const sidebar = document.querySelector('.sidebar');
    const logoName = document.querySelector('.logo-name');
    const logoImg = document.querySelector('.logo img');
    menuOpen.addEventListener('click', () => {
        sidebar.classList.add('show-sidebar');
        menuOpen.style.opacity = '6';
        logoImg.classList.add('box-shadow');
        logoName.classList.add('text-shadow');
    })
    menuClose.addEventListener('click', () => {
        menuOpen.style.opacity = '1';
        sidebar.classList.remove('show-sidebar');
        menuOpen.style.display = 'block';
        logoImg.classList.remove('box-shadow');
        logoName.classList.remove('text-shadow');
    });
    document.addEventListener('click', function (event) {
        const isClickInside = sidebar.contains(event.target) || menuOpen.contains(event.target);
        if (!isClickInside) {
            sidebar.classList.remove('show-sidebar');
        }
    })
    //              scripte for section 2
    const data = [
        {
            "id": 1,
            "title": "$1Bn+",
            "buttonContent": "Cumulative Trading volume",
            "buttonColor": "#F6FB79"
        },
        {
            "id": 2,
            "title": "$30Bn",
            "buttonContent": "Total Aggregated liquidity",
            "buttonColor": "#95FF9F"
        },
        {
            "id": 3,
            "title": "2M+",
            "buttonContent": "Total Number of Trades",
            "buttonColor": "#F883C9"
        },
        {
            "id": 4,
            "title": "55",
            "buttonContent": "No. of supported chains",
            "buttonColor": "#987BFF"
        }

    ];
    const button = document.querySelector('.highlighted-item')
    const h1Title = document.querySelector('.stats-container-title');
    const btnContent = document.querySelector('.btn-content');
    const btnTitle = document.querySelector('.btn-title');
    let char = 0;

    let timer = setInterval(onTick, 4100);

    function onTick() {
        const statsItemLinks = document.querySelectorAll('.stats-item-link');
        statsItemLinks[char].classList.add('active');
        let index = char + 1;
        setTimeout(() => {
            if (index === data.length) {
                index = 0;
            }
            h1Title.textContent = data[index].title;
            btnTitle.textContent = data[index].title;
            btnContent.textContent = data[index].buttonContent;
            button.style.backgroundColor = data[index].buttonColor;
            btnTitle.style.color = data[index].buttonColor;
            statsItemLinks[char].classList.remove('active');
            char++;
            if (char === statsItemLinks.length) {
                char = 0;
            }
        }, 4000)
    }

})

