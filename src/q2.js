/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
    let current = new ListNode(0);
    let resultHead = current;
    let sum = 0;
    while (l1 || l2) {
        sum += (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
        current.next = new ListNode(sum % 10);
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
        current = current.next;
        sum = (sum > 9) ? 1 : 0;
    }
    if (sum) {
        current.next = new ListNode(sum);
    }
    return resultHead.next;
};

/** Test
 *
 * @param {ListNode} list1
 * @param {ListNode} list2
 */
let list1 = new ListNode(2, new ListNode(4, new ListNode(3, new ListNode(1))));
const list2 = new ListNode(5, new ListNode(6, new ListNode(4)));
// while (list1.next !== null) {
//     console.log("element: ", list1.val)
//     list1 = list1.next;
// }
// console.log("element: ", list1.val)
const result = addTwoNumbers(list1, list2);
console.log('result', result);