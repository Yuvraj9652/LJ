const a = {
    "Datastructures":
        [   {   "Name": "tree",
                "course": "Intro",
                "content": ["1", "B", "C"]
            },
            {   "Name": "tree1",
                "course": "Intro1",
                "content": ["1", "B", "C", "d"]
            }
        ],
    "xyz":{
        "Name": "Graphics",
        "Topic": ["BFS", "CDF", "Sorting"],
    }
}

// tree1
console.log(a.Datastructures[1].Name);
// tree
console.log(a.Datastructures[0].Name);
// Graphics
console.log(a.xyz.Name)
// (3) ['BFS', 'CDF', 'Sorting']
console.log(a.xyz.Topic);
// BFS
console.log(a.xyz.Topic[0]);
// {Name: 'tree1', course: 'Intro1', content: Array(4)}
console.log(a.Datastructures[1]);
// undefined
console.log(a.undefine);
// {Name: 'Graphics', Topic: Array(3)}
console.log(a.xyz);
