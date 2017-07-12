Package.describe({
    name: 'sewdn:global-notifications',
    summary: 'Simple global toaster notifications',
    version: '0.3.2',
    git: 'http://github.com/Sewdn/meteor-global-notifications'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2');

    api.use('templating', 'client');
    api.use('less', 'client');
    api.use('random', 'client');
    api.use('underscore', 'client');
    api.use('reactive-var', 'client');
    api.use('velocityjs:velocityjs@1.2.1', 'client');
    api.export(['GlobalNotification','GlobalNotifications']);

    api.addFiles('notifications.html', 'client');
    api.addFiles('notifications.less', 'client');
    api.addFiles('notifications.js', 'client');
});

Package.onTest(function(api) {
    // api.use('tinytest');
    // api.use('notifications');
    // api.addFiles('notifications-tests.js');
});
