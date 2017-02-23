// our test object
var customObject = {
  name:'California, Eureka',
  onClick:function(){
    console.log("I've been clicked");
    console.log(this.name);
  }
};
// our behavior on click.
$('button').click(customObject.onClick);
