// A JavaScript algorithm for constructing a transitive closure of a graph

const warshall = (V, E) => {
    let edges = E.length;
    let matrix = new Array(edges);
    for (let i = 0; i < edges; i++) {
        let row = new Array(2);
        row[0] = E[i][0];
        row[1] = E[i][1];
        matrix[i] = row;
    }
    let vertices = V.length;
    for (const z of V) {
        for (const x of V) {
            for (const y of V) {
                if (edgeExists(matrix, x, z) && edgeExists(matrix, z, y) && !edgeExists(matrix, x, y)) {
                    matrix.push([x, y]);
                }
            }
        }
    }
    return matrix;
}
const edgeExists = (E, from, to) => {
    return Array.prototype.some.call(
        E,
        ([u, v]) => u === from && v === to
    )
}
const logEdges = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log("arr[i]: ", arr[i])
    }
}

// Example graph
V = new Array(6);
for (let i = 0; i < V.length; i++) {
    V[i] = i + 1;
}
E = new Array(6);
E[0] = [1, 6];
E[1] = [6, 1];
E[2] = [6, 2];
E[3] = [2, 3];
E[4] = [5, 1];
E[5] = [4, 5];

const w = warshall(V, E);
logEdges(w);

