$(function () {
    const orderContainer = $(".order-container");
    console.log('orderContainer', orderContainer);

    const logoBoundaryWrapper = $(".logo-boundary-wrapper");
    console.log('logoBoundaryWrapper', logoBoundaryWrapper);

    const menuItem = $('ul').find('a');

    const newNavbar = $('.fade-in-wrapper');

    menuItem.click(function (e) {
        console.log($(this).data('content'));

        orderContainer.addClass('hidden');

        menuItem.removeClass('selected');
        $(this).addClass('selected');

        const contentElements = $('.content');
        contentElements.addClass('hidden');
        $(`.${$(this).data('content')}`).removeClass('hidden');

        const logoElements = $('.logo');
        logoElements.addClass('hidden');
        $(`.${$(this).data('logo')}`).removeClass('hidden');

        logoBoundaryWrapper.removeClass("hidden");
        logoBoundaryWrapper.fadeIn('slow');

        newNavbar.removeClass('hidden');
        newNavbar.fadeIn('slow');
    });
    $('.menu-item.selected').click(function () {
        logoBoundaryWrapper.hide();
        newNavbar.hide();
    });
    const orderDetails = $(".order-details");
    orderDetails.click(function () {
        console.log($(this).data('order'));

        orderContainer.removeClass('hidden');

        const yourOrders = $(".your-orders-container");
        yourOrders.addClass('hidden');

        logoBoundaryWrapper.removeClass('hidden');
        logoBoundaryWrapper.fadeIn('slow');

        newNavbar.removeClass('hidden');
        newNavbar.fadeIn('slow');
    });
});