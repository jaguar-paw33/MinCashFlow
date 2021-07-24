function createData() {
  let sz = Math.floor(Math.random() * 8 + 2);
  let nodes = [];
  let edges = [];
  for (let i = 0; i < sz; i++) {
    nodes.push({ id: i + 1, label: "P" + String(i + 1) });
  }

  for (let i = 0; i < sz; i++) {
    for (let j = i + 1; j < sz; j++) {
      if (Math.random() > 0.5) {
        if (Math.random() > 0.7) {
          edges.push({
            from: String(i + 1),
            to: String(j + 1),
            label: String(Math.floor(Math.random() * 100) + 1),
          });
        } else {
          edges.push({
            from: String(j + 1),
            to: String(i + 1),
            label: String(Math.floor(Math.random() * 100) + 1),
          });
        }
      }
    }
  }
  const data = {
    nodes: nodes,
    edges: edges,
  };
  return data;
}
