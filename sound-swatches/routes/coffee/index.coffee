
# get home page
exports.index = (req, res) ->
  locals = 
    title: 'Sound Swatches'
    options: 
      0: 'Major Scale'
      1: 'Minor Scale'
  
  res.render 'index', locals, (err,html) ->
    res.send html

