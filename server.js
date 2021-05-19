const express = require('express');
var Keycloak = require('keycloak-connect');

var keycloak = new Keycloak({scope: 'offline_access'});

const app = express();
app.use(keycloak.middleware());

app.get('/', keycloak.protect(), (req, res) => {
    res.send('Your id is ' + req.kauth.grant.access_token.content.sub);
});

app.listen(8080, '0.0.0.0');
