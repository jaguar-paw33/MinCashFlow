let questionBox = document.getElementById("question");
let answerBox = document.getElementById("answer");
let newProblem = $("#new-problem");
let solveProblem = $("#solve-problem");
let curData;
const options = {
  edges: {
    arrows: {
      to: true,
    },
    labelHighlightBold: false,
    font: {
      face: "sans-serif",
      size: 20,
      multi: "false",
      strokeWidth: 0,
      color: "white",
    },
    color: "cyan",
  },
  nodes: {
    font: "15px sans-serif yellow",
    scaling: {
      label: true,
    },
    shape: "icon",
    icon: {
      face: "FontAwesome",
      code: "\uf183",
      size: 30,
      color: "yellowgreen",
    },
  },
};

let questionGraph = new vis.Network(questionBox);

let data = createData();
curData = data;
let nodes = new vis.DataSet(data.nodes);
let edges = new vis.DataSet(data.edges);
questionGraph.setData(data);

questionGraph.setOptions(options);

newProblem.click(() => {
  data = createData();
  curData = data;
  let nodes = new vis.DataSet(data.nodes);
  let edges = new vis.DataSet(data.edges);
  questionGraph.setData(data);
  $("#answer").css("display", "none");
  $("#answer").css("display", "block");
  $("#answer").text("Click on Solve to get the Solution!!");
  $("#answer").css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1em",
    fontFamily: "sans-serif",
    color: "lime",
  });
});

solveProblem.click(() => {
  let answerGraph = new vis.Network(answerBox);
  answerGraph.setOptions(options);
  let solvedData = solveData(curData);
  $("#answer").css("display", "flex");
  answerGraph.setData(solvedData);
});

$("#info").click(() => {
  $("#info-box").css({
    display: "block",
    flexDirection: "column",
    alignItems: "flex-end",
  });
});

$("#exit span").click(() => {
  $("#info-box").css({
    display: "none",
  });
});
