var canFinish = function(numCourses, prerequisites) {
  const graph = {}
  for(let prereq of prerequisites) {
      for(let course of prereq) {
          if(!graph[course]) {
              graph[course] = { next: [], indeg: 0}
          }
      }
      graph[prereq[1]].next.push(prereq[0])
      graph[prereq[0]].indeg += 1
  }
  
  let removedEdges = 0
  const queue = []
  for(let course of Object.keys(graph)) {
      if(graph[course].indeg === 0) queue.push(course)
  }
  while(queue.length > 0) {
      const course = queue.shift()
      for(let nextCourse of graph[course].next) {
          graph[nextCourse].indeg -= 1
          removedEdges += 1
          if(graph[nextCourse].indeg === 0) queue.push(nextCourse)
      }
  }
  return removedEdges === prerequisites.length
};