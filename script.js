$(function(){
    const menuNav = function () {
        $menu = $(`.menu`);
        $menuClick = $(`.menuClick`);
        $headerLinks = $(`.headerLinks`);

        $menu.on(`click`, function () {
            $headerLinks.toggleClass(`navActive`);

            if ((($headerLinks).hasClass(`navActive`)) === true) {
                $menuClick.text(`Click to Hide`);
            } else {
                $menuClick.text(`Click for Menu`);
            }
        })
    }

    menuNav();
})
