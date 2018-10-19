var MjpegProxy = require('mjpeg-proxy').MjpegProxy;
var express = require('express');
var app = express();
var mjpegurl = process.env.MJPEG_URL;

app.get('/index.jpg', new MjpegProxy(mjpegurl).proxyRequest);
app.listen(process.env.MJPEG_PORT);
