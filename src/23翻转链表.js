    var reverseList = function (head) {
        if (!head) {
            return null
        } else if ( head.next === null){
            return head
        }
        let p = head
        let before = head.next
        let later = head.next.next
        while (later) {
            before.next = p
            p = before
            before = later
            later = later.next
        }

        head = null
        return before

    };