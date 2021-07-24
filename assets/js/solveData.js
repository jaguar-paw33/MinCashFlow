function solveData(data) {
  let size = data.nodes.length;
  let vals = Array(size).fill(0);

  data.edges.forEach((edge) => {
    vals[edge["from"] - 1] -= parseInt(edge["label"]);
    vals[edge["to"] - 1] += parseInt(edge["label"]);
  });
  let negHeap = new MaxHeap();
  let posHeap = new MaxHeap();
  for (let i = 0; i < vals.length; i++) {
    if (vals[i] < 0) negHeap.insert([-1 * vals[i], i + 1]);
    else posHeap.insert([vals[i], i + 1]);
  }

  let edges = [];
  while (!negHeap.empty() && !posHeap.empty()) {
    let n = negHeap.removeMax();
    let p = posHeap.removeMax();

    if (n[0] > p[0]) {
      let amt = n[0] - p[0];
      negHeap.insert([amt, n[1]]);
      edges.push({ from: n[1], to: p[1], label: String(p[0]) });
    } else if (n[0] < p[0]) {
      let amt = p[0] - n[0];
      posHeap.insert([amt, p[1]]);
      edges.push({ from: n[1], to: p[1], label: String(n[0]) });
    } else {
      edges.push({ from: n[1], to: p[1], label: String(p[0]) });
    }
  }
  const newData = {
    nodes: data.nodes,
    edges: edges,
  };

  return newData;
}
