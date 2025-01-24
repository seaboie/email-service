// Compiled using learn-clasp 1.0.0 (TypeScript 4.9.5)
var CONFIG = {
    SET_FAVICON_URL: "https://raw.githubusercontent.com/seaboie/images/main/images/logo/logoTransparent.png",
    SET_TITLE: "Learn Clasp",
    ERROR: {
        ERROR_NOT_FOUND: ""
    },
    EMAIL: {
        EMAIL_RECIPIENT: ""
    },
    CALENDAR: {
        CALENDAR_ID: ""
    },
    TELEGRAM: {
        TELEGRAM_TOKEN: "",
        TELEGRAM_CHAT_ID: "",
        TELEGRAM_GROUP_ID: ""
    },
    LINE: {
        LINE_TOKEN: '',
        LINE_USER_ID: '',
        LINE_GROUP_ID: ''
    }
};
function onOpen() {
}
// Web app entry point
function doGet() {
    var htmlService = HtmlService.createTemplateFromFile('index');
    var html = htmlService.evaluate();
    html.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    html.addMetaTag("viewport", "width=device-width, initial-scale=1");
    html.addMetaTag("charset", "utf-8");
    html.setTitle(CONFIG.SET_TITLE);
    html.setFaviconUrl(CONFIG.SET_FAVICON_URL);
    return html;
}
// Function to include other HTML files
function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
