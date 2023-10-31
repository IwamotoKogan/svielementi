if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", (user) => {
                    if (!user) {
                        window.netlifyIdentity.on("login", () => {
                            document.location.href = "/admin/";
                        });
                    }
                });
            }

            $(function () {
                $('[data-toggle="tooltip"]').tooltip();
            });

            $(document).ready(function () {
                $("#sidebarCollapse").on("click", function () {
                    $("#sidebar").toggleClass("active");
                    $(this).toggleClass("active");
                });
                
            });


           

            

            $(function () {
                $('[data-toggle="popover"]').popover({
                    trigger: 'focus'
                })
            })