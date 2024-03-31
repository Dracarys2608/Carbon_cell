import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import btc from "../../assets/images/btc.png";
import { getGraphData } from "../../services/graphData";
import toast, { Toaster } from "react-hot-toast";
import { Web3 } from "web3";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
} from "recharts";
import { getPriceData } from "../../services/priceData";
import { Help } from "@mui/icons-material";
import { duration } from "@mui/material";
import MetaMaskSDK from "@metamask/sdk";

const HomeComponent = () => {
  new MetaMaskSDK({
    useDeeplink: false,
    communicationLayerPreference: "socket",
  });
  const [graph, setGraph] = useState();
  const [prices, setPrices] = useState();
  const [connectedAccount, setConnectedAccount] = useState();
  const [networkId, setNetworkId] = useState("");

  async function connectMetamask() {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);

      await window.ethereum.request({ method: "eth_requestAccounts" });

      const accounts = await web3.eth.getAccounts();

      setConnectedAccount(accounts[0]);
      toast.success("Wallet Connected Successfully", { duration: 2000 });
    } else {
      toast.error("Please download metamask extension", { duration: 2000 });
    }
  }
  useEffect(() => {
    getGraphData()
      .then((res) => {
        setGraph(res?.data?.data);
      })
      .catch((err) => {
        toast.error("Try again Later", { duration: 2000 });
      });

    getPriceData()
      .then((res) => {
        console.log(res?.data?.bpi);
        const value = res?.data?.bpi;
        const data = Object.values(value);
        setPrices(data);
      })
      .catch((err) => {
        toast.error("Try again Later", { duration: 2000 });
      });
  }, []);

  const formatYAxisTick = (tick) => {
    return `${tick / 1000000}M`;
  };

  return (
    <div className={styles.mainContainer}>
      <Toaster />
      <div className={styles.secondaryContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.headings}>
            <span className={styles.head1}>
              Hello,{" "}
              <span className={styles.head2}>
                {connectedAccount ? connectedAccount : "Brooklyn Simmons"}
              </span>
              👋
            </span>
            <span className={styles.sub1}>
              Welcome to <span className={styles.sub2}>Spot trading !</span>
            </span>
          </div>

          <div className={styles.btnContainer}>
            <button className={styles.startbtn}>Start Trading</button>
            <button
              className={styles.startbtn}
              onClick={() => connectMetamask()}
            >
              Connect Wallet
            </button>
          </div>
        </div>
        <div className={styles.bodyCont}>
          <div className={styles.graphContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={graph}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="Year"
                  type="category"
                  height={80}
                  tick={{ fontSize: 12 }}
                >
                  <Label
                    offset={0}
                    style={{ textAnchor: "middle", fontSize: "14px" }}
                  >
                    Population
                  </Label>
                </XAxis>
                <YAxis
                  dataKey="Population"
                  type="number"
                  width={70}
                  tickFormatter={formatYAxisTick}
                  tick={{ fontSize: 12 }}
                >
                  <Label
                    angle={270}
                    position="insideLeft"
                    style={{ textAnchor: "middle", fontSize: "14px" }}
                  >
                    Year
                  </Label>
                </YAxis>
                <Tooltip />
                <Legend verticalAlign="top" height={36} />

                <Line
                  type="monotone"
                  dataKey="Population"
                  stroke="#2ab42a"
                  name="Population (United States)"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className={styles.assetContainer}>
            <div className={styles.assetHeader}>
              <span>Assets</span>
              <span>Today</span>
            </div>

            <div className={styles.assetCardContainer}>
              {prices &&
                prices.map((item, index) => (
                  <div className={styles.assetCard}>
                    <div className={styles.cardImgCont}>
                      <img src={btc} />
                      <span>{item.code}</span>
                    </div>
                    <div className={styles.desc}>{item.description}</div>
                    <div className={styles.rate}>
                      {item.rate}
                      <span dangerouslySetInnerHTML={{ __html: item.symbol }} />
                    </div>
                    <div className={styles.assetbtncont}>
                      <Help style={{ color: "#2ab42a" }} />
                      <button>Trade</button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default HomeComponent;
