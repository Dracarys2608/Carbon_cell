import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import AppLogo from "../../assets/images/logo2.png";
import AppLogo2 from "../../assets/images/logo.png";
import {
  Apartment,
  Close,
  Help,
  Home,
  HourglassEmpty,
  Menu,
  MoreVert,
  Notifications,
  Search,
  Settings,
  SwapVert,
  ViewInAr,
  Wallet,
} from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
const Sidebar = () => {
  const [width, setWidth] = useState("25vw");
  const [open, Setopen] = useState(true);

  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <Home />,
    },
    {
      path: "/a",
      name: "Organization",
      icon: <Apartment />,
    },
    {
      path: "/b",
      name: "Assets",
      icon: <ViewInAr />,
    },
    {
      path: "/c",
      name: "Trade",
      icon: <SwapVert />,
    },
    {
      path: "/d",
      name: "History",
      icon: <HourglassEmpty />,
    },
    {
      path: "/e",
      name: "Wallet",
      icon: <Wallet />,
    },
  ];

  const menuItem2 = [
    {
      path: "/a12",
      name: "Notifications",
      icon: <Notifications />,
    },
    {
      path: "/a1",
      name: "Support",
      icon: <Help />,
    },
    {
      path: "/b1",
      name: "Settings",
      icon: <Settings />,
    },
  ];

  const navigate = useNavigate();

  const handleBtnClick = () => {
    Setopen(!open);
  };
  return (
    <div className={styles.mainContainer}>
      {open ? (
        <div className={styles.sidebar}>
          <div className={styles.appLogo}>
            <Link to="/">
              <img src={AppLogo} />
            </Link>
            <IconButton onClick={handleBtnClick}>
              <Menu style={{ color: "#ffffff", fontSize: "30px" }} />
            </IconButton>
          </div>

          <div className={styles.searchContainer}>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="search"
              margin="dense"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
              }}
              inputProps={{ sx: { color: "#ffffff" } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search style={{ color: "#ffffff" }} />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={styles.link}
              activeclassname={"active"}
            >
              <div className={styles.icon}>{item.icon}</div>
              <div className={styles.linkText}>{item.name}</div>
            </NavLink>
          ))}
          <div className={styles.secondLink}>
            {menuItem2.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className={styles.link}
                activeclassname={"active"}
              >
                <div className={styles.icon}>{item.icon}</div>
                <div className={styles.linkText}>{item.name}</div>
                {item.pill > 0 ? (
                  <div className={styles.pill}>{item.pill}</div>
                ) : (
                  <></>
                )}
              </NavLink>
            ))}

            <div className={styles.profileCardContainer}>
              <div>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar alt="Remy Sharp" src={AppLogo2} />
                </StyledBadge>
              </div>
              <div className={styles.nameCont}>
                <span>Ishan Polusta</span>
                <span>polusta@gmail.com</span>
              </div>
              <div>
                <MoreVert style={{ color: "#fff" }} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.sidebarClose}>
          <div className={styles.appLogo}>
            <IconButton onClick={handleBtnClick}>
              <Menu style={{ color: "#ffffff", fontSize: "30px" }} />
            </IconButton>
          </div>
          <div className={styles.searchContainer}>
            <Search style={{ color: "#ffffff" }} />
          </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={styles.link}
              activeclassname={"active"}
            >
              <div className={styles.icon}>{item.icon}</div>
            </NavLink>
          ))}
          {menuItem2.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={styles.link}
              activeclassname={"active"}
            >
              <div className={styles.icon}>{item.icon}</div>
            </NavLink>
          ))}
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            variant="dot"
          >
            <Avatar alt="Remy Sharp" src={AppLogo2} />
          </StyledBadge>{" "}
        </div>
      )}
      <div className={styles.SidebarMob}>
        {!open ? (
          <div className={styles.extCont}>
            <div className={styles.appLogo}>
              <Link to="/">
                <img src={AppLogo} />
              </Link>
              <IconButton onClick={handleBtnClick}>
                <Close style={{ color: "#ffffff", fontSize: "30px" }} />
              </IconButton>
            </div>
            <div className={styles.searchContainer}>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="search"
                margin="dense"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
                inputProps={{ sx: { color: "#ffffff" } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search style={{ color: "#ffffff" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            {menuItem.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className={styles.link}
                activeclassname={"active"}
              >
                <div className={styles.icon}>{item.icon}</div>
                <div className={styles.linkText}>{item.name}</div>
              </NavLink>
            ))}
            <div className={styles.secondLink}>
              {menuItem2.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={styles.link}
                  activeclassname={"active"}
                >
                  <div className={styles.icon}>{item.icon}</div>
                  <div className={styles.linkText}>{item.name}</div>
                </NavLink>
              ))}

              <div className={styles.profileCardContainer}>
                <div>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    variant="dot"
                  >
                    <Avatar alt="Remy Sharp" src={AppLogo2} />
                  </StyledBadge>
                </div>
                <div className={styles.nameCont}>
                  <span>Ishan Polusta</span>
                  <span>polusta@gmail.com</span>
                </div>
                <div>
                  <MoreVert style={{ color: "#fff" }} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {" "}
            <div className={styles.appLogo}>
              <Link to="/">
                <img src={AppLogo} />
              </Link>
              <IconButton onClick={handleBtnClick}>
                <Menu style={{ color: "#ffffff", fontSize: "30px" }} />
              </IconButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
