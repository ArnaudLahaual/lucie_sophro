import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./store/store";
import { SnackbarProvider } from "notistack";
import { ConfigProvider } from "antd";
import frFR from "antd/locale/fr_FR";

import dayjs from "dayjs";
import "dayjs/locale/fr";

dayjs.locale("fr");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={frFR}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          autoHideDuration={2000}
        >
          <App />
        </SnackbarProvider>
      </ConfigProvider>
    </Provider>
  </StrictMode>,
);
