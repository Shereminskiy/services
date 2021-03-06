/**
 * Created by alex on 06.10.15.
 */
module.exports.autoreload = {
    active: true,
    usePolling: true,
    dirs: [
        "api/models",
        "api/controllers",
        "api/services"
    ],
    ignored: [
        // Ignore all files with .ts extension
        "**.ts"
    ]
};
