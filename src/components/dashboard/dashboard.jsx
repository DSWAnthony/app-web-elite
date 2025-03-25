import React from "react";
import {
  Layout,
  Card,
  Row,
  Col,
  Statistic,
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
  ReloadOutlined,
} from "@ant-design/icons";

const { Content } = Layout;
const { Title, Text } = Typography;

const Dashboard = ({ calculos, stockPorMarca, ingresosDelAnio, ingresosRecientes }) => {

  const barData = [
    { category: "Running", stock: 300 },
    { category: "Casual", stock: 250 },
    { category: "Deportiva", stock: 180 },
    { category: "Formal", stock: 100 },
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
    yField: ["nike", "adidas", "rebook"],
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
                  dataSource={ingresosRecientes}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={
                          <Image
                            src={item.imagen}
                            width={100}
                          />
                        }
                        title={item.modelo}
                        description={
                          <div>
                            <Text strong>S/{item.precio}</Text>{" "}
                            <br />
                            <Text type="secondary">Stock {item.stock_ingreso}</Text>
                            <br />
                            <Text type="secondary">{item.color}</Text>
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
