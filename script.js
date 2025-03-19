// Espera o carregamento completo do DOM para iniciar a execução do script
document.addEventListener('DOMContentLoaded', function () {

    // Habilita rolagem suave para toda a página ao clicar em links do menu
    function enableSmoothScroll() {
        const links = document.querySelectorAll("nav ul li a");
        links.forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 20,
                        behavior: "smooth"
                    });
                }
            });
        });
    }

    // Chama as funções para iniciar as animações
    enableSmoothScroll();
});
