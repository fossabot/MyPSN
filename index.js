const electron = require('electron');
const { app, BrowserWindow, globalShortcut } = electron;
let win;
app.on('ready', function() {
    win = new BrowserWindow({ frame: false, maximizable: true, minimizable: false });
    win.maximize();
    win.loadURL(__dirname + '/main.html');
    globalShortcut.register("CommandOrControl+Q", () => {
        win.close();
        app.quit();
    });
    win.webContents.on('did-finish-load', function() {
        win.webContents.insertCSS("body,html,footer,.footer-container .footer-navs-container,.tab-item,#sb .sb-friends,#sb .sb-request-dialog,.sb-request-dialog .sb-request-dialog--send-message,.sb-system-notifications-section__categories .ember-view,.trophy-info-modal,.trophy-info-modal__trophy-description,.trophy-info-modal__earned-text,#sb .sb-dropdown,#sb .sb-system-notifications-section__header,#sb .sb-icon--disabled-bold{background:#2d2d2d!important;background-color:#2d2d2d!important;color:#fff!important}h2,span,h1,.color-picked-button__label,#hawklet-trophies .game-tile__trophy-overview-container .trophy-count__tier,p,h5,.sb-user-tile__line1__content,h3,.sb-notification-detail__content-table-label{color:#fff!important}li{background:#2d2d2d!important}body::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3)!important;border-radius:10px!important;background-color:transparent!important}body::-webkit-scrollbar{width:12px!important;background-color:transparent!important}body::-webkit-scrollbar-thumb{border-radius:10px!important;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3)!important;background-color:#3f3e3e!important}.color-picked-button__label,.color-picked-button__label:hover{border:none!important;color:#fff!important}ul>li:hover{background:#2d2d2d!important;color:#fff!important}.trophy-group-tile .trophy-group-tile--is-selected .ember-view,#hawklet-trophies .trophy-tile:hover,#hawklet-trophies .trophy-group-tile:focus,#hawklet-trophies .trophy-group-tile:hover,#hawklet-trophies .trophy-group-tile--is-selected{background:#2d2d2d!important;color:#fff!important}.sb-icon--sticker,.sb-icon--attach,.sb-chat-messages__date-separator__text,.sb-chat-tile__timestamp,.sb-list-item__group-count{background:transparent!important;color:#0072CE!important}.sb-common-button__on-manage-account,._qa-go-to-edit-profile,._qa-go-to-privacy-settings,.profile-ctas__separator-container{display:none!important}._qa-send-message{background:#2d2d2d!important;border:1px solid #0072CE}.game-tile__container>img,.trophy-group-tile__image-container>img{background:#2d2d2d!important}");
     });
})