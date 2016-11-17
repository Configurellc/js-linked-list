/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  var head = null;

  function getHead(){
    return head;

  }

  function getTail () {
    var currentNode = head;

    while (currentNode !== null) {

      if(currentNode.next !== null){
        currentNode = currentNode.next;

      }else{

        return currentNode;

      }
    }
    return currentNode;

  }

  function add (addValue) {
    var myTail = getTail();
    var newNode = {
      value: addValue,
      next: null
    }

    return newNode;

  }

  function remove() {

  }

  function get () {

  }

  function insert () {

  }

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert
  };

}


let ll = linkedListGenerator();
console.log(ll);