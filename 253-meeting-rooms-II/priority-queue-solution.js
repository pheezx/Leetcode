require("google-closure-library");

goog.require("goog.structs.PriorityQueue");

// function PriorityQueue() {
//   const data = [];
//   this.isEmpty = () => data.length === 0;
//   this.peek = () => data[0];
//   this.dequeue = () => {
//     const result = data.shift();
//     data.sort((a, b) => a - b);
//     return result;
//   };
//   this.enqueue = (value) => {
//     data.push(value);
//     data.sort((a, b) => a - b);
//   };
//   this.getCount = () => data.length;
//   this.isEmpty = () => data.length === 0
//   this.print = () => console.log(data);
// }

var minMeetingRooms = function (intervals) {
  if (intervals.length <= 1) return intervals.length;
  intervals.sort((a, b) => a[0] - b[0]);
  let res = 0;
  let queue = new PriorityQueue();
  for (interval of intervals) {
    // if the meeting is over, remove
    while (!queue.isEmpty() && queue.peek() <= interval[0]) queue.dequeue();
    queue.enqueue(interval[1]);
    res = Math.max(res, queue.getCount());
  }
  return res;
};

// console.log(
//   minMeetingRooms([
//     [0, 30],
//     [5, 20],
//     [10, 20],
//     [15, 20],
//     [20, 25],
//     [20, 30],
//   ])
// );

let queue = new goog.structs.PriorityQueue();
queue.enqueue(1,2)
console.log(queue.dequeue())
