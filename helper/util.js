module.exports = {
    joiErrorMessage(error) {
        if (error && error.details && error.details.length) {
            return error.details.map((e) => e.message);
        }
        return null;
    }
}