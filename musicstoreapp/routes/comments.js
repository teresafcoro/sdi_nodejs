const {ObjectId} = require("mongodb");
module.exports = function (app, commentsRepository) {
    app.post('/comments/:song_id', function (req, res) {
        // Recibe los datos del formulario (añadir un comentario a la canción)
        let comment = {
            author: req.session.user,
            text: req.body.text,
            song_id: ObjectId(req.params.song_id)
        }
        commentsRepository.insertComment(comment).then(commentId => {
            res.send("Commentario añadido " + commentId);
        }).catch(error => {
            res.send("Error, no se encuentra ningún usuario en sesión");
        });
    });
}