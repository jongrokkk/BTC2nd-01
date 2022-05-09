module.exports = {
    host : ''
    user : '',
    password : '',
    database : '',

    multipleStatements: true,
    typeCast: function (field, next) {
        if (field.type == 'VAR_STRING') {
            return field.string();
        }
        return next();
    }
}