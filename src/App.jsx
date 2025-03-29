import './App.css';
import CardComposicion from './patrones/composicion/CardComposicion';
import CardProps from './patrones/composicion/CardProps';
import Layout from './patrones/composicion/Layout';
import Controlado from './patrones/controlado - no controlados/Controlado';
import NoControlado from './patrones/controlado - no controlados/NoControlado';

function App() {
  return (
    <>
      <Layout estilos={{ backgroundColor: 'red' }}>
        <h1 style={{ fontSize: '100px' }}>TITULO</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni id
          dignissimos autem nisi iste quia veniam quaerat dicta quasi eligendi,
          in aut eius modi odio officia eaque voluptatibus laborum dolore!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni id
          dignissimos autem nisi iste quia veniam quaerat dicta quasi eligendi,
          in aut eius modi odio officia eaque voluptatibus laborum dolore!
        </p>
        <button>COMPRAR</button>
      </Layout>
      {/* <h1>Patrones de Componentes</h1>
      <CardProps
        titulo="Zapillas"
        img="https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwc772bd01/products/NIDH3158-003/NIDH3158-003-1.JPG?sw=600&sh=600"
        texto="descripcion"
      />
      <CardComposicion>
        <h3>Zapillas</h3>
        <p>descripcion</p>
        <img
          style={{ width: '90%' }}
          src="https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwc772bd01/products/NIDH3158-003/NIDH3158-003-1.JPG?sw=600&sh=600"
          alt="Zapillas"
        />
      </CardComposicion> */}
      {/* <Controlado />
      <NoControlado /> */}
    </>
  );
}

export default App;
