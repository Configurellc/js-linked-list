/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  var head = null;
  var tail = null

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
    };



    //if head is empty head is null
    //if head isnt empty but is tail ===next
    //if head isnt empty but is not == tail set next


    if(myTail === null) {

        head = newNode;

    } else {
      myTail.next = newNode;
    }
    // else if( head !== null && tail === null ) {

    //   return newNode;

    // }else if (head !== null && tail !== null ){

    //   return newNode.next;

    // }

  return head;



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