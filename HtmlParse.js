The motivation of this question is to implement something like the Chrome findbar (the one you get when you press Ctrl-F), which allows the user find and highlight a string of text in a webpage.

Consider the following HTML:

<span><b>This</b> is <i>fun</i></span>

Which forms the following DOM tree:

           1<span>
       /      |       \
   2<b>     " is "   3<i>
     |        5        |
   "This"            "fun"
     4                 6

So searching for

"hi" -> node 4
"his is" -> nodes 4 and 5
"is fun" -> 5 and 6
"is" -> only node 4 - we’ll return just the first set of nodes that contain our string.

["aaaaa", "aab"] - does "aaaab" begin in the first node?
  
  "aaa a aaab"
  
ysagyuagdfuyads uisahiuygsadyugas uigysdagyuasdg uigiuysgyuasasdyufsadduy
y s a gyu b 
 
let auxVariable = {
  "text": "aaaaa"
  "number": 4
};

let wholeStringStructure = {
  "string": "This is fun",
  "nodes": [4 ,5, 6] 
};

matchText(whileString,"his fun");


public interface Node {
  @Nullable String getText();
  Node[] getChildren();
  @Nullable Node getParent();
  boolean isText();
}

So the function we’ll write is:

public List<Node> findText(Node head, String search) {
  // Candidate code goes here
}

let node = {
  "text": "hi",
  "children": [],
  "parent": node,
  "isText": true  
};

function findText(head, searchString) {
  let nodes = [];
  
  let hasSubtext = isSearchStringInHtml(head, searchString);  
  
  
  return nodes;
}

function isSearchStringInHtml(head, searchString) {

  let wholeStringStructure = {
    "string": "",
    "nodes": []
  };
  
  let nodeQueue = [head];
  
  while(nodeQueue.length > 0) {
     let node = nodeQueue.shift();
    
    for(let i = 0; i < node.children.length; i++) {
        nodeQueue.unshift(node.children[i]);
    }
    
    if(node.isText === true) {
      wholeStringStructure.string += node.text; 
      wholeStringStructure.nodes[node];
    }    
  }
  
  if(wholeStringStructure.string.isSubstring(searchString)) {
    let size = wholeStringStructure.length; // 10
    let startIndex = whereItStarts(wholeStringStructure, searchString); // 5
    let endIndex = whereItEnds(wholeStringStructure,searchString);
   
    let matchingNodes = [];
    
    let count = 0;
    for(let i = 0; i < wholeStringStructure.nodes.length; i++) {
        let nodeLength = wholeStringStructure.nodes[i].text.length;
        // This
        count += nodeLength;        
        if(startIndex < count) {
           matchingNodes.push(wholeStringStructure.nodes[i]);
        }
    }
    
    
  }
  else {
    return [];
  } 

}


["aaaaa", "aab"] - does "aaaab" begin in the first node?
  
function findSubstringStartEnd() {
  
}