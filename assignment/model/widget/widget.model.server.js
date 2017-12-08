var mongoose = require('mongoose');
var WidgetSchema = require('./widget.schema.server');

var WidgetModel = mongoose.model('WidgetModel', WidgetSchema);

WidgetModel.findWidgetById = findWidgetById;
WidgetModel.createWidget = createWidget;
WidgetModel.findWidgetsByPageId = findWidgetsByPageId;
WidgetModel.deleteWidget = deleteWidget;
WidgetModel.updateWidget = updateWidget;
WidgetModel.reorderWidgets = reorderWidgets;

module.exports = WidgetModel;

function createWidget(pageId,widget)
{
  widget._page = pageId;
  return WidgetModel.create(widget);
}

function findWidgetsByPageId(pageId)
{
  return WidgetModel.find({_page: pageId});
}

function findWidgetById(id)
{
  return WidgetModel.findOne({_id: id});
}

function updateWidget(id,widget)
{
  return WidgetModel.update({_id: id}, widget);
}
function deleteWidget(id, widget)
{
  return WidgetModel.remove({_id: id}, widget);
}

function reorderWidgets(pageId, startIndex, endIndex) {
  return WidgetModel.find({_page:pageId}, function (err,widgets) {
    widgets.forEach (function (widget) {
      if(startIndex < endIndex){
        if(widget.position === startIndex){
          widget.position = endIndex;
          widget.save();
        }else if (widget.position > startIndex
          && widget.position <= endIndex){
          widget.position --;
          widget.save();
        }else {
          if(widget.position === startIndex){
            widget.position = endIndex;
            widget.save();
          } else if(widget.position < startIndex
            && widget.position >= endIndex){
            widget.position ++;
            widget.save();
          }
        }
      }
    })
  })
}
