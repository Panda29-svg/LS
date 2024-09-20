!function() {
    "use strict";
    var e = function() {
        return function() {
            try {
                if (window.top.location.href) return !0;
            } catch (e) {
                return !1;
            }
        }() ? window.top : window.self;
    };
    !function() {
        if (!e().navigator.userAgent.match(/(MSIE|Trident)/)) {
            try {
                !function() {
                    var t = e();
                    // Definindo o estado como já carregado
                    t.ADAGIO = t.ADAGIO || {};
                    t.ADAGIO.cleanAdIsLoading = !1; // O script já não está sendo carregado
                    t.ADAGIO.cleanAdIsLoaded = !0;  // O script já está carregado
                    console.log("Anúncio já foi carregado.");
                }()
            } catch (e) {
                console.error(e);
            }
            // Armazenando adagioScript no localStorage para simular que já foi executado
            var scriptContent = "console.log('adagioScript já executado');"; // Simulação do conteúdo
            var n = e();
            n.localStorage.setItem("adagioScript", scriptContent); // Salva o script no localStorage

            // Checagem e execução simulada
            if (!n.localStorage.getItem("adagioScript")) {
                n.ADAGIO.late = !0;
                console.log("Executando adagioScript...");
                Function(scriptContent)();
            } else {
                console.log("adagioScript já está no localStorage, não precisa executar novamente.");
            }
        }
    }()
}();