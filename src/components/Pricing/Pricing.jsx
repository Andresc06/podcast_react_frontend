import { Card, Text, Group, Button, Container, Title } from "@mantine/core";
import "./Pricing.css";

const mockdata_basic = [
  {label: "🎙 Asesoria en temas de discusion"},
  {label: "📅 Planificacion de horarios de emision"},
  {label: "📥 Hasta 20K descargas por mes"},
];

const mockdata_pro = [
    {label: "📈 Seguimiento de metricas"},
    {label: "⚙️ Configuracion de tu cuenta en Spotify"},
    {label: "📥 Hasta 75K descargas por mes"},
];

const mockdata_premium = [
    {label: "📊 Seguimiento de metricas avanzado"},
    {label: "✅ Multiples administradores de cuenta"},
    {label: "📥 Descargas ilimitadas por mes"},
];

export function Pricing() {
  const features_basic = mockdata_basic.map((feature) => (
      <Text key={feature.label} fs={'italic'} mb={3}>{feature.label}</Text>
  ));

  const features_pro = mockdata_pro.map((feature) => (
      <Text key={feature.label} fs={'italic'} mb={3}>{feature.label}</Text>
  ));

  const features_premium = mockdata_premium.map((feature) => (
      <Text key={feature.label} fs={'italic'} mb={3}>{feature.label}</Text>
  ));

  return (
    <div className="Pricing" id="Precios">
    <Title mb={10} fz={'3rem'} m={20} ta={'center'} c={'#FFF'} fs={'italic'}>Planes y Precios</Title>
    <Container className="cards-group" mt={20}>
    <Card className='plan-card'>
      <Card.Section className="cardBody" mt="md">
          <Title ff={'monospace'}>Basico</Title>
        <Text fz="sm" c="dimmed" className="label">
          Basic configuration
        </Text>
        <Text fz="sm" fs={'italic'}>Perfecto para aquellos que quieren empezar y necesitan solo lo esencial.</Text>
        
        <Group>
          <div className="price-section">
            <Text fw={700}>
              $5.00 / 
            </Text>
            <Text fz={'14px'} c="dimmed" sx={{ lineHeight: 5 }} fw={500}>por mes</Text>
          </div>
        </Group>
        <Button fullWidth fz={'xl'} variant='gradient' bg={'#283747'} radius={'md'} h={45}>Inscribirse</Button>
        
        <Container mt={20}>
            {features_basic}
        </Container>
      </Card.Section>
    </Card>

    <Card className='plan-card'>
    <Card.Section className="cardBody" mt="md">
        <Title ff={'monospace'}>Pro</Title>
    <Text fz="sm" c="dimmed" className="label">
        Pro configuration
    </Text>
    <Text fz="sm" fs={'italic'}>Ideal para aquellos quienes producen contenido y quieren promover los analisis.</Text>

    <Group>
        <div className="price-section">
            <Text fw={700}>
            $15.00 / 
            </Text>
            <Text fz={'14px'} c="dimmed" sx={{ lineHeight: 5 }} fw={500}>por mes</Text>
        </div>
    </Group>
    <Button fullWidth fz={'xl'} variant='gradient' bg={'#283747'} radius={'md'} h={45}>Inscribirse</Button>

    <Container mt={20}>
        {features_pro}
    </Container>
    </Card.Section>
    </Card>

    <Card className='plan-card' id="premium-card">
    <Card.Section className="cardBody" mt="md">
        <Title ff={'monospace'}>Premium</Title>
    <Text fz="sm" c="dimmed" className="label">
        Premium configuration
    </Text>
    <Text fz="sm" fs={'italic'}>Para grandes organizaciones o editores de gran volumen que necesitan servicios adicionales.</Text>

    <Group>
        <div className="price-section">
            <Text fw={700}>
            $30.00 / 
            </Text>
            <Text fz={'14px'} c="dimmed" sx={{ lineHeight: 5 }} fw={500}>por mes</Text>
        </div>
    </Group>
    <Button fullWidth fz={'xl'} variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }} radius={'md'} h={45}>Inscribirse</Button>

    <Container mt={20}>
        {features_premium}
    </Container>
    </Card.Section>
    </Card>

    </Container>
    </div>
  );
}
