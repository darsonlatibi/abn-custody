import {
  ArrowRight,
  //BarChart3,
  ChevronDown,
  // Cloud,
  // Code2,
  // Database,
  // Factory,
  // Gauge,
  Menu,
  Moon,
  // Network,
  // Radio,
  // Satellite,
  // ServerCog,
  // Settings2,
  Sun,
  //Truck,
  //User,
  //Users,
  X,
  // Wallet,
  // Boxes,
  // ShoppingCart,
  // UsersRound,
  // Coffee,
  // KeyRound,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";
import type { ComponentType } from "react";

import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import logo from "../../assets/logo.png";

import type { AppDispatch, RootState } from "../../stores/store";

import {
  logout,
  selectAuthUser,
  selectAuthenticated,
} from "../../features/auth/authSlice";

import "./Header.css";

/* =========================================================
   ABN CORPORATE WEBSITE
   PUBLIC COMPANY HEADER
   LIGHT / DARK THEME
   MEGA MENU + MOBILE ACCORDION
   AUTHENTICATION
   ADMIN MAIL
   NESTED MENU SUPPORT
   ========================================================= */

type NavigationChild = {
  label: string;
  path?: string;
  icon?: ComponentType<{
    size?: number;
    strokeWidth?: number;
  }>;
  description?: string;
  children?: NavigationChild[];
};

type NavigationItem = {
  label: string;
  path: string;
  children?: NavigationChild[];
};

/* =========================================================
   NAVIGATION
   ========================================================= */

const getNavigation = (
  user: ReturnType<typeof selectAuthUser>,
): NavigationItem[] => {
  const role = user?.role?.toUpperCase();

  const canAccessMailbox = role === "ADMIN" || role === "SUPER_ADMIN";

  return [
    {
      label: "Home",
      path: "/home",
    },

    // {
    //   label: "Tentang Kami",
    //   path: "/about",
    // },

    /* =====================================================
       LAYANAN
       ===================================================== */

    // {
    //   label: "Support",
    //   path: "/support",
    // },

    // {
    //   label: "Kontak",
    //   path: "/contact",
    // },

    /* =====================================================
       ADMIN ONLY — MAILBOX
       ===================================================== */

    ...(canAccessMailbox
      ? [
          // {
          //   label: "Mailbox",
          //   path: "/mail/inbox",
          // },
        ]
      : []),
  ];
};

/* =========================================================
   THEME
   ========================================================= */

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "abn-theme";

/* =========================================================
   INITIAL THEME
   ========================================================= */

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return "light";
};

/* =========================================================
   HEADER
   ========================================================= */

