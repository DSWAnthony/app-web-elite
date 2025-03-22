import React from "react";
import {
  Layout,
  Card,
  Row,
  Col,
  Table,
  Statistic,
  Badge,
  List,
  Typography,
  Image,
} from "antd";
import { Pie, Column, Line } from "@ant-design/plots";
import {
  ArrowUpOutlined,
  ShoppingCartOutlined,
  TrophyOutlined,
  UserOutlined,
  GiftOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

const { Content } = Layout;
const { Title, Text } = Typography;

const Dashboard = ({ products = [] , calculos, stockPorMarca, ingresosDelAnio }) => {

  const barData = [
    { category: "Running", stock: 300 },
    { category: "Casual", stock: 250 },
    { category: "Deportiva", stock: 180 },
    { category: "Formal", stock: 100 },
  ];

  const columns = [
    { title: "Producto", dataIndex: "producto", key: "producto" },
    { title: "Marca", dataIndex: "marca", key: "marca" },
    {
      title: "Movimiento",
      dataIndex: "tipo",
      key: "tipo",
      render: (tipo) => (
        <Badge status={tipo === "Entrada" ? "success" : "error"} text={tipo} />
      ),
    },
    { title: "Cantidad", dataIndex: "cantidad", key: "cantidad" },
    { title: "Fecha", dataIndex: "fecha", key: "fecha" },
  ];

  const tableData = [
    {
      key: "1",
      producto: "Air Max",
      marca: "Nike",
      tipo: "Entrada",
      cantidad: 20,
      fecha: "2024-07-10",
    },
    {
      key: "2",
      producto: "Superstar",
      marca: "Adidas",
      tipo: "Salida",
      cantidad: 15,
      fecha: "2024-07-09",
    },
    {
      key: "3",
      producto: "Classic",
      marca: "Reebok",
      tipo: "Entrada",
      cantidad: 10,
      fecha: "2024-07-08",
    },
  ];

  // Orders status data
  const orderStatusData = [
    { month: "ene", nike: 800, adidas: 1200, rebook: 180 },
    { month: "Feb", nike: 900, adidas: 1300, rebook: 200 },
    { month: "Mar", nike: 850, adidas: 1100, rebook: 210 },
    { month: "Abr", nike: 950, adidas: 1400, rebook: 220 },
    { month: "May", nike: 1100, adidas: 1600, rebook: 250 },
    { month: "Jun", nike: 1200, adidas: 1700, rebook: 260 },
    { month: "Jul", nike: 1000, adidas: 1500, rebook: 240 },
    { month: "Ago", nike: 1050, adidas: 1550, rebook: 230 },
    { month: "Sep", nike: 1150, adidas: 1650, rebook: 270 },
    { month: "Oct", nike: 1250, adidas: 1750, rebook: 280 },
    { month: "Nov", nike: 1250, adidas: 1750, rebook: 280 },
    { month: "Dic", nike: 1250, adidas: 1750, rebook: 280 },
  ];

  // Chart configurations
  const pieConfig = {
    data: stockPorMarca,
    angleField: "stock",
    colorField: "marca",
    radius: 0.8,
    width: 250,
    height: 250,
    interactions: [{ type: "element-active" }],
  };

  const barConfig = {
    data: barData,
    xField: "category",
    yField: "stock",
    color: "#1890ff",
    width: 290,
    height: 250
  };

  const lineConfig = {
    data: ingresosDelAnio,
    xField: "month",
    yField: ["nike", "adidas"],
    seriesField: "type",
    smooth: true,
    height: 300, 
    autoFit: true,
    legend: {
      position: "top",
    },
    animation: {
      appear: {
        animation: "path-in",
        duration: 1000,
      },
    },
  };

  const sampleProducts =
    products.length > 0
      ? products
      : [
          {
            id: 1,
            name: "Producto 1",
            stock: 38,
            image: "/api/placeholder/50/50",
          },
          {
            id: 2,
            name: "Producto 2",
            stock: 8,
            image: "/api/placeholder/50/50",
          },
          {
            id: 3,
            name: "Producto 3",
            stock: 79,
            image: "/api/placeholder/50/50",
          },
          {
            id: 4,
            name: "Producto 4",
            stock: 26,
            image: "/api/placeholder/50/50",
          },
        ];

  const topSalesProducts = [
    {
      name: "Zapatilla Nike",
      price: 480,
      discount: 30,
      image: "/api/placeholder/50/50",
    },
    {
      name: "Zapatilla Nike",
      price: 4500,
      discount: 30,
      image: "/api/placeholder/50/50",
    },
    {
      name: "Zapatilla Nike",
      price: 900,
      discount: 30,
      image: "/api/placeholder/50/50",
    },
    {
      name: "Zapatilla Nike",
      price: 60,
      discount: 30,
      image: "/api/placeholder/50/50",
    },
    {
      name: "Zapatilla Nike",
      price: 100,
      discount: 30,
      image: "/api/placeholder/50/50",
    },
    {
      name: "Zapatilla Nike",
      price: 380,
      discount: 30,
      image: "/api/placeholder/50/50",
    },
    {
      name: "Zapatilla Nike",
      price: 380,
      discount: 30,
      image: "/api/placeholder/50/50",
    },
    {
      name: "Zapatilla Nike",
      price: 380,
      discount: 30,
      image: "/api/placeholder/50/50",
    },
    {
      name: "Zapatilla Nike",
      price: 380,
      discount: 30,
      image: "/api/placeholder/50/50",
    },
  ];

  return (
    <Layout
      style={{ minHeight: "100vh", padding: "20px", background: "#f0f2f5" }}
    >
      <Content>
        {/* Top Stats Cards */}
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Card variant={false} className="dashboard-card">
              <Statistic
                title={<Text strong>Inversion</Text>}
                value={calculos.totalInversion}
                prefix={<ArrowUpOutlined style={{ color: "#52c41a" }} />}
                suffix="S"
                valueStyle={{ color: "#52c41a" }}
              />
              <ReloadOutlined
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  fontSize: "16px",
                }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Card variant={false} className="dashboard-card">
              <Statistic
                title={<Text strong>Bajo Stock</Text>}
                value={calculos.bajoStock}
                prefix={<ShoppingCartOutlined style={{ color: "#1890ff" }} />}
                valueStyle={{ color: "#1890ff" }}
              />
              <ReloadOutlined
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  fontSize: "16px",
                }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Card variant={false} className="dashboard-card">
              <Statistic
                title={<Text strong>Productos</Text>}
                value={calculos.totalZapatos}
                prefix={<TrophyOutlined style={{ color: "#722ed1" }} />}
                valueStyle={{ color: "#722ed1" }}
              />
              <ReloadOutlined
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  fontSize: "16px",
                }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Card variant={false} className="dashboard-card">
              <Statistic
                title={<Text strong>Proveedores</Text>}
                value={calculos.totalProveedor}
                prefix={<UserOutlined style={{ color: "#fa8c16" }} />}
                valueStyle={{ color: "#fa8c16" }}
              />
              <ReloadOutlined
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  fontSize: "16px",
                }}
              />
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]} style={{ marginTop: "16px" }}>
          <Col xs={24} lg={16}>
          {/* Distribution Charts */}
          <Row gutter={[16, 10]}>
              <Col xs={24} md={12}>
                <Card title="Distribución por Marca" variant={false}>
                  <Pie {...pieConfig} />
                </Card>
              </Col>
              <Col xs={24} md={12}>
                <Card title="Stock por Categoría" >
                  <Column {...barConfig} />
                </Card>
              </Col>
            </Row>
            <Card
              title="Ingresos del Año"
              variant={false}
              style={{ padding: "12px",marginTop: 16 }}
            >
              <Line {...lineConfig} />
            </Card>
          </Col>

          <Col xs={24} lg={8}>
            <Card
              title="Nuevos Ingresos"
              variant={false}
              extra={<span>Febrero ▼</span>}
              style={{
                height: "100%", 
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  flex: 1,
                  overflowY: "auto",
                  maxHeight: "700px",
                  paddingRight: "8px",
                }}
              >
                <List
                  itemLayout="horizontal"
                  dataSource={topSalesProducts}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={
                          <Image
                            src="https://imgs.search.brave.com/_toqT8IRn1TgcZsWaLmUIyGozfTFh2vCNwcyEiZ3NAU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzExdjJwUFZIS0wu/anBn"
                            width={100}
                          />
                        }
                        title={item.name}
                        description={
                          <div>
                            <Text strong>${item.price}</Text>{" "}
                            <Text type="secondary">OFF {item.discount}%</Text>
                          </div>
                        }
                      />
                    </List.Item>
                  )}
                />
              </div>
            </Card>
          </Col>
        </Row>
     
      </Content>
    </Layout>
  );
};

export default Dashboard;
