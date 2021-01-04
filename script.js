$(function(){
    const menuNav = function () {
        $menu = $(`.menu`);
        $headerLinks = $(`.headerLinks`);

        $menu.on(`click`, function () {
            $headerLinks.toggleClass(`navActive`);
        })
    }

    menuNav();
})
