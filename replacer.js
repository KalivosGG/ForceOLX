$("article.post ").each(function() {
    let list_id = $(this).children("input[name=list_id]").first().val();
    let package_first = $(this).find("div.col--disabled.col--package--first").first();
    package_first.removeClass("col--disabled");
    let package_pay  = package_first.find("p.package__pay").first();
    package_pay.find("span").each(function() {
        if ($(this).hasClass("text-label--no-button")) { //Busca pelo botão não clicável (R$ 0,00)
            $(this).replaceWith('<a class="btn btn--small btn--primary no-leave-page force-olx" href="/password_page/load_page/0?list_id=' + list_id + '&amp;type=PAID_RENEW" lurker="turbine_freerenew" data-lurker_list-id="' + list_id + '"><span class="text-label">Renovar</span></a>');
        }
    })
});


