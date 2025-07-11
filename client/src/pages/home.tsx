import Layout from "@/components/Layout";
import SlideHomeNew from "@/components/SlideHomeNew";
import SlidePruebasConcepto from "@/components/SlidePruebasConcepto";
import SlideReadyToSell from "@/components/SlideReadyToSell";
import SlideSolucionesIA from "@/components/SlideSolucionesIA";
import SlideClientesProspectos from "@/components/SlideClientesProspectos";
import SlideVentajasFixed from "@/components/SlideVentajasFixed";
import SlideSeguridadMinera from "@/components/SlideSeguridadMinera";
import SlideResultadosFinancieros from "@/components/SlideResultadosFinancieros";
import SlideOportunidadInversion from "@/components/SlideOportunidadInversion";
import SlideDocumentacion from "@/components/SlideDocumentacion";
import SlideEquipoContacto from "@/components/SlideEquipoContacto";
import AdminDashboardButton from "@/components/AdminDashboardButton";

export default function Home() {
  return (
    <Layout>
      <SlideHomeNew />
      <SlideVentajasFixed />
      <SlidePruebasConcepto />
      <SlideReadyToSell />
      <SlideSolucionesIA />
      <SlideClientesProspectos />
      <SlideSeguridadMinera />
      <SlideResultadosFinancieros />
      <SlideOportunidadInversion />
      <SlideDocumentacion />
      <SlideEquipoContacto />
      
      {/* Botón de dashboard solo visible para admin con código 2026123 */}
      <AdminDashboardButton />
    </Layout>
  );
}
