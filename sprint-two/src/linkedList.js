var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);

    if(this.head === null){
      this.tail = newNode;
      this.head = newNode;
    }
    else{
      this.tail.next = newNode
      this.tail = newNode
    }

  };

  list.removeHead = function(){
    var result = this.head

    if (this.head.next === null){
      // this.head = this.head.next;
      delete this.head;
    }
    else{
      delete this.head;
      this.head = result.next;
    }


    return result.value;
  };

  list.contains = function(target){
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
