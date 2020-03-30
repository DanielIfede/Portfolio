/*var theListiteams = document.getElementById("site-header");

console.log("This is an element of type: ", theListiteams.nodeType );
console.log("The inner HTML is: ", theListiteams.innerHTML );
console.log("Child nodes value is: ", theListiteams.childNodes[0].nodeValue );
console.log(theListiteams.innerHTML);
console.log(theListiteams.nodeName);
console.log(document.documentElement);
console.log(document.body);
console.log("The parent node is:",theListiteams.parentNode);
console.log("The firstChild is",theListiteams.firstChild);
console.log("The nextSibling is",theListiteams.nextSibling.nodeValue);
console.log("The nextSibling.nodeType is",theListiteams.nextSibling.nodeType);
console.log("The NodeName is",theListiteams.nodeName);
console.log("The previousSibling is",theListiteams.previousSibling);//The nodeName of a text is always #text and that of the document node is always #document 
*/

var List = document.getElementsByTagName("li");
console.log(List.length);
console.log(List[0].childNodes);
console.log(List[0].nextSibling);
console.log(List[2].previousSibling.nodeType);
console.log(List[0].nextElementSibling);
console.log(List[2].parentNode);
console.log(List[2].lastChild.firstChild.nodeValue);
console.log(List[2].firstChild.nodeType);
console.log(List[2].innerHTML);
console.log("the firstChild is:",List[2].childNodes[0].innerHTML);
console.log(List[2].childNodes.length);
//console.log(List[2].firstChild.nodeValue);//the nodeValue of an element is undefined
console.log(window.innerHeight);


/*Adding and Removing nodes: Creating new HTML elements (Nodes)
var para = document.createElement("p");   //This code creates a new <p> element:
var node = document.createTextNode("This is new.");
para.appendChild(node);    //Then you must append the text node to the <p> element:

var element = document.getElementById("site-header");  //Finally you must append the new element to an existing element.

element.insertBefore(para, child);   */




//var thelist =  document.getElementsByTagName("li");
//console.log("List:", thelist.length);
//alert(document.body.innerHTML);
//alert(document.documentElement.innerHTML);

