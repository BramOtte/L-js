export {l, attribute, append, Q, q};
/**
 * @type {HTMLElement}
 * @param {String | HTMLElement} tagOrElement
 * @param {Object} attributes
 * @param {HTMLElement[]} children
* a new HTML-element is made with the tag
* if there is an object apply its attributes to the element
* append each given child to the element
*/
function l(tagOrElement="DIV", attributes, ...children){
    let element;
    if (typeof tagOrElement === 'object')element = tagOrElement;
    else element =  document.createElement(tagOrElement);
    if (attributes)
        attribute(element, attributes)
    if (children)
        append(element, ...children)
    return element;
}
l.document = window?.document;
l.setDocument = document=>{l.document = document;}


/** @type {void}
 *applies all attributes in an object to a HTML-element
 * */ 
function attribute(element=l.document.body, attributes={}){
    for (let name in attributes) element.setAttribute(name, attributes[name]);
    Object.assign(element, attributes);
}
/** @type {void}
 *  @param {HTMLElement} element
 *  @param {HTMLElement[]} children
 * appends a list of children to a HTML-element 
 * */
function append(element=l.document.body, ...children){
    for (let i = 0; i < children.length; i++){
        element.appendChild(children[i]);
    }
}
/** @type {NodeListOf<Any>}
 *  @param {string} query
 * short for querySelectorAll 
 * */
function Q(query){return l.document.querySelectorAll(query);}

/** @type {Node}
 *  @param {string} query
 * short for querySelector 
 * */
function q(query){return l.document.querySelector(query);}

/** fills in any undefined attributes of an object with those of a standard object; */ 
function o(object, stdObject){
    if (!object )object = {};
    for (let i in stdObject){
        if (object[i] === undefined)object[i] = stdObject[i];
    }
    return object;
}
