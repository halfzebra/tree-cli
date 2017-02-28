var treeify = require('treeify');
var dirTree = require('directory-tree');
var path = require('path');


console.log(dirTree(path.resolve('./tests/data')));
console.log(treeify.asTree(dirTree(path.resolve('./tests/data'))));

function dirTreeToTreeifyable(node) {

    var children = node.children;
    var length;

    if (typeof children !== 'undefined') {
        length = children.length;

        traverse(node)
    }

    return
}