function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  /* =======================================================
     AUTH
     ======================================================= */

  const authenticated = useSelector((state: RootState) =>
    selectAuthenticated(state),
  );

  const user = useSelector((state: RootState) => selectAuthUser(state));

  /* =======================================================
     NAVIGATION
     ======================================================= */

  const navigation = getNavigation(user);

  /* =======================================================
     UI STATE
     ======================================================= */

  const [mobileOpen, setMobileOpen] = useState(false);

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  /* =======================================================
     DESKTOP CLOSE TIMER
     ======================================================= */

  const desktopCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* =======================================================
     CLEAR DESKTOP TIMER
     ======================================================= */

  const clearDesktopCloseTimer = () => {
    if (desktopCloseTimer.current) {
      clearTimeout(desktopCloseTimer.current);

      desktopCloseTimer.current = null;
    }
  };

  /* =======================================================
     OPEN DESKTOP SERVICES
     ======================================================= */

  const openDesktopServices = () => {
    clearDesktopCloseTimer();

    setDesktopServicesOpen(true);
  };

  /* =======================================================
     CLOSE DESKTOP SERVICES
     ======================================================= */

  const closeDesktopServices = () => {
    clearDesktopCloseTimer();

    desktopCloseTimer.current = setTimeout(() => {
      setDesktopServicesOpen(false);

      desktopCloseTimer.current = null;
    }, 180);
  };

  /* =======================================================
     CLEANUP
     ======================================================= */

  useEffect(() => {
    return () => {
      clearDesktopCloseTimer();
    };
  }, []);

  /* =======================================================
     APPLY THEME
     ======================================================= */

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  /* =======================================================
     CLOSE MOBILE MENU
     ======================================================= */

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  /* =======================================================
     MOBILE MENU
     ======================================================= */

  const toggleMobileMenu = () => {
    setMobileOpen((current) => {
      const next = !current;

      if (next) {
        clearDesktopCloseTimer();
        setDesktopServicesOpen(false);
      }

      return next;
    });
  };

  /* =======================================================
     MOBILE SERVICES
     ======================================================= */

  const toggleMobileServices = () => {
    setMobileServicesOpen((current) => !current);
  };

  /* =======================================================
     THEME
     ======================================================= */

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  const isLightTheme = theme === "light";

  /* =======================================================
     LOGOUT
     ======================================================= */

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();

      console.log("ABN WEBSITE LOGOUT: success");
    } catch (error) {
      console.error("ABN WEBSITE LOGOUT ERROR:", error);
    } finally {
      closeMobileMenu();

      navigate("/login", {
        replace: true,
      });
    }
  };

  /* =======================================================
     USER DISPLAY
     ======================================================= */

  const displayName =
    user?.full_name || user?.username || user?.email || "Account";

  /* =========================================================
     RECURSIVE DESKTOP MENU
     ========================================================= */

  const renderDesktopChildren = (
    children: NavigationChild[] | undefined,
    level = 0,
  ): React.ReactNode => {
    if (!children || children.length === 0) {
      return null;
    }

    return (
      <div className={`website-mega-level website-mega-level-${level}`}>
        {children.map((child) => {
          const Icon = child.icon;
          const hasChildren = child.children && child.children.length > 0;

          /* -----------------------------------------------
             NESTED CATEGORY
             ----------------------------------------------- */

          if (hasChildren) {
            return (
              <div key={child.label} className="website-mega-nested">
                <div className="website-mega-nested-title">
                  {Icon && (
                    <span className="website-mega-nested-icon">
                      <Icon size={16} strokeWidth={1.8} />
                    </span>
                  )}

                  <span>{child.label}</span>
                </div>

                {renderDesktopChildren(child.children, level + 1)}
              </div>
            );
          }

          /* -----------------------------------------------
             FINAL SERVICE
             ----------------------------------------------- */

          return (
            <NavLink
              key={child.path || child.label}
              to={child.path || "#"}
              className="website-mega-link"
              onClick={() => {
                clearDesktopCloseTimer();
                setDesktopServicesOpen(false);
              }}
            >
              <span className="website-mega-link-icon">
                {Icon && <Icon size={17} strokeWidth={1.8} />}
              </span>

              <span className="website-mega-link-content">
                <strong>{child.label}</strong>

                <small>{child.description || "Explore solution"}</small>
              </span>

              <ArrowRight size={14} className="website-mega-link-arrow" />
            </NavLink>
          );
        })}
      </div>
    );
  };

  /* =========================================================
     RECURSIVE MOBILE MENU
     ========================================================= */

  const renderMobileChildren = (
    children: NavigationChild[] | undefined,
    level = 0,
  ): React.ReactNode => {
    if (!children || children.length === 0) {
      return null;
    }

    return (
      <div className={`website-mobile-level website-mobile-level-${level}`}>
        {children.map((child) => {
          const Icon = child.icon;

          const hasChildren = child.children && child.children.length > 0;

          /* -----------------------------------------------
             NESTED CATEGORY
             ----------------------------------------------- */

          if (hasChildren) {
            return (
              <div key={child.label} className="website-mobile-nested">
                <div className="website-mobile-category-title">
                  {Icon && <Icon size={15} strokeWidth={1.8} />}

                  <span>{child.label}</span>
                </div>

                {renderMobileChildren(child.children, level + 1)}
              </div>
            );
          }

          /* -----------------------------------------------
             FINAL SERVICE
             ----------------------------------------------- */

          return (
            <NavLink
              key={child.path || child.label}
              to={child.path || "#"}
              className="website-mobile-service"
              onClick={closeMobileMenu}
            >
              <span className="website-mobile-service-icon">
                {Icon && <Icon size={17} strokeWidth={1.8} />}
              </span>

              <span>{child.label}</span>

              <ArrowRight size={14} className="mobile-service-arrow" />
            </NavLink>
          );
        })}
      </div>
    );
  };

  return (
    <header className="website-header">
      <div className="website-header-inner">
        {/* =================================================
            BRAND
            ================================================= */}

        <NavLink
          to="/"
          className="website-brand"
          onClick={closeMobileMenu}
          aria-label="ABN Home"
        >
          <div className="website-brand-mark">
            <img
              src={logo}
              alt="PT. Agro Berkah Nusantara"
              className="website-brand-logo"
            />
          </div>

          <div className="website-brand-text">
            <strong>PT. AGRO BERKAH NUSANTARA</strong>

            <span>ABN EMS & INDUSTRIAL INTELLIGENCE</span>
          </div>
        </NavLink>

        {/* =================================================
            DESKTOP NAVIGATION
            ================================================= */}

        <nav className="website-navigation" aria-label="Main navigation">
          {navigation.map((item) => {
            const hasChildren = item.children && item.children.length > 0;

            /* ---------------------------------------------
               ITEM WITH CHILDREN
               --------------------------------------------- */

            if (hasChildren) {
              return (
                <div
                  key={item.path}
                  className={`website-nav-dropdown ${
                    desktopServicesOpen ? "open" : ""
                  }`}
                  onMouseEnter={openDesktopServices}
                  onMouseLeave={closeDesktopServices}
                >
                  <button
                    type="button"
                    className="website-nav-dropdown-trigger"
                    onClick={() => {
                      clearDesktopCloseTimer();

                      setDesktopServicesOpen((current) => !current);
                    }}
                    aria-expanded={desktopServicesOpen}
                  >
                    <span>{item.label}</span>

                    <ChevronDown
                      size={15}
                      strokeWidth={1.8}
                      className="desktop-dropdown-icon"
                    />
                  </button>

                  {/* MEGA MENU */}

                  <div
                    className="website-mega-menu"
                    onMouseEnter={openDesktopServices}
                    onMouseLeave={closeDesktopServices}
                  >
                    <div className="website-mega-menu-inner">
                      {/* HEADER */}

                      <div className="website-mega-header">
                        <div>
                          <span className="website-mega-eyebrow">
                            ABN SERVICES
                          </span>

                          <h3>Industrial Technology Solutions</h3>

                          <p>
                            Solusi digital, automation, IoT, fleet, dan
                            infrastructure untuk transformasi industri.
                          </p>
                        </div>

                        <NavLink
                          to="/layanan"
                          className="website-mega-view-all"
                          onClick={() => {
                            clearDesktopCloseTimer();

                            setDesktopServicesOpen(false);
                          }}
                        >
                          <span>Lihat Semua Layanan</span>

                          <ArrowRight size={15} />
                        </NavLink>
                      </div>

                      {/* =================================================
                          LEVEL 1
                          ================================================= */}

                      <div className="website-mega-grid">
                        {item.children?.map((category) => {
                          const CategoryIcon = category.icon;

                          const hasNested =
                            category.children &&
                            category.children.some(
                              (child) =>
                                child.children && child.children.length > 0,
                            );

                          return (
                            <div
                              key={category.label}
                              className={`website-mega-column ${
                                hasNested ? "has-nested" : ""
                              }`}
                            >
                              <div className="website-mega-column-title">
                                {CategoryIcon && (
                                  <CategoryIcon size={15} strokeWidth={1.8} />
                                )}

                                <span>{category.label}</span>
                              </div>

                              {renderDesktopChildren(category.children, 1)}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            /* ---------------------------------------------
               NORMAL NAVIGATION ITEM
               --------------------------------------------- */

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `website-nav-link ${isActive ? "active" : ""}`
                }
                onClick={closeMobileMenu}
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* =================================================
            HEADER ACTIONS
            ================================================= */}

        <div className="website-header-actions">
          {/* THEME */}

          <button
            type="button"
            className="website-theme-button"
            onClick={toggleTheme}
            aria-label={
              isLightTheme ? "Switch to dark mode" : "Switch to light mode"
            }
            title={isLightTheme ? "Dark mode" : "Light mode"}
          >
            {isLightTheme ? (
              <Moon size={18} strokeWidth={2} />
            ) : (
              <Sun size={18} strokeWidth={2} />
            )}
          </button>

          {/* AUTH */}

          {authenticated ? (
            <>
              <span className="website-header-user" title={displayName}>
                {displayName}
              </span>

              <button
                type="button"
                className="website-header-login"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <></>
            // <NavLink
            //   to="/login"
            //   className="website-header-login"
            //   onClick={closeMobileMenu}
            // >
            //   Log in
            // </NavLink>
          )}

          {/* CONTACT */}

          {/* <NavLink
            to="/contact"
            className="website-header-cta"
            onClick={closeMobileMenu}
          >
            <span>Contact ABN</span>

            <ArrowRight size={16} strokeWidth={2} />
          </NavLink> */}

          {/* MOBILE */}

          <button
            type="button"
            className="website-mobile-button"
            onClick={toggleMobileMenu}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="website-mobile-navigation"
          >
            {mobileOpen ? (
              <X size={22} strokeWidth={2} />
            ) : (
              <Menu size={22} strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* ===================================================
          MOBILE NAVIGATION
          =================================================== */}

      <div
        id="website-mobile-navigation"
        className={`website-mobile-navigation ${mobileOpen ? "open" : ""}`}
      >
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => {
            const hasChildren = item.children && item.children.length > 0;

            /* ---------------------------------------------
               MOBILE ITEM WITH CHILDREN
               --------------------------------------------- */

            if (hasChildren) {
              return (
                <div key={item.path} className="website-mobile-services">
                  <button
                    type="button"
                    className={`website-mobile-nav-link website-mobile-services-trigger ${
                      mobileServicesOpen ? "active" : ""
                    }`}
                    onClick={toggleMobileServices}
                    aria-expanded={mobileServicesOpen}
                  >
                    <span>{item.label}</span>

                    <ChevronDown
                      size={17}
                      strokeWidth={1.8}
                      className={mobileServicesOpen ? "rotate" : ""}
                    />
                  </button>

                  <div
                    className={`website-mobile-services-content ${
                      mobileServicesOpen ? "open" : ""
                    }`}
                  >
                    {/* ALL SERVICES */}

                    <NavLink
                      to="/layanan"
                      className="website-mobile-service-all"
                      onClick={closeMobileMenu}
                    >
                      <span>Semua Layanan</span>

                      <ArrowRight size={15} />
                    </NavLink>

                    {/* =================================================
                        RECURSIVE MOBILE CONTENT
                        ================================================= */}

                    {item.children?.map((category) => {
                      const CategoryIcon = category.icon;

                      return (
                        <div
                          key={category.label}
                          className="website-mobile-category"
                        >
                          <div className="website-mobile-category-title">
                            {CategoryIcon && (
                              <CategoryIcon size={15} strokeWidth={1.8} />
                            )}

                            <span>{category.label}</span>
                          </div>

                          {renderMobileChildren(category.children, 1)}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }

            /* ---------------------------------------------
               NORMAL MOBILE ITEM
               --------------------------------------------- */

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `website-mobile-nav-link ${isActive ? "active" : ""}`
                }
                onClick={closeMobileMenu}
              >
                <span>{item.label}</span>

                <ArrowRight size={15} strokeWidth={1.8} />
              </NavLink>
            );
          })}

          {/* =================================================
              MOBILE AUTH
              ================================================= */}

          {/* {authenticated ? (
            <>
              <div className="website-mobile-user">
                <User size={17} strokeWidth={1.8} />

                <span>{displayName}</span>
              </div>

              <button
                type="button"
                className="website-mobile-nav-link"
                onClick={handleLogout}
              >
                <span>Logout</span>

                <ArrowRight size={15} strokeWidth={1.8} />
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className="website-mobile-nav-link"
              onClick={closeMobileMenu}
            >
              <span>Log in</span>

              <ArrowRight size={15} strokeWidth={1.8} />
            </NavLink>
          )} */}

          {/* =================================================
              MOBILE THEME
              ================================================= */}

          <button
            type="button"
            className="website-mobile-theme"
            onClick={toggleTheme}
            aria-label={
              isLightTheme ? "Switch to dark mode" : "Switch to light mode"
            }
          >
            {isLightTheme ? (
              <Moon size={17} strokeWidth={2} />
            ) : (
              <Sun size={17} strokeWidth={2} />
            )}

            <span>{isLightTheme ? "Dark Mode" : "Light Mode"}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
