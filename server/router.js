const express = require('express');
const data = require('./data.json');
const router = express.Router();

let gDetail = data.data;

// fetching all graph data
router.get('/getAllGraphs',(req,res,next)=>{
    let finalGdata = [];
    gDetail.map((graph) => {
        if(graph) {
            finalGdata.push(graph);
        }
    })
    res.json(finalGdata);
});

// fetching sepecific graph
router.get('/getGraph/:gId',(req,res,next)=>{
    let specificGraph;
    gDetail.map((gData, index) => {
        if(gData.id === req.params.gId) {
            specificGraph = gData;
        }
    })
    res.json(specificGraph);
});

// delete a graph
router.delete('/deleteGraph/:gId',(req,res,next)=>{
    let specificGraph;
    let finalGdata = [];

    gDetail.map((gData, index) => {
        if(gData.id === req.params.gId) {
            specificGraph = gData;
            delete gDetail[index];
        }
    });

    gDetail.map((graph) => {
        if(graph) {
            finalGdata.push(graph);
        }
    })
    res.json(finalGdata);
});

// create new graph
router.post('/createGraph/:name',(req,res,next)=>{
    let existingIds = gDetail.map(graph => graph.id);
    existingIds.push('grph_0');
    let lastCreatedId = existingIds.sort()[existingIds.length - 1];
    let idGenerated = 'grph_' + (Number(lastCreatedId[lastCreatedId.length - 1]) + 1);
    gDetail.push({
        "id": idGenerated,
        "name": req.params.name,
        "data": {}
    });
    res.json("graph created");
});


module.exports = router;