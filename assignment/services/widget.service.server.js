module.exports = function (app) {

  var multer = require('multer'); // npm install multer --save
  var upload = multer({ dest: __dirname+ '/../../src/assets/uploads' });

  var WidgetModel = require('../model/widget/widget.model.server');

  app.post ("/api/upload", upload.single('myFile'), uploadImage);
  app.get('/api/page/:pageId/widget', findWidgetsByPageId);
  app.post('/api/page/:pageId/widget', createWidget);
  app.get('/api/widget/:widgetId', findWidgetById);
  app.delete('/api/widget/:widgetId', deleteWidget);
  app.put('/api/widget/:widgetId', updateWidget);

  // var allWidgets = [
  //   { '_id': '123', 'widgetType': 'HEADING', 'pageId': '890', 'size': 2, 'text': 'GIZMODO'},
  //   { '_id': '234', 'widgetType': 'HEADING', 'pageId': '890', 'size': 4, 'text': 'Lorem ipsum'},
  //   { '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
  //     'url': 'http://lorempixel.com/400/200/'},
  //   { '_id': '456', 'widgetType': 'HTML', 'pageId': '890', 'text': '<p>Lorem ipsum</p>'},
  //   { '_id': '567', 'widgetType': 'HEADING', 'pageId': '322', 'size': 4, 'text': 'Lorem ipsum'},
  //   { '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '891', 'width': '100%',
  //     'url': 'https://www.youtube.com/embed/AM2Ivdi9c4E' },
  //   { '_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'},
  //   { '_id': '456', 'widgetType': 'HTML', 'pageId': '322', 'text': '<p>Lorem ipsum</p>'},
  //   { '_id': '567', 'widgetType': 'HEADING', 'pageId': '322', 'size': 4, 'text': 'Lorem ipsum'},
  //   { '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
  //     'url': 'https://www.youtube.com/embed/AM2Ivdi9c4E' }
  // ];

  function uploadImage(req, res) {

    var widgetId      = req.body.widgetId;
    var width         = req.body.width;
    var myFile        = req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    widget = getWidgetById(widgetId);
    widget.url = 'assets/uploads/'+filename;
    widget.width = width;

    var callbackUrl   = "/assignment/#/user/"+userId+"/website/"+websiteId+ '/page' + pageId + '/widget';

    res.redirect(callbackUrl);
  }

  function createWidget(req,res)
  {
    var pageId = req.params['pageId'];
    var widget = req.body;
    console.log(pageId);
    WidgetModel.createWidget(pageId, widget)
      .then(function (widget) {
        res.json(widget);
      })
  }

  function findWidgetsByPageId(req,res)
  {
    var pageId = req.params['pageId'];
    WidgetModel.findWidgetsByPageId(pageId)
      .then(function (widgets) {
        res.json(widgets);
      })
  }

  function findWidgetById(req,res)
  {
    var widgetId = req.params['widgetId'];
    WidgetModel.findWidgetById(widgetId)
      .then(function (widget) {
        res.json(widget);
      })
  }

  function updateWidget(req,res)
  {
    var widgetId = req.params['widgetId'];
    var widget = req.body;
    WidgetModel.updateWidget(widgetId, widget)
      .then(function (status) {
        return WidgetModel.findWidgetsByPageId(widget.pageId);
      })
      .then(function (widgets){
        res.json(widgets);
        return;
      }
      );
  }
  function deleteWidget(req,res)
  {
    var widgetId = req.params['widgetId'];
    WidgetModel.deleteWidget(widgetId)
      .then(function (status) {
        res.json(status);
      })
  }
};
