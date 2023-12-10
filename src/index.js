const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.send(`
	<h1>Bienvenido a nuestra página :) - Grupo 1</h1>
	<p>Esperamos que esto sea util para ustedes</p>
	<p>y si faltara diseño pero sobra calidad ;)</p>
	`);
});

app.get("/integrantes", (req, res) => {
	res.json([
	
	
		{
			numero: "1",
			nombre: "Mateo",
			apellido: "Miño",
			alias: "SE FUE A LA B",
		},

		{
			numero: "2",
			nombre: "David",
			apellido: "Vallejo",
			alias: "El matador",
		},
		{
			numero: "3",
			nombre: "Erick",
			apellido: "Villaroel",
			alias: "Roman",
		},
		{
			numero: "4", 
			nombre: "Danny",
			apellido: "Yanacallo",
			alias: "El foraneo",
		},
	]);
});

app.get("/productos", (req, res) => {
	res.send(`
            <h1>Catálogo de productos</h1>
                <p>Bienvenidos</p>
                <ul>
                <li>Papas</li>
                <li>Helado</li>
                <li>Encebollado</li>
                <li>Birra</li>
                </ul>
    `);
});
app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`);
});