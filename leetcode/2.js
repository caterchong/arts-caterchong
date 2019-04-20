function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var start = new ListNode((l1.val + l2.val) % 10);
    var carry = l1.val + l2.val >= 10 ? 1 : 0;
    var currNode = start
    l1 = l1.next;
    l2 = l2.next;

    while (l1 || l2 || carry) {
        var currResult = carry
        if (l1) {
            currResult += l1.val;
        }
        if (l2) {
            currResult += l2.val;
        }
        carry = currResult >= 10 ? 1 : 0;
        var newNode = new ListNode(currResult % 10)
        currNode.next = newNode
        currNode = newNode

        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    };
    return start;
};

var a = new ListNode(1)
var b = new ListNode(9)
a.next = b
var ans = addTwoNumbers(a, b)
console.log(ans)
