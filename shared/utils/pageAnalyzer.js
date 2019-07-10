(function() {
    const hostname = window.location.hostname;
    const domain = hostname.replace('www.', '').replace('.com', '');
    const analyzer = require(`./analyzers/${domain}`);

    // init processing
    analyzer.process();
})();
