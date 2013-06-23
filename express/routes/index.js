
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
      title: 'Express',
      items:[
          {
              id:1,
              title:"Initial Post",
              time:{year:2013,month:4,day:9},
              parent:0,
              content:"<p>While HTML5 has a bunch of semantic elements, including new ones like &lt;article&gt; and &lt;nav&gt;, sometimes there just isn’t an element with the right meaning. What we want are ways to extend what we’ve got, to add extra semantics that are machine-readable — data that a browser, script, or robot can use.</p>"
          }
      ]
  });
};