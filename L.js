// takes a HTML-tag string,
// an optional object with element attributes
// and optional children elements
// a new HTML-element is made with the tag
// if there is an object apply its attributes to the element
// append each given child to the element
// return the element.
function l(tagOrElement="DIV", attributes, ...children){
    let element;
    if (typeof tag === 'object')element = tag;
    else element =  document.createElement(tag);
    if (attributes)
        attribute(element, attributes)
    if (children)
        append(element, ...children)
    return element;
}
// applies all attributes in an object to a HTML-element
function attribute(element=document.body, attributes={}){
    for (let name in attributes) element.setAttribute(name, attributes[name]);
    Object.assign(element, attributes);
}
// appends a list of children to a HTML-element
function append(element=document.body, ...children){
    for (let i = 0; i < children.length; i++){
        element.appendChild(children[i]);
    }
}
// short for querySelectorAll
function q(str){return document.querySelectorAll(str);}

// fills in any undefined attributes of an object with those of a standard object;
function o(object, stdObject){
    if (!object )object = {};
    for (let i in stdObject){
        if (object[i] === undefined)object[i] = stdObject[i];
    }
    return object;
}