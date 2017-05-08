$(document).ready(function(){

    // Constructing the suggestion engine
    var all_genres = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: all_node_labels
    });

    // Initializing the typeahead
    $('.typeahead').typeahead({
            hint: true,
            highlight: true, /* Enable substring highlighting */
            minLength: 1 /* Specify minimum characters required for showing result */
        },
        {
            name: 'genre',
            source: all_genres
        });
});

function filter_net() {
    // get genre in form
    var genreValue = document.getElementById("genre-form").value;

    // get the id of the genre in form
    var genre_id = orig_nodes.filter(function (ggg) {
        return ggg.label == genreValue;
    });
    genre_id = genre_id[0].id;

    // filter edges to only include ones that have genre of interest
    temp_edges = orig_edges.filter(function (eee) {
        return eee.from == genre_id || eee.to == genre_id;
    });

    // get all unique node ids that have edges with the genre of interest
    var node_ids_to = temp_edges.map(function(a) {return a.to;});
    var node_ids_from = temp_edges.map(function(b) {return b.from;});
    node_ids = node_ids_from.concat(node_ids_to);
    // remove duplicate ids
    node_ids = node_ids.filter(function(item, i, ar){ return ar.indexOf(item) === i; });

    // filter nodes to only include those that have edges with genre of interest
    temp_nodes = orig_nodes.filter(function (nnn) {
        return node_ids.includes(nnn.id);
    });

    // re-draw our network map
    draw(temp_nodes, temp_edges);
}


function draw(input_nodes, input_edges) {
    // create a network
    var container = document.getElementById('mynetwork');
    data = {
        nodes: input_nodes,
        edges: input_edges
    };
    var options = {
        nodes: {
            shape: 'dot',
            size: 16
        },
        physics: {
            forceAtlas2Based: {
                gravitationalConstant: -26,
                centralGravity: 0.005,
                springLength: 230,
                springConstant: 0.18
            },
            maxVelocity: 146,
            solver: 'forceAtlas2Based',
            timestep: 0.35,
            stabilization: {iterations: 150}
        }
    };
    var network = new vis.Network(container, data, options);
}