module.exports = function (app) {
    app.get('/authors', function (req, res) {
        let authors = [{
            "name": "Tom Hamilton",
            "group": "Hard rock Aerosmith",
            "rol": "Bajista"
        }, {
            "name": "Travis Barker",
            "group": "Blink-182",
            "rol": "Batería"
        }, {
            "name": "Kurt Cobain",
            "group": "Nirvana",
            "rol": "Cantante"
        }];

        let response = {
            seller: 'Lista de autores',
            authors: authors
        };
        res.render("authors/authors.twig", response);
    });

    app.get('/authors/add', function (req, res) {
        let roles = [
            {
                "rol": "Cantante",
            }, {
                "rol": "Guitarrista",
            }, {
                "rol": "Pianista",
            }, {
                "rol": "Bajista",
            }, {
                "rol": "Bateria",
            }];
        let response = {
            seller: "Lista de roles",
            roles: roles
        };
        res.render("authors/add.twig", response);
    });

    app.post('/authors/add', function (req, res) {
        let mensajeError = "No enviado en la petición";

        let response = "Autor agregado: ";
        if (!req.body.name)
            response += mensajeError;
        else
            response += req.body.name;

        response += "<br> Grupo: ";
        if (!req.body.group)
            response += mensajeError;
        else
            response += req.body.group;

        response += "<br>" + "Rol: " + req.body.rol; // Al ser opciones no puede estar vacío

        res.send(response);
    });

    app.get('/authors/*', function (req, res) {
        res.redirect("/authors");
    });
};