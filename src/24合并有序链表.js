   //方法一   递归
   // var mergeTwoLists = function (l1, l2) {
   //     if (!l1 && !l2) return null
   //     if (!l1) return l2
   //     if (!l2) return l1
   //     let head = new ListNode
   //     if (l1.val <= l2.val) {
   //         head = l1
   //         head.next = mergeTwoLists(l1.next, l2)
   //     } else {
   //         head = l2
   //         head.next = mergeTwoLists(l1, l2.next)
   //     }
   //     return head 
   // };

   //方法2  迭代
   var mergeTwoLists = function (l1, l2) {
       if (!l1 && !l2) return null
       if (!l1) return l2
       if (!l2) return l1
       let head = new ListNode
       let p1 = l1
       let p2 = l2
       let tail = head
       do {
           if (p1.val <= p2.val) {
               tail.next = p1
               p1 = p1.next
           } else {
               tail.next = p2
               p2 = p2.next
           }
           tail = tail.next

       } while (p1 && p2)

       tail.next = p1 === null ? p2 : p1
       return head.next
   };