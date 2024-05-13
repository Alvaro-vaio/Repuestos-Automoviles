//express
const express = require('express');
const app = express();
const PORT = 3000;

//array
let repuestosAutomoviles = [
    {id: 1 , codigo: '304', marca: 'toyo', tipo: 'rodamiento', procendencia: 'Japon', precio: '200', cantidad: '300' },
    {id: 2 , codigo: '045', marca: 'nck', tipo: 'cruceta', procendencia: 'china', precio: '200', cantidad: '300' },
    {id: 3 , codigo: '837', marca: 'toyoki', tipo: 'amortiguador', procendencia: 'Brasil', precio: '200', cantidad: '300' },
    {id: 4 , codigo: '657', marca: 'tokiko', tipo: 'muñon de suspencion', procendencia: 'china', precio: '200', cantidad: '300' },
    {id: 5 , codigo: '390', marca: 'tree five', tipo: 'muñon de direccion', procendencia: 'Argentina', precio: '200', cantidad: '300' },
    {id: 6 , codigo: '454', marca: 'ichivan', tipo: 'homocinetico', procendencia: 'china', precio: '200', cantidad: '300' },
];
//manejo JSON
app.use(express.json());
//endpoint 1
app.get('/repuestos', (req, res) => {
    res.json(repuestosAutomoviles);
});
//endpoint 2
app.get('/repuestos/:id',(req, res) => {
const idObtenido = parseInt(req.params.id);
console.log(idObtenido); 
const repuestoEncontrado = repuestosAutomoviles.find((repuesto) => repuesto.id === idObtenido);
if (repuestoEncontrado){
    res.json(repuestoEncontrado);
}
else {
    res.status(404).json({mensaje: 'No hay un Repuesto con ese id'});
}
});
//endpoint 3 registrar repuesto
app.post('/registrar-repuesto', (req, res) => {
    const nuevoRepuesto = req.body;
    console.log(nuevoRepuesto);
    repuestosAutomoviles.push(nuevoRepuesto);
    res.status(201).json('Se registro Correctamente el Libro');
});
//endpoint 4 actulaizar repuesto
app.put('/actualizar-repuesto/:id', (req, res) => {
    const idObtenido = parseInt(req.params.id);
    const indexRepuestoEncontrado = repuestosAutomoviles.findIndex((repuesto) => repuesto.id === idObtenido);
    if (indexRepuestoEncontrado !== -1){
        repuestosAutomoviles[indexRepuestoEncontrado] = req.body;
        res.json(repuestosAutomoviles[indexRepuestoEncontrado]);
    }
    else {
        res.status(404).json({mensaje: 'Repuesto No Encontrado'});
    }
});
//endpoint 5 Eliminar Repuesto
app.delete('/eliminar-repuesto/:id', (req,res) => {
    const id = parseInt(req.params.id);
    reAutomovil = repuestosAutomoviles.filter(repuesto => repuesto.id !== id);
    res.status(201).json({mensaje : 'Se elimino Correctamente en Repuesto de la Lista'});
    console.log(reAutomovil);
});
//endpoint 6
app.get('/repuesto-procedencia/:procendencia', (req, res) => {
    const pais = req.params.procendencia;
    const repprocendencia = repuestosAutomoviles.filter(x => x.proPais === pais);
    if (repprocendencia.length > 0) {
        res.json(repprocendencia);
    }
    else {
        res.status(404).json ({mensaje : 'No se encontraron repuestos con esa procedencia'});
    }
});
app.listen(PORT, () => {
console.log("Servidor Corriendo en el Puerto http://localhost:" + PORT);
});