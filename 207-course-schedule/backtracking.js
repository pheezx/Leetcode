
function buildGraph(prerequisites) {
  const graph = {}
  for(let prereq of prerequisites) {
      for(let course of prereq) {
          if(!graph[course]) {
              graph[course] = []
          }
      }
      graph[prereq[1]].push(prereq[0])
  }
  return graph
}

function hasCycle(graph, path, done, course) {
  if(path[course]) {
      return true
  }
  if(done[course]) {
      return false
  }
  path[course] = true
  done[course] = true
  for(let next of graph[course]) {
      if(hasCycle(graph, path, done, next)) {
          return true
      }
  }
  path[course] = false
  return false
}

var canFinish = function(numCourses, prerequisites) {
  const graph = buildGraph(prerequisites)
  const done = new Set()
  const path = new Set()
  for(let course of Object.keys(graph)) {
      if(!done.has(course) && hasCycle(graph, path, done, course)) {
          return false
      }
  }
  return true
};