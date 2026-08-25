import ProductoCard from './components/ProductoCard';
import { productos } from './data/productos';
import './App.css';
import { useState } from "react";

function App() {

const disponibles = productos.filter(
producto => producto.stock > 0
);

const cantidadAgotados = productos.filter(
  producto => producto.stock === 0
).length;


const valorInventario = productos.reduce(
(total, producto) =>
total + producto.precio * producto.stock,
0
);

// Estados
const [busqueda, setBusqueda] = useState("");
const [categoria, setCategoria] = useState("Todas");
const [soloDisponibles, setSoloDisponibles] = useState(false);

  // Filtro
const productosFiltrados = productos.filter(producto => {

const coincideNombre =
producto.nombre
.toLowerCase()
.includes(busqueda.toLowerCase());

const coincideCategoria =
categoria === "Todas" ||
producto.categoria === categoria;

const coincideStock =
!soloDisponibles ||
producto.stock > 0;

return (
coincideNombre &&
coincideCategoria &&
coincideStock
);
});

const productosOrdenados = [...productosFiltrados].sort(
  (a, b) => a.precio - b.precio
);

return (
<main className="contenedor">

<h1>Tienda tecnológica</h1>

<p>
Productos disponibles: {disponibles.length}
</p>

<p>
Productos encontrados: {productosFiltrados.length}
</p>

<p>
Productos agotados: {cantidadAgotados}
</p>

<p>
Valor total del inventario: ${valorInventario}
</p>


<select
value={categoria}
onChange={(evento) =>
setCategoria(evento.target.value)
        }
>
<option value="Todas">
Todas
</option>

<option value="Perifericos">
Periféricos
</option>

<option value="Pantallas">
Pantallas
</option>

<option value="Audio">
Audio
</option>

<option value="Accesorios">
Accesorios
</option>

<option value="Almacenamiento">
Almacenamiento 
</option>

<option value="Computadores">
Computadores
</option>
</select>

<input
type="text"
placeholder="Buscar producto..."
value={busqueda}
onChange={(evento) => {
setBusqueda(evento.target.value);
}}
/>
<label>
<input
type="checkbox"
checked={soloDisponibles}
onChange={(evento) =>
setSoloDisponibles(
evento.target.checked
)
}
/>
</label>
<br />
<br />

<section className="productos">

{productosOrdenados.map(producto => (
<ProductoCard
key={producto.id}
producto={producto}
/>
))}

</section>

</main>
);
}

export default App;