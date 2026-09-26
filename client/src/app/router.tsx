import { Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";
import ProtectedRoute from "../components/auth/ProtectedRoute";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Solutions from "../pages/Solutions/Solutions";
import Industries from "../pages/Industries/Industries";
import Products from "../pages/Products/Products";
import Projects from "../pages/Projects/Projects";
import Technology from "../pages/Technology/Technology";
import Insights from "../pages/Insights/Insights";
import Contact from "../pages/Contact/Contact";
import CustomSolutionRequest from "../pages/Products/CustomSolutionRequest";
import CatalogProduct from "../pages/Products/CatalogProduct";
import Blogs from "../pages/blogs/Blogs";
import Portfolio from "../pages/portfolio/Portfolio";

// import SoftwareDevelopment from "../pages/layanan/SoftwareDevelopment";
// import SystemIntegration from "../pages/layanan/SystemIntegration";
// import DataAnalytics from "../pages/layanan/DataAnalytics";
// import IndustrialIot from "../pages/layanan/IndustrialIot";
// import IndustrialAutomation from "../pages/layanan/IndustrialAutomation";
// import ScadaMonitoring from "../pages/layanan/ScadaMonitoring";
// import IotHardware from "../pages/layanan/IotHardware";
// import FleetManagement from "../pages/layanan/FleetManagement";
// import GpsTracking from "../pages/layanan/GpsTracking";
// import CloudInfrastructure from "../pages/layanan/CloudInfrastructure";
// import DataInfrastructure from "../pages/layanan/DataInfrastructure";
// import ServerNetwork from "../pages/layanan/ServerNetwork";

import Inbox from "../pages/mail/Inbox";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import ForgotPassword from "../pages/Login/ForgotPassword";
import ResetPassword from "../pages/Login/ResetPassword";
import Compose from "../pages/mail/Compose";
import ChangePassword from "../pages/Login/ChangePassword";
import Finance from "../pages/management/Finance";
import HR from "../pages/management/HR";
import Inventory from "../pages/management/Inventory";
import Procurement from "../pages/management/Procurement";
import CRM from "../pages/management/CRM";
// import Support from "../pages/layanan/Support/Support";
// import BeliEMS from "../pages/layanan/EMS/Beli/BeliEMS";
// import SewaEMS from "../pages/layanan/EMS/Sewa/SewaEMS";
import OdooEmployees from "../pages/odoo/OdooEmployees";
import OdooUsers from "../pages/odoo/OdooUsers";
import Checkout from "../pages/checkout/Checkout";
import ProductsForSale from "../pages/Products/ProductsForSale";
import Layanan from "../pages/layanan/Layanan";
import Support from "../pages/support/Support";

/* =========================================================
   ABN CORPORATE WEBSITE
   PUBLIC ROUTER
   ========================================================= */

function AppRouter() {
  return (
    <Routes>
      {/* =====================================================
          PUBLIC WEBSITE
          ===================================================== */}

      <Route element={<AppLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Layanan */}
        <Route path="/layanan" element={<Layanan />} />
        {/* <Route path="/layanan/support" element={<Support />} />
        <Route path="/layanan/ems/beli" element={<BeliEMS />} />
        <Route path="/layanan/ems/sewa" element={<SewaEMS />} /> */}

        <Route
          path="/layanan/products-for-sale"
          element={<ProductsForSale />}
        />

        {/* <Route
          path="/layanan/software-development"
          element={<SoftwareDevelopment />}
        />

        <Route
          path="/layanan/system-integration"
          element={<SystemIntegration />}
        />

        <Route path="/layanan/data-analytics" element={<DataAnalytics />} />

        <Route path="/layanan/industrial-iot" element={<IndustrialIot />} />

        <Route
          path="/layanan/industrial-automation"
          element={<IndustrialAutomation />}
        />

        <Route path="/layanan/scada-monitoring" element={<ScadaMonitoring />} />

        <Route path="/layanan/iot-hardware" element={<IotHardware />} />

        <Route path="/layanan/fleet-management" element={<FleetManagement />} /> */}

        <Route path="/support" element={<Support />} />

        <Route path="/layanan/hr" element={<HR />} />

        <Route path="/layanan/finance" element={<Finance />} />
        <Route path="/layanan/inventory" element={<Inventory />} />
        <Route path="/layanan/proc" element={<Procurement />} />
        <Route path="/layanan/crm" element={<CRM />} />

        {/* <Route path="/layanan/gps-tracking" element={<GpsTracking />} />

        <Route
          path="/layanan/cloud-infrastructure"
          element={<CloudInfrastructure />}
        />

        <Route
          path="/layanan/data-infrastructure"
          element={<DataInfrastructure />}
        />

        <Route path="/layanan/server-network" element={<ServerNetwork />} /> */}

        <Route path="/blog" element={<Blogs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/products" element={<Products />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/custom-solution-request"
          element={<CustomSolutionRequest />}
        />

        <Route path="/catalog" element={<CatalogProduct />} />
      </Route>

      {/* =====================================================
          PROTECTED MAIL
          LOGIN REQUIRED
          ===================================================== */}

      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route path="/mail/inbox" element={<Inbox folder="INBOX" />} />
          <Route path="/mail/starred" element={<Inbox folder="STARRED" />} />

          <Route path="/mail/sent" element={<Inbox folder="SENT" />} />

          <Route path="/mail/archive" element={<Inbox folder="ARCHIVE" />} />

          <Route path="/mail/trash" element={<Inbox folder="TRASH" />} />

          <Route path="/mail/compose" element={<Compose />} />

          <Route path="/layanan/checkout" element={<Checkout />} />

          <Route path="/odoo/users" element={<OdooUsers />} />
          <Route path="/odoo/employees" element={<OdooEmployees />} />
        </Route>
      </Route>

      {/* =====================================================
          FALLBACK
          ===================================================== */}

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRouter;
