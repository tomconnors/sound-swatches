// Generated by CoffeeScript 1.4.0
(function() {

  exports.index = function(req, res) {
    var locals;
    locals = {
      title: 'Sound Swatches',
      options: {
        0: 'Major Scale',
        1: 'Minor Scale'
      }
    };
    return res.render('index', locals, function(err, html) {
      return res.send(html);
    });
  };

}).call(this);
