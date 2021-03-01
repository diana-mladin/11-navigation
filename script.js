document.addEventListener("DOMContentLoaded", function (event) {
    const menuItems = document.getElementsByClassName("menu-item");
    console.log('menuItems', menuItems);

    const orderContainer = document.getElementsByClassName("order-container");
    console.log('orderContainer :  ', orderContainer);

    const logoBoundaryWrapper = document.getElementsByClassName("logo-boundary-wrapper");
    console.log('logoBoundaryWrapper', logoBoundaryWrapper);

    const navbarContentWrapper = document.getElementsByClassName("navbar-content-wrapper");
    console.log('navbarContentWrapper', navbarContentWrapper);

    for (let i = 0; i < menuItems.length; i++) {
        const menuItem = menuItems[i];

        menuItem.addEventListener('click', function () {
            if (!orderContainer[0].classList.contains('hidden')) {
                orderContainer[0].classList.add('hidden');
            }

            for (let j = 0; j < menuItems.length; j++) {
                if (menuItems[j].classList.contains('selected')) {
                    menuItems[j].classList.remove("selected");
                } else {
                    continue;
                }
            }
            menuItem.classList.add("selected");

            const dataContent = menuItem.dataset.content;
            console.log('dataContent', dataContent);
            const contentElements = document.getElementsByClassName("content");
            for (let k = 0; k < contentElements.length; k++) {
                if (contentElements[k].classList.contains('hidden')) {
                    continue;
                } else {
                    contentElements[k].classList.add("hidden");
                }
            }
            document.getElementsByClassName(dataContent)[0].classList.remove("hidden");

            const dataLogo = menuItem.dataset.logo;
            console.log('dataLogo', dataLogo);
            const logoElements = document.getElementsByClassName("logo");
            for (let l = 0; l < logoElements.length; l++) {
                if (logoElements[l].classList.contains('hidden')) {
                    continue;
                } else {
                    logoElements[l].classList.add("hidden");
                }
            }
            document.getElementsByClassName(dataLogo)[0].classList.remove("hidden");

            if (logoBoundaryWrapper[0].classList.contains('hidden')) {
                logoBoundaryWrapper[0].classList.remove("hidden");
            }

            for (let m = 1; m < menuItems.length; m++) {
                const navbar = menuItems[m];
                if (navbarContentWrapper[0].classList.contains('hidden')) {
                    navbarContentWrapper[0].classList.remove("hidden");
                }
            }
        });
        menuItems[0].addEventListener('click', function () {
            logoBoundaryWrapper[0].classList.add("hidden");

            navbarContentWrapper[0].classList.add("hidden");
        });
    }
    const orderDetails = document.getElementsByClassName("order-details");
    console.log('orderDetails', orderDetails);
    orderDetails[0].addEventListener('click', function () {
        orderContainer[0].classList.remove('hidden');

        const yourOrders = document.getElementsByClassName("orders-container");
        console.log('yourOrders :  ', yourOrders)
        yourOrders[0].classList.add('hidden');

        logoBoundaryWrapper[0].classList.remove("hidden");

        navbarContentWrapper[0].classList.remove("hidden");
    });
});