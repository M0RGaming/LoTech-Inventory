function makeNewElementFromElement( tag, elem ) {

    var newElem = document.createElement(tag),
        i, prop,
        attr = elem.attributes,
        attrLen = attr.length;

    // Copy children 
    elem = elem.cloneNode(true);
    while (elem.firstChild) {
        newElem.appendChild(elem.firstChild);
    }

    // Copy DOM properties
    for (i in elem) {
        try {
            prop = elem[i];
            if (prop && i !== 'outerHTML' && (typeof prop === 'string' || typeof prop === 'number')) {
                newElem[i] = elem[i];
            }
        } catch(e) { /* some props throw getter errors */ }
    }

    // Copy attributes
    for (i = 0; i < attrLen; i++) {
        newElem.setAttribute(attr[i].nodeName, attr[i].nodeValue);
    }

    // Copy inline CSS
    newElem.style.cssText = elem.style.cssText;

    return newElem;
}